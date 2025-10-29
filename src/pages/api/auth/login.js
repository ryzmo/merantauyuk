import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, password } = req.body;

    // ✅ Validasi input
    if (!email || !password) {
      return res.status(400).json({ message: "Email dan password wajib diisi" });
    }

    // 🔍 Cari user berdasarkan email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "Akun tidak ditemukan" });
    }

    // 🚫 Cek apakah user sudah diverifikasi
    if (!user.verified) {
      return res.status(403).json({ message: "Akun belum diverifikasi" });
    }

    // 🔑 Cek password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Kata sandi salah" });
    }

    // 🪙 Buat JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" } // token berlaku 7 hari
    );

    // 🧾 Kirim response sukses
    return res.status(200).json({
      message: "Login berhasil",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        status: user.status,
        verified: user.verified,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Terjadi kesalahan server" });
  }
}
