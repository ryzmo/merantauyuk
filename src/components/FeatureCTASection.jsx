"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Sparkles,
  ShoppingBag,
  WashingMachine,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

export default function FeatureCTASection() {
  const features = [
    {
      icon: <MapPin className="text-[#a78bfa]" size={28} />,
      title: "Survei Lokasi Kos",
      desc: "Layanan survei jarak jauh oleh mahasiswa lokal terpercaya.",
      href: "/survei",
    },
    {
      icon: <ClipboardList className="text-[#c084fc]" size={28} />,
      title: "Listing Kos Detail",
      desc: "Informasi lengkap tentang harga, fasilitas, dan lokasi strategis.",
      href: "/listing",
    },
    {
      icon: <WashingMachine className="text-[#f9a8d4]" size={28} />,
      title: "Laundry Terdekat",
      desc: "Temukan laundry murah & cepat di sekitar area kos kamu.",
      href: "/laundry",
    },
    {
      icon: <ShieldCheck className="text-[#93c5fd]" size={28} />,
      title: "Sistem Escrow (Rekber)",
      desc: "Transaksi aman & terpercaya dengan perlindungan penuh.",
      href: "/rekber",
    },
    {
      icon: <Sparkles className="text-[#a78bfa]" size={28} />,
      title: "Jasa Cleaning Kos",
      desc: "Pembersihan harian atau bulanan oleh tenaga profesional.",
      href: "/cleaning",
    },
    {
      icon: <ShoppingBag className="text-[#f9a8d4]" size={28} />,
      title: "Marketplace Barang Bekas",
      desc: "Jual beli barang preloved sesama perantau dengan mudah.",
      href: "/marketplace",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#f3e8ff]/90 via-[#faf5ff] to-[#ede9fe]/80 overflow-hidden text-center">
      {/* 🌸 Background Glow */}
      <motion.div
        className="absolute top-20 left-16 w-72 h-72 bg-[#c084fc]/25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-16 w-96 h-96 bg-[#f9a8d4]/25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* 🧭 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#8b5cf6]"
        >
          Fitur & Solusi untuk Perantau 💡
        </motion.h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Semua layanan penting tersedia langsung di situs ini — tinggal pilih kebutuhanmu dan mulai eksplorasi.
        </p>

        {/* 🌟 Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 w-24 h-[3px] bg-gradient-to-r from-[#c084fc] to-[#93c5fd] rounded-full"
        />

        {/* 🧩 Feature Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Link key={i} href={f.href} className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, y: -5 }}
                className="relative bg-white/75 backdrop-blur-lg border border-[#c084fc]/20 rounded-2xl shadow-sm hover:shadow-[0_8px_25px_rgba(139,92,246,0.2)] p-6 text-left transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-[#8b5cf6]" size={20} />
                    <h3 className="font-semibold text-gray-800">{f.title}</h3>
                  </div>
                  <ArrowRight
                    className="text-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={18}
                  />
                </div>

                <div className="flex items-center gap-3 mb-3">{f.icon}</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {f.desc}
                </p>

                {/* Hover highlight */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-[#c084fc] to-[#93c5fd] rounded-2xl transition-all" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* 💬 CTA Penutup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#c084fc]/20 to-[#93c5fd]/20 border border-[#c084fc]/30 rounded-2xl p-10 backdrop-blur-md shadow-sm max-w-3xl mx-auto"
        >
          <h3 className="font-bold text-[#8b5cf6] text-xl mb-3">
            Semua fitur ini bisa langsung kamu gunakan di website 💜
          </h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Pilih fitur yang kamu butuhkan — mulai dari survei, laundry, hingga marketplace barang bekas. Semua tersedia di satu tempat.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 bg-gradient-to-r from-[#c084fc] to-[#93c5fd] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Jelajahi Semua Fitur 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
