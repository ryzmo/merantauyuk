"use client";

import { motion } from "framer-motion";
import { MapPin, Coffee, School, Bus, Home, Landmark } from "lucide-react";

export default function CityMapSection() {
  const highlights = [
    {
      icon: <School className="text-[#8b5cf6]" size={22} />,
      label: "Kampus UB",
      desc: "Pusat aktivitas mahasiswa dan budaya belajar.",
    },
    {
      icon: <Coffee className="text-[#f9a8d4]" size={22} />,
      label: "Cafe & Nongkrong",
      desc: "Tempat healing, nugas, dan ketemu teman baru.",
    },
    {
      icon: <Home className="text-[#a78bfa]" size={22} />,
      label: "Kos & Apartemen",
      desc: "Hunian nyaman dengan berbagai fasilitas.",
    },
    {
      icon: <Bus className="text-[#93c5fd]" size={22} />,
      label: "Transportasi Umum",
      desc: "Akses mudah ke kampus dan pusat kota.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#faf5ff]/80 via-white to-[#f3e8ff]/60 overflow-hidden text-center">
      {/* 🌈 Gradient atas halus */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-[#faf5ff]/80 to-transparent pointer-events-none z-[2]" />

      {/* 🌸 Background glow animasi */}
      <motion.div
        className="absolute top-40 left-10 w-72 h-72 bg-[#c084fc]/25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-16 w-96 h-96 bg-[#f9a8d4]/25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🏙️ Konten utama */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#8b5cf6] drop-shadow-[0_2px_8px_rgba(139,92,246,0.15)]"
        >
          Eksplor Kota Malang 🏙️
        </motion.h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Kenali suasana dan area favorit sebelum kamu pindah — biar kamu nggak cuma cari kos, tapi juga *rumah kedua* di Malang 💜
        </p>

        {/* 🧭 Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 w-24 h-[3px] bg-gradient-to-r from-[#c084fc] to-[#93c5fd] rounded-full"
        />

        {/* 🗺️ Map embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-12 rounded-3xl overflow-hidden shadow-xl border border-[#c084fc]/20"
        >
          <iframe
            title="Peta Malang"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.4265953385413!2d112.6149645758042!3d-7.951688379014015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882b9be21fd77%3A0x2de83e4a4e3b6d77!2sUniversitas%20Brawijaya!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="460"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute top-6 left-6 bg-white/70 backdrop-blur-md border border-[#c084fc]/20 rounded-xl p-4 shadow-lg text-left max-w-[280px]"
          >
            <h3 className="font-semibold text-[#8b5cf6] text-lg mb-2">
              Area Favorit Perantau 🌟
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>📍 Lowokwaru – dekat kampus & kuliner</li>
              <li>☕ Soekarno Hatta – pusat cafe & kos modern</li>
              <li>🏘️ Tlogomas – suasana tenang & sejuk</li>
              <li>🚍 Dinoyo – akses mudah ke UB & UIN</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* 🗣️ Mini CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#c084fc]/20 to-[#93c5fd]/20 border border-[#c084fc]/20 rounded-2xl p-8 backdrop-blur-md shadow-sm max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <Landmark className="text-[#8b5cf6] mb-3" size={30} />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              Siap menjelajahi Malang?
            </h3>
            <p className="text-gray-600 text-sm max-w-md mb-4">
              Mulai petualanganmu dengan mengenal setiap sudut kota — dari
              kampus hingga tempat nongkrong favorit perantau 🌆
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2 bg-gradient-to-r from-[#c084fc] to-[#93c5fd] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Lihat Peta Lengkap
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* 🌫️ Gradient bawah nyambung ke PropertyShowcase */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f3e8ff]/90 via-[#faf5ff]/80 to-transparent pointer-events-none" />
    </section>
  );
}
