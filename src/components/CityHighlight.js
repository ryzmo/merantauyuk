"use client";

import { motion } from "framer-motion";
import { MapPin, Compass, Sparkles, Luggage, Plane } from "lucide-react";

export default function CityHighlight({
  city = "Kota Tujuanmu",
  description = "Semua kebutuhan perantau dalam satu tempat.",
  image = "/siluet2.jpg",
}) {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* 🌆 Background lembut tapi lebih tajam */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
          filter: "brightness(1.05) contrast(1.05) saturate(1.1)",
          zIndex: 0,
        }}
      />

            {/* 🌈 Overlay pastel vivid */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(240,232,255,0.85), rgba(253,224,255,0.75), rgba(227,242,255,0.7))",
          mixBlendMode: "overlay",
        }}
      />

      {/* ✨ Gradasi bawah lembut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 z-[2]"
        style={{
          background:
            "linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.7), transparent)",
        }}
      />


      {/* ☁️ Layer Awan Halus */}
      <motion.div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: "url('/clouds.svg')",
          backgroundSize: "cover",
          opacity: 0.15,
        }}
        animate={{ x: ["0%", "10%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Glow Aura di Tengah */}
      <motion.div
        className="absolute z-[3] w-72 h-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(192,132,252,0.45) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌸 Elemen Partikel & Ikon Bergerak */}
      <div className="absolute inset-0 overflow-hidden z-[4]">
        <motion.div
          className="absolute text-[#c084fc]/60"
          initial={{ x: -100, y: 50, opacity: 0 }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={32} />
        </motion.div>

        <motion.div
          className="absolute right-20 top-1/3 text-[#a78bfa]/60"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Compass size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-16 text-[#8b5cf6]/40"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <MapPin size={36} />
        </motion.div>

        {/* 🧳 Ikon Perantau (koper & pesawat) */}
        <motion.div
          className="absolute bottom-24 right-20 text-[#c084fc]/50"
          animate={{ x: [0, 40, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Luggage size={32} />
        </motion.div>

        <motion.div
          className="absolute top-1/4 left-12 text-[#93c5fd]/50"
          animate={{ x: [0, 60, 0], y: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <Plane size={36} />
        </motion.div>

        {/* 🌟 Particle shimmer */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute z-[4] w-2 h-2 rounded-full bg-[#c084fc]/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🌼 Konten utama */}
      <motion.div
        className="relative z-[6] text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold drop-shadow-sm"
          style={{
            color: "#8b5cf6",
            textShadow: "0 2px 10px rgba(139,92,246,0.25)",
          }}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Jelajahi {city}
        </motion.h1>

        <p
          className="mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-gray-600"
        >
          {description}
        </p>

        {/* 🧭 Quick Facts */}
        <div className="mt-6 flex justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin size={16} /> Dekat Kampus
          </div>
          <div className="flex items-center gap-1">
            <Compass size={16} /> Akses Mudah
          </div>
          <div className="flex items-center gap-1">
            <Sparkles size={16} /> Banyak Kos Murah
          </div>
        </div>

        {/* 🌷 CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 px-8 py-3 font-semibold rounded-xl transition-all shadow-lg"
          style={{
            background:
              "linear-gradient(to right, #f9a8d4, #c084fc, #93c5fd)",
            color: "#ffffff",
            boxShadow: "0 4px 25px rgba(192, 132, 252, 0.4)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(to right, #fbcfe8, #a78bfa, #93c5fd)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(to right, #f9a8d4, #c084fc, #93c5fd)")
          }
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          Mulai Eksplorasi
        </motion.button>
      </motion.div>

      {/* 🕊️ Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center z-[6]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#8b5cf6] mb-4 font-extrabold text-4xl"
        >
          ↓
        </motion.div>
        <span className="text-xs text-gray-500 mt-1">
          Scroll untuk menjelajah
        </span>
      </motion.div>
    </div>
  );
}
