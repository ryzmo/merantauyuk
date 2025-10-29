import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, otp } = req.body;

    // 🧩 Validasi input
    if (!email || !otp) {
      return res.status(400).json({ message: "Data tidak lengkap" });
    }

    // 🔍 Cek OTP
    const record = await prisma.otpVerification.findUnique({ where: { email } });
    if (!record) {
      return res.status(400).json({ message: "OTP tidak ditemukan atau sudah kadaluarsa" });
    }

    const now = new Date();
    if (record.otp !== otp) {
      return res.status(400).json({ message: "Kode OTP salah" });
    }
    if (record.expiresAt < now) {
      return res.status(400).json({ message: "Kode OTP sudah kadaluarsa" });
    }

    // ✅ OTP valid → hapus OTP
    await prisma.otpVerification.delete({ where: { email } });

    // ⚙️ Ambil data user sementara dari request body (frontend kirim lagi)
    const { name, phone, status, password } = req.body;

    // Jika user sudah ada, langsung verifikasi
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      await prisma.user.update({
        where: { email },
        data: { verified: true },
      });
      return res.status(200).json({ message: "Akun sudah diverifikasi sebelumnya" });
    }

    // 🔒 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🧾 Simpan user baru ke database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        status,
        password: hashedPassword,
        verified: true,
      },
    });

    return res.status(200).json({ message: "Verifikasi berhasil, akun telah dibuat", user });
  } catch (err) {
    console.error("Verify OTP error:", err);
    return res.status(500).json({ message: "Gagal memverifikasi OTP" });
  }
}
