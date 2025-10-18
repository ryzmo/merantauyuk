"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Wallet, Bus, GraduationCap, Coffee } from "lucide-react";

const insights = [
  {
    icon: <Wallet className="w-8 h-8 text-[#8b5cf6]" />,
    title: "Biaya Hidup Terjangkau",
    desc: "Rata-rata Rp 3,2 juta/bulan — cocok untuk mahasiswa dan pekerja muda.",
  },
  {
    icon: <Bus className="w-8 h-8 text-[#8b5cf6]" />,
    title: "Transportasi Mudah",
    desc: "Akses cepat ke kampus dan pusat kota lewat angkot dan ojek online.",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#8b5cf6]" />,
    title: "Kota Pendidikan",
    desc: "Kampus ternama seperti UB dan UM menjadikan Malang pusat pelajar.",
  },
  {
    icon: <Coffee className="w-8 h-8 text-[#8b5cf6]" />,
    title: "Gaya Hidup Santai",
    desc: "Kopi, gunung, dan suasana adem bikin hidup lebih seimbang.",
  },
];

// 🖼️ Foto-foto slider
const malangImages = [
  "/malang/2.png",
  "/malang/3.png",
  "/malang/6.png",
  "/malang/5.png",
  "/malang/8.png",
  "/malang/7.png",
  "/malang/4.png",
];

export default function CityInsightMalang() {
  const controls = useAnimation();

  // 🔁 Auto-slide looping horizontal
  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: ["0%", "-50%"],
          transition: {
            duration: 25, // makin kecil = makin cepat
            ease: "linear",
          },
        });
      }
    };
    animate();
  }, [controls]);

  return (
    <section
      className="relative py-20 text-gray-800 overflow-hidden"
      style={{
        backgroundImage: "url('/malang/1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🌈 Overlay utama agar teks terbaca */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#faf5ff]/85 to-[#f3e8ff]/80 backdrop-blur-[1px]" />

      {/* 🕊️ Gradient atas */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-[2]" />

      {/* 🏙️ Konten utama */}
      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        {/* Header kota */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#8b5cf6] mb-3 drop-shadow-[0_2px_8px_rgba(139,92,246,0.2)]">
            Jelajahi Malang 🌸
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Kota dengan udara sejuk, biaya hidup ramah di kantong, dan
            atmosfer pelajar yang hangat. Cocok banget buat kamu yang ingin
            merantau dengan tenang.
          </p>

          {/* 📊 Info biaya hidup */}
          <div className="mt-6 inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-[#8b5cf6]/30 shadow-sm">
            <span className="text-gray-600 text-sm">
              📊 Biaya hidup rata-rata di Malang:
            </span>{" "}
            <span className="font-semibold text-[#8b5cf6]">
              Rp 3,2 juta/bulan
            </span>
          </div>
        </motion.div>

        {/* 🌇 Insight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {insights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl p-6 shadow-md hover:shadow-[0_4px_25px_rgba(139,92,246,0.25)] transition-all"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🖼️ Auto-slide Foto Malang */}
        <div className="relative w-full overflow-hidden">
          {/* Fade kiri-kanan */}
          <div className="absolute left-0 top-0 bottom-0 w-16  via-white/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16  via-white/60 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={controls}
            className="flex gap-6"
            style={{
              width: "200%",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {[...malangImages, ...malangImages].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="min-w-[75%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[25%] rounded-2xl overflow-hidden shadow-md border border-[#8b5cf6]/20"
              >
                <img
                  src={src}
                  alt={`Suasana Malang ${i + 1}`}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Suasana Malang dalam satu pandangan 🌇
        </p>
      </div>

      {/* 🌫️ Gradient bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" />
    </section>
  );
}
