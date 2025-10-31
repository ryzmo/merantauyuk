"use client";

import { motion } from "framer-motion";
import { HelpCircle, Mail, MessageSquare, Phone, Send, Home } from "lucide-react";
import Header from "../components/Nav";

export default function BantuanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf5ff]/80 via-[#f3e8ff]/80 to-white text-gray-800 flex flex-col">
      {/* 🌸 Header Section */}
      <Header />
      <section className="relative text-center py-25 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-[#c084fc]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#f9a8d4]/25 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <Home className="text-[#8b5cf6] mb-3" size={34} />
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#8b5cf6] drop-shadow-sm">
              Pusat Bantuan 💬
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base">
              Ada pertanyaan seputar MerantauYuk? Kami siap membantu kamu — dari
              tips mencari kos hingga panduan fitur aplikasi 💜
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🧭 FAQ Section */}
      <section className="relative z-10 py-10 md:py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#8b5cf6] text-center mb-10">
          Pertanyaan yang Sering Diajukan (FAQ)
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              q: "Bagaimana cara mendaftar akun di MerantauYuk?",
              a: "Klik tombol 'Daftar Sekarang' di halaman login, isi data diri kamu, dan verifikasi email. Setelah itu kamu bisa langsung mulai eksplorasi!",
            },
            {
              q: "Apakah layanan MerantauYuk berbayar?",
              a: "Tidak, MerantauYuk dapat digunakan secara gratis untuk mencari kos, komunitas, dan panduan kota.",
            },
            {
              q: "Bagaimana cara menghubungi pemilik kos?",
              a: "Setiap halaman kos memiliki tombol 'Hubungi Pemilik' yang bisa kamu klik untuk mengirim pesan atau panggilan langsung.",
            },
            {
              q: "Saya menemukan bug atau error di website.",
              a: "Kamu bisa laporkan melalui formulir di bawah ini atau kirim email langsung ke support@merantauyuk.id.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold text-[#8b5cf6] mb-2">{item.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📬 Contact Form */}
      <section className="relative bg-white/80 backdrop-blur-sm border-t border-[#c084fc]/20 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-[#8b5cf6] mb-3">
            Masih butuh bantuan?
          </h2>
          <p className="text-center text-gray-600 mb-10 text-sm md:text-base">
            Kirim pesan langsung ke tim kami. Kami akan segera merespons 💌
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full border border-[#c084fc]/30 rounded-xl px-4 py-3 text-sm bg-white/70 focus:ring-2 focus:ring-[#c084fc]/30 focus:border-[#8b5cf6] outline-none transition-all"
              required
            />
            <input
              type="email"
              placeholder="Alamat Email"
              className="w-full border border-[#c084fc]/30 rounded-xl px-4 py-3 text-sm bg-white/70 focus:ring-2 focus:ring-[#c084fc]/30 focus:border-[#8b5cf6] outline-none transition-all"
              required
            />
            <textarea
              rows="4"
              placeholder="Tulis pesanmu di sini..."
              className="md:col-span-2 border border-[#c084fc]/30 rounded-xl px-4 py-3 text-sm bg-white/70 focus:ring-2 focus:ring-[#c084fc]/30 focus:border-[#8b5cf6] outline-none transition-all"
              required
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white transition-all shadow-md hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(to right, #f9a8d4, #c084fc, #93c5fd)",
                boxShadow: "0 4px 20px rgba(192,132,252,0.4)",
              }}
            >
              <Send size={18} />
              Kirim Pesan
            </button>
          </form>

          {/* Kontak Langsung */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#8b5cf6]" /> support@merantauyuk.id
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#8b5cf6]" /> +62 812 3456 7890
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-[#8b5cf6]" /> Chat via WhatsApp
            </div>
          </div>
        </div>
      </section>

      {/* 🌸 Footer kecil */}
      <footer className="text-center text-xs text-gray-500 py-6">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#8b5cf6] font-semibold">MerantauYuk!</span> •
        Dibuat dengan cinta 💜 untuk para perantau
      </footer>
    </div>
  );
}
