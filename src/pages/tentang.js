"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Home,
  Users,
  Target,
  Sparkles,
  TrendingUp,
  MapPin,
  Handshake,
} from "lucide-react";
import Header from "../components/Nav";
import FooterElegant from "@/components/Footer";

export default function TentangPage() {
  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-b from-[#faf5ff] via-[#f3e8ff] to-[#e0f2fe] overflow-hidden flex flex-col">
      {/* 🏠 Navbar */}
      <Header />

      {/* 🌈 Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 md:py-36 overflow-hidden">
        {/* background glow */}
        <motion.div
          className="absolute top-[-5rem] left-[10%] w-[22rem] h-[22rem] bg-[#c084fc]/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-5rem] right-[15%] w-[26rem] h-[26rem] bg-[#93c5fd]/25 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 flex flex-col items-center"
        >
          <img
            src="/logo.png"
            alt="Logo MerantauYuk"
            className="w-24 h-24 mb-5 drop-shadow-md"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#6d28d9] leading-tight">
            Tentang <span className="text-[#f9a8d4]">MerantauYuk!</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg leading-relaxed">
            Kami hadir sebagai teman perjalanan para perantau di seluruh Indonesia —
            membantu menemukan hunian, komunitas, dan kehidupan yang nyaman di kota baru 💜
          </p>
        </motion.div>
      </section>

      {/* 🧭 Cerita Kami */}
      <section className="relative py-20 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#8b5cf6] mb-10"
        >
          Cerita di Balik MerantauYuk
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          MerantauYuk lahir dari pengalaman pribadi para perantau muda yang merasakan
          betapa sulitnya mencari tempat tinggal, adaptasi, dan menemukan teman baru di
          kota asing. Dari sana kami membangun platform ini — bukan hanya sebagai direktori
          kos dan layanan, tapi juga ruang untuk terhubung, belajar, dan tumbuh bersama
          komunitas perantau di seluruh Indonesia.
        </motion.p>
      </section>

      {/* 🎯 Visi & Misi */}
      <section className="relative py-20 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#8b5cf6] mb-12"
        >
          Visi & Misi Kami
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl shadow-lg hover:shadow-xl p-8 text-left"
          >
            <Target className="text-[#c084fc] mb-3" size={32} />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Visi</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Menjadi platform utama yang mempermudah kehidupan para perantau dengan
              solusi hunian, komunitas, dan gaya hidup digital yang saling terhubung.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl shadow-lg hover:shadow-xl p-8 text-left"
          >
            <Sparkles className="text-[#8b5cf6] mb-3" size={32} />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">Misi</h3>
            <ul className="list-disc ml-6 text-gray-600 text-base leading-relaxed space-y-2">
              <li>Menjadi jembatan antara perantau dan pemilik hunian terpercaya.</li>
              <li>Menyediakan informasi akurat dan transparan seputar kos dan layanan lokal.</li>
              <li>Membangun komunitas ramah yang saling membantu dan berbagi pengalaman.</li>
              <li>Mendukung kemandirian dan kesejahteraan para perantau di kota baru.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 📊 Capaian Kami */}
      <section className="relative py-20 bg-gradient-to-b from-white/70 via-[#faf5ff]/70 to-[#f3e8ff]/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#8b5cf6] mb-12"
          >
            Capaian & Dampak Kami
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Home />, number: "10.000+", label: "Hunian Terdaftar" },
              { icon: <Users />, number: "25.000+", label: "Perantau Bergabung" },
              { icon: <MapPin />, number: "50+", label: "Kota di Indonesia" },
              { icon: <TrendingUp />, number: "4.8/5", label: "Rating Pengguna" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl shadow-md p-6"
              >
                <div className="flex justify-center mb-3 text-[#8b5cf6]">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{stat.number}</h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💜 Nilai Kami */}
      <section className="relative py-20 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#8b5cf6] mb-12"
        >
          Nilai yang Kami Junjung ✨
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Heart size={30} className="text-[#f9a8d4]" />,
              title: "Empati",
              desc: "Kami memahami tantangan para perantau dan menghadirkan solusi dengan hati.",
            },
            {
              icon: <Users size={30} className="text-[#c084fc]" />,
              title: "Komunitas",
              desc: "Merantau bukan berarti sendiri — kami membangun jejaring saling dukung.",
            },
            {
              icon: <Home size={30} className="text-[#93c5fd]" />,
              title: "Kenyamanan",
              desc: "Membantu perantau menemukan tempat yang bisa disebut rumah.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl shadow-md hover:shadow-lg p-8"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🤝 Ajak Bergabung */}
      <section className="relative py-20 text-center bg-gradient-to-r from-[#f9a8d4]/30 to-[#93c5fd]/30 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6">
          <Handshake className="mx-auto text-[#8b5cf6] mb-4" size={40} />
          <h2 className="text-3xl font-bold text-[#6d28d9] mb-4">
            Mari Bangun Bersama 💪
          </h2>
          <p className="text-gray-700 mb-8">
            Kami percaya, perjalanan merantau bisa lebih mudah dan bermakna jika kita
            saling membantu. Dukung misi MerantauYuk dengan menjadi bagian dari komunitas,
            kontributor, atau mitra layanan.
          </p>
          <a
            href="/gabung"
            className="inline-block px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#8b5cf6] to-[#93c5fd] shadow-md hover:shadow-lg transition"
          >
            Gabung Sekarang
          </a>
        </div>
      </section>

      {/* 🌸 Footer */}
      <FooterElegant />
    </div>
  );
}
