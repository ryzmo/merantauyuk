"use client";

import { motion } from "framer-motion";
import { Heart, Home, Users, Target, Sparkles } from "lucide-react";

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf5ff]/80 via-[#f3e8ff]/80 to-white text-gray-800">
      {/* 🌈 Hero Section */}
      <section className="relative text-center py-20 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-80 h-80 bg-[#c084fc]/25 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
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
            <Home className="text-[#8b5cf6] mb-3" size={36} />
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#8b5cf6] drop-shadow-sm">
              Tentang <span className="text-[#f9a8d4]">MerantauYuk!</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base">
              Platform yang lahir dari semangat anak rantau untuk membantu sesama
              menemukan rumah, komunitas, dan kenyamanan di kota baru mereka 💜
            </p>
          </motion.div>
        </div>
      </section>

      {/* 💡 Visi & Misi */}
      <section className="relative py-16 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-[#8b5cf6] mb-8"
        >
          Visi & Misi Kami
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl shadow-md p-6 text-left"
          >
            <Target className="text-[#c084fc] mb-3" size={28} />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Visi</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Menjadi platform utama bagi para perantau untuk menemukan hunian,
              lingkungan, dan komunitas terbaik di seluruh Indonesia.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl shadow-md p-6 text-left"
          >
            <Sparkles className="text-[#8b5cf6] mb-3" size={28} />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Misi</h3>
            <ul className="list-disc ml-5 text-gray-600 text-sm leading-relaxed space-y-1">
              <li>Memberikan informasi hunian dan kos yang transparan.</li>
              <li>Membantu perantau beradaptasi dengan lingkungan baru.</li>
              <li>Membangun komunitas positif dan saling mendukung.</li>
              <li>Menyediakan layanan dan panduan kehidupan perantau modern.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 👥 Tim Kami */}
      <section className="relative py-16 bg-gradient-to-b from-white/80 via-[#faf5ff]/80 to-[#f3e8ff]/60 border-t border-[#c084fc]/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#8b5cf6] mb-10">
            Tim di Balik MerantauYuk 💜
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Farhan",
                role: "Founder & Developer",
                img: "/team/farhan.jpg",
              },
              {
                name: "Nadia",
                role: "Creative Designer",
                img: "/team/nadia.jpg",
              },
              {
                name: "Rafi",
                role: "Marketing & Partnerships",
                img: "/team/rafi.jpg",
              },
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#c084fc]/30">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-500">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ❤️ Nilai Kami */}
      <section className="relative py-16 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#8b5cf6] mb-10">
          Nilai yang Kami Junjung ✨
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart size={28} className="text-[#f9a8d4]" />,
              title: "Empati",
              desc: "Kami memahami tantangan para perantau dan berupaya menghadirkan solusi dengan hati.",
            },
            {
              icon: <Users size={28} className="text-[#c084fc]" />,
              title: "Komunitas",
              desc: "Merantau bukan berarti sendiri — kami membangun jejaring saling dukung.",
            },
            {
              icon: <Home size={28} className="text-[#93c5fd]" />,
              title: "Kenyamanan",
              desc: "Membantu perantau menemukan tempat yang bisa disebut rumah.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl shadow-md p-6"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌸 Footer kecil */}
      <footer className="text-center text-xs text-gray-500 py-6 border-t border-[#c084fc]/20">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#8b5cf6] font-semibold">MerantauYuk!</span> •
        Membangun jembatan untuk para perantau 💜
      </footer>
    </div>
  );
}
