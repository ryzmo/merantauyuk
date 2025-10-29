"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Mail, ShieldCheck, Loader2 } from "lucide-react";
import Link from "next/link";

export default function VerifyPage() {
  const router = useRouter();
  const { email } = router.query;

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [pendingUser, setPendingUser] = useState(null);

  // 🧩 Ambil data user sementara dari localStorage (dikirim dari register)
  useEffect(() => {
    const savedUser = localStorage.getItem("pendingUser");
    if (savedUser) {
      setPendingUser(JSON.parse(savedUser));
    } else if (!email) {
      // Jika tidak ada email & data user, redirect balik ke register
      const timeout = setTimeout(() => router.push("/register"), 2000);
      return () => clearTimeout(timeout);
    }
  }, [email, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // 📨 Gabungkan OTP + data user yang dikirim dari localStorage
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          otp,
          name: pendingUser?.name,
          phone: pendingUser?.phone,
          status: pendingUser?.status,
          password: pendingUser?.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // 🧹 Hapus data sementara setelah sukses
      localStorage.removeItem("pendingUser");

      setMessage("✅ Verifikasi berhasil! Mengarahkan ke halaman login...");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      setMessage(`❌ ${err.message || "Kode OTP salah atau kadaluarsa"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#faf5ff] via-[#f3e8ff] to-white text-gray-800 p-6">
      <div className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 shadow-xl rounded-3xl px-8 py-10 w-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <ShieldCheck size={42} className="text-[#8b5cf6]" />
        </div>

        <h1 className="text-2xl font-extrabold text-[#8b5cf6] mb-2">
          Verifikasi Email
        </h1>
        <p className="text-gray-600 mb-6 text-sm">
          Masukkan kode OTP yang kami kirim ke:
          <br />
          <span className="font-semibold text-[#8b5cf6]">
            {email || pendingUser?.email || "Email tidak ditemukan"}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            maxLength={4}
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/[^0-9]/g, "").slice(0, 4))
            }
            placeholder="Masukkan 4 digit kode OTP"
            className="w-full text-center text-xl tracking-widest font-mono border border-[#c084fc]/30 rounded-full px-4 py-3 bg-white/70 focus:ring-2 focus:ring-[#c084fc]/30 focus:border-[#8b5cf6] outline-none transition-all"
            required
          />

          <button
            type="submit"
            disabled={loading || otp.length !== 4}
            className="w-full flex justify-center items-center gap-2 rounded-full py-2.5 font-semibold text-white transition-all shadow-md hover:shadow-lg disabled:opacity-50"
            style={{
              background:
                "linear-gradient(to right, #f9a8d4, #c084fc, #93c5fd)",
              boxShadow: "0 4px 20px rgba(192,132,252,0.4)",
            }}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Memverifikasi...
              </>
            ) : (
              "Verifikasi Sekarang"
            )}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-center text-gray-700">{message}</p>
        )}

        <div className="mt-6 text-xs text-gray-500">
          <Mail size={14} className="inline mr-1 text-[#8b5cf6]" />
          Tidak menerima email?{" "}
          <Link
            href="/register"
            className="text-[#8b5cf6] font-medium hover:underline"
          >
            Daftar ulang
          </Link>
        </div>
      </div>
    </main>
  );
}
