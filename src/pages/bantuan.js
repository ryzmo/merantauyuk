"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Header from "../components/Nav";
import FooterElegant from "@/components/Footer";

export default function BantuanPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Bagaimana cara mendaftar akun di MerantauYuk?",
      a: "Kamu bisa klik tombol 'Daftar Sekarang' di halaman utama atau login, isi data diri kamu, lalu verifikasi email untuk mulai menggunakan semua fitur.",
    },
    {
      q: "Apakah layanan MerantauYuk berbayar?",
      a: "Tidak. Semua fitur utama seperti pencarian kos, marketplace, dan komunitas MerantauYuk bisa digunakan secara gratis.",
    },
    {
      q: "Bagaimana cara melaporkan masalah atau bug?",
      a: "Kamu dapat mengirim laporan langsung ke email kami di support@merantauyuk.id atau melalui formulir kontak di halaman ini.",
    },
    {
      q: "Apakah data pengguna saya aman?",
      a: "Ya. Kami menjaga privasi data kamu dengan enkripsi dan sistem keamanan yang sesuai standar industri.",
    },
    {
      q: "Bagaimana cara menghubungi pemilik kos?",
      a: "Di setiap halaman kos, terdapat tombol 'Hubungi Pemilik' yang dapat kamu klik untuk mengirim pesan atau menelepon langsung melalui WhatsApp.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col text-gray-800 bg-gradient-to-b from-[#faf5ff] via-[#f3e8ff] to-[#e0f2fe]">
      {/* 🌸 Header Navbar */}
      <Header />

      {/* 🌈 Header Section */}
      <section className="py-24 text-center relative overflow-hidden">
        {/* Glow background */}
        <motion.div
          className="absolute top-[-5rem] left-[10%] w-96 h-96 bg-[#c084fc]/30 blur-3xl rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-5rem] right-[10%] w-[28rem] h-[28rem] bg-[#93c5fd]/30 blur-3xl rounded-full"
          animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HelpCircle
              size={48}
              className="mx-auto text-[#8b5cf6] drop-shadow-sm mb-4"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#6d28d9]">
              Pusat Bantuan MerantauYuk 💬
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Temukan jawaban, panduan, dan tips terbaik untuk pengalaman
              merantau yang lebih mudah dan nyaman 💜
            </p>
          </motion.div>
        </div>
      </section>

      {/* 💡 FAQ Section */}
      <section className="relative z-10 py-16 max-w-4xl mx-auto px-6 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-bold text-[#8b5cf6] mb-10"
        >
          Pertanyaan yang Sering Diajukan
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 font-medium text-gray-800 hover:bg-[#faf5ff]/70 transition-all"
              >
                {item.q}
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    openIndex === index
                      ? "rotate-180 text-[#8b5cf6]"
                      : "text-gray-400"
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-6 pb-5 pt-1 text-gray-600 border-t border-[#c084fc]/20 text-sm leading-relaxed bg-gradient-to-r from-white/90 to-[#faf5ff]/70"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✨ Footer Section */}
      <FooterElegant />
    </div>
  );
}
