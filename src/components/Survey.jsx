"use client";

import { motion } from "framer-motion";
import { Camera, FileText, MapPin, MessageSquare, Sparkles, Star, Users } from "lucide-react";

export default function SurveyService() {
  const services = [
    {
      icon: <Camera size={32} className="text-[#8b5cf6]" />,
      title: "Foto & Video Hunian",
      desc: "Tim kami akan mengirimkan dokumentasi detail dari kos atau apartemen pilihanmu.",
    },
    {
      icon: <FileText size={32} className="text-[#8b5cf6]" />,
      title: "Laporan Survei Lengkap",
      desc: "Dapatkan ringkasan kondisi kamar, fasilitas, dan suasana lingkungan secara objektif.",
    },
    {
      icon: <MapPin size={32} className="text-[#8b5cf6]" />,
      title: "Cek Lokasi & Akses",
      desc: "Kami bantu pastikan lokasi strategis, aman, dan dekat fasilitas penting seperti kampus atau halte.",
    },
    {
      icon: <MessageSquare size={32} className="text-[#8b5cf6]" />,
      title: "Konsultasi Langsung",
      desc: "Tanya langsung ke tim survei lokal untuk rekomendasi terbaik sesuai kebutuhanmu.",
    },
  ];

  const testimonials = [
    {
      name: "Dewi, Mahasiswa UB",
      text: "Awalnya ragu, tapi hasil surveinya detail banget! Aku bisa lihat kamar & lingkungan kos seolah datang langsung.",
      image: "/testi1.jpg",
    },
    {
      name: "Rizal, Karyawan Kantor",
      text: "Sangat membantu buatku yang kerja di luar kota. Laporannya jelas dan video-nya jujur, bukan yang dilebih-lebihkan.",
      image: "/testi2.jpg",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#faf5ff]/90 via-white to-[#f3e8ff]/70 overflow-hidden text-center">
      {/* 🌈 Gradient atas (nyambung ke section sebelumnya) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#f3e8ff] via-[#faf5ff]/90 to-transparent pointer-events-none z-[2]" />

      {/* ✨ Glow Animasi */}
      <motion.div
        className="absolute top-24 left-10 w-72 h-72 bg-[#c084fc]/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-16 w-96 h-96 bg-[#f9a8d4]/25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌟 Partikel Halus */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#a78bfa]/60"
          style={{
            top: `${15 + i * 10}%`,
            left: `${10 + i * 12}%`,
          }}
          initial={{ opacity: 0.4, y: 0 }}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={18 + i * 2} />
        </motion.div>
      ))}

      {/* ✨ Konten utama */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* 🧭 Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#8b5cf6]"
        >
          Jasa Survei Hunian 🕵️‍♀️
        </motion.h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Gak sempat datang langsung? Kami bantu survei kos pilihanmu — cepat, jujur, dan terpercaya.
        </p>

        {/* Highlight text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-[#8b5cf6] font-medium tracking-wide"
        >
          Aman, transparan, dan dibantu oleh tim lokal berpengalaman 💼
        </motion.p>

        {/* 🌸 Services */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl shadow-sm hover:shadow-[0_8px_25px_rgba(139,92,246,0.25)] p-6 text-left transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 💬 Testimoni Section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-[#8b5cf6] mb-8 flex items-center justify-center gap-2">
            <Star className="text-[#f9a8d4]" /> Apa kata mereka?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/80 border border-[#8b5cf6]/20 rounded-2xl p-6 shadow-sm hover:shadow-md text-left backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testi.image}
                    alt={testi.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#c084fc]/40"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testi.name}</h4>
                    <p className="text-sm text-[#8b5cf6]">Customer Survei</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">“{testi.text}”</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 👥 CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex justify-center items-center gap-3 mb-4 text-gray-700">
            <Users size={20} className="text-[#8b5cf6]" />
            <span>Telah membantu lebih dari <strong>500+</strong> perantau menemukan hunian ideal 💜</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-gradient-to-r from-[#c084fc] to-[#93c5fd] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Pesan Survei Sekarang
          </motion.button>
        </motion.div>
      </div>

      {/* 🌫️ Gradient bawah lembut */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#faf5ff] via-white/80 to-transparent pointer-events-none" />
    </section>
  );
}
