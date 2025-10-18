"use client";

import { motion } from "framer-motion";

export default function CityHighlight({
  city = "Kota Tujuanmu",
  description = "Semua kebutuhan perantau dalam satu tempat.",
  image = "/siluet2.jpg",
}) {
  return (
    <div className="relative h-screen  flex items-center justify-center overflow-hidden">
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
      <div
        className="absolute inset-0 mix-blend-overlay z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(26,10,45,0.95), rgba(12,7,23,0.95), rgba(12,7,23,1))", // brand-900 → brand-950
        }}
      />

      {/* ✨ Gradasi horizontal lembut */}
      <div
        className="absolute inset-0 opacity-90 z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(12,7,23,0.9), rgba(26,10,45,0.85), rgba(12,7,23,0.9))",
        }}
      />

      {/* 🌌 Lapisan bawah untuk depth */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56 opacity-95 z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(to top, #0c0717, rgba(26,10,45,0.9), transparent)",
        }}
      />

      {/* 🪄 Konten utama */}
      <motion.div
        className="relative z-[5] text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold drop-shadow-lg"
          style={{ color: "#d8b4fe" }} // Ungu terang seperti brand-300
        >
          Jelajahi {city}
        </h1>

        <p className="mt-4 text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 px-8 py-3 text-white font-semibold rounded-xl transition-all shadow-lg"
          style={{
            backgroundColor: "#a21caf", // brand-500
            boxShadow: "0 0 25px rgba(162, 28, 175, 0.3)",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d946ef")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#a21caf")}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          Mulai Eksplorasi
        </motion.button>
      </motion.div>
    </div>
  );
}
