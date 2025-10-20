"use client";

import { useState } from "react";
import { Eye, EyeOff, Home } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-[#faf5ff] via-[#f3e8ff] to-white">
      {/* ✅ Left Section - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center p-10">
        <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/siluet2.jpg"
            alt="Kota Perantau"
            className="w-full h-[520px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent text-white">
            <h3 className="text-lg font-semibold">
              Jelajahi Kota Impianmu 🌆
            </h3>
            <p className="text-sm text-gray-200">
              Temukan hunian dan komunitas terbaik untuk perantau.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Right Section - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 shadow-xl rounded-3xl px-8 py-10 w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <Home className="text-[#8b5cf6]" size={28} />
            <h1 className="text-2xl font-extrabold text-[#8b5cf6]">
              Merantau<span className="text-[#f9a8d4]">Yuk!</span>
            </h1>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Selamat Datang Kembali 💜
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Masuk untuk melanjutkan petualanganmu!
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Masukkan Email"
                className="w-full border border-[#c084fc]/30 rounded-full px-4 py-2.5 text-sm bg-white/70 focus:ring-2 focus:ring-[#c084fc]/30 focus:border-[#8b5cf6] outline-none transition-all"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan Kata Sandi"
                className="w-full border border-[#c084fc]/30 rounded-full px-4 py-2.5 text-sm bg-white/70 focus:ring-2 focus:ring-[#c084fc]/30 focus:border-[#8b5cf6] outline-none transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-2.5 text-gray-400 hover:text-[#8b5cf6] transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Remember me & Forgot Password */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded text-[#8b5cf6] border-gray-300 focus:ring-[#c084fc]"
                />
                Ingat saya
              </label>
              <Link
                href="/forgot-password"
                className="text-[#8b5cf6] hover:underline font-medium"
              >
                Lupa kata sandi?
              </Link>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full rounded-full py-2.5 font-semibold text-white transition-all shadow-md hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(to right, #f9a8d4, #c084fc, #93c5fd)",
                boxShadow: "0 4px 20px rgba(192,132,252,0.4)",
              }}
            >
              Masuk
            </button>
          </form>

          {/* Separator */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-[#c084fc]/20" />
            <span className="mx-3 text-xs text-gray-500">atau</span>
            <div className="flex-grow border-t border-[#c084fc]/20" />
          </div>

          {/* Google Login */}
          <button className="w-full border border-[#c084fc]/30 rounded-full py-2 flex items-center justify-center gap-2 text-sm text-gray-700 bg-white/60 hover:bg-[#faf5ff]/70 transition-all">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            Masuk dengan Google
          </button>

          {/* Register */}
          <p className="text-sm text-gray-600 text-center mt-6">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="text-[#8b5cf6] font-semibold hover:underline"
            >
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
