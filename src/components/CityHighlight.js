"use client";

import { motion } from "framer-motion";

export default function CityHighlight({
  city = "Kota Tujuanmu",
  description = "Semua kebutuhan perantau dalam satu tempat.",
  image = "/siluet2.jpg",
}) {
  return (
    <div className="relative h-screen -mt-[80px] flex items-center justify-center overflow-hidden">

      {/* 🌆 Background samar */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          filter: "brightness(0.6) contrast(0.9)",
          zIndex: 0,
        }}
      />

      {/* 🟣 Lapisan warna ungu gelap di atas gambar */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900/95 via-brand-950/95 to-brand-950/100 mix-blend-overlay z-[1]" />

      {/* ✨ Gradasi horizontal lembut */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/85 to-brand-950/90 opacity-90 z-[2]" />

      {/* 🌌 Lapisan bawah untuk depth */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-brand-950 via-brand-900/90 to-transparent opacity-95 z-[2]" />

      {/* 🪄 Konten utama */}
      <motion.div
        className="relative z-[5] text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-brand-300 drop-shadow-lg">
          Jelajahi {city}
        </h1>
        <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 px-8 py-3 bg-brand-500 hover:bg-brand-400 text-white font-semibold rounded-xl transition-all shadow-lg"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          Mulai Eksplorasi
        </motion.button>
      </motion.div>
    </div>
  );
}
