import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, status, password } = req.body;

    // 🧩 Validasi input
    if (!name || !email || !password || !phone || !status) {
      return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    // 🚫 Cek email sudah terdaftar
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email sudah terdaftar. Silakan login." });
    }

    // 🧹 Hapus OTP lama (>10 menit)
    const expiredTime = new Date(Date.now() - 10 * 60 * 1000);
    await prisma.otpVerification.deleteMany({
      where: { createdAt: { lt: expiredTime } },
    });

    // 🔢 Generate OTP 4 digit
    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    // 💾 Simpan atau update OTP
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 menit dari sekarang

await prisma.otpVerification.upsert({
  where: { email },
  update: { otp, createdAt: new Date(), expiresAt },
  create: { email, otp, expiresAt },
});


    // 📬 Setup transporter Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false, // gunakan TLS (port 587)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Brevo kadang butuh ini di local dev
      },
    });

    // 💌 Kirim email OTP
    await transporter.sendMail({
      from: `"MerantauYuk" <merantauyuk.id@gmail.com>`,
      to: email,
      subject: "Kode OTP Verifikasi Akun MerantauYuk",
      html: `
        <div style="font-family:sans-serif; text-align:center;">
          <h2>Halo, ${name || "Pengguna"} 👋</h2>
          <p>Berikut kode OTP verifikasi akun Anda:</p>
          <h1 style="font-size:32px; letter-spacing:6px; color:#8b5cf6;">${otp}</h1>
          <p>Kode ini berlaku selama <b>10 menit</b>. Jangan bagikan kepada siapa pun.</p>
          <hr />
          <p style="font-size:12px; color:#999;">© ${new Date().getFullYear()} MerantauYuk</p>
        </div>
      `,
    });

    console.log("✅ OTP terkirim ke:", email);
    return res.status(200).json({ message: "OTP telah dikirim ke email Anda", email });
  } catch (err) {
    console.error("Register (OTP) error:", err);
    return res.status(500).json({ message: "Gagal mengirim OTP" });
  }
}
