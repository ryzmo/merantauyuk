"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header from "../components/Nav";
import FooterElegant from "@/components/Footer";
import {
  Users,
  TrendingUp,
  BadgeCheck,
  Rocket,
  Building2,
  Droplet,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

export default function GabungPage() {
  const [isRegistered, setIsRegistered] = useState(false);

  const fitur = [
    {
      icon: <TrendingUp size={28} className="text-[#8b5cf6]" />,
      title: "Jangkauan Lebih Luas",
      desc: "Tampilkan kos, laundry, atau produkmu ke ribuan pengguna MerantauYuk di seluruh Indonesia.",
    },
    {
      icon: <BadgeCheck size={28} className="text-[#6366f1]" />,
      title: "Verifikasi & Kepercayaan",
      desc: "Bisnismu akan diverifikasi, sehingga pengguna merasa lebih aman dan percaya saat memesan.",
    },
    {
      icon: <Rocket size={28} className="text-[#d946ef]" />,
      title: "Promosi Otomatis",
      desc: "AI MerantauYuk akan otomatis merekomendasikan layananmu ke pengguna yang relevan.",
    },
    {
      icon: <Users size={28} className="text-[#7c3aed]" />,
      title: "Kelola Pesanan Mudah",
      desc: "Pantau semua pesanan dan pelanggan langsung lewat Dashboard Mitra.",
    },
  ];

  return (
    <>
      <Head>
        <title>Gabung Mitra | MerantauYuk</title>
        <meta
          name="description"
          content="Bergabung sebagai mitra MerantauYuk dan perluas jangkauan bisnis kos, laundry, atau marketplace-mu!"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white via-[#faf5ff]/80 to-[#f3e8ff]/60 text-gray-800">
        <Header />

        {/* 💜 Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center py-25 px-6"
        >
          <h1 className="text-4xl font-bold text-[#8b5cf6]">
            Gabung Jadi Mitra MerantauYuk 💼
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Buka peluang bisnismu lebih luas! Dapatkan pelanggan baru dari para perantau, mahasiswa, dan pekerja di seluruh Indonesia.
          </p>

          {/* CTA Button */}
          {!isRegistered ? (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsRegistered(true)}
              className="mt-8 px-6 py-3 bg-[#8b5cf6] text-white rounded-xl font-semibold shadow hover:bg-[#6d28d9]"
            >
              Daftar Sekarang
            </motion.button>
          ) : (
            <Link
              href="/dashboard"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold shadow hover:bg-green-600"
            >
              Lihat Dashboard Saya <ChevronRight size={18} />
            </Link>
          )}
        </motion.section>

        {/* 💎 Manfaat Bergabung */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-16"
        >
          {fitur.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow border border-[#8b5cf6]/10 text-center"
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="font-semibold text-[#7c3aed]">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* 🏘️ Jenis Mitra */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto text-center pb-20 px-6"
        >
          <h2 className="text-2xl font-semibold text-[#8b5cf6] mb-6">
            Pilih Jenis Mitra Sesuai Bisnismu 🏠
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Building2 size={28} className="text-[#8b5cf6]" />,
                title: "Pemilik Kos",
                desc: "Buat kosmu mudah ditemukan dan dipesan online.",
              },
              {
                icon: <Droplet size={28} className="text-[#6366f1]" />,
                title: "Pemilik Laundry",
                desc: "Dapatkan pelanggan dari kalangan mahasiswa & pekerja.",
              },
              {
                icon: <ShoppingBag size={28} className="text-[#d946ef]" />,
                title: "Marketplace",
                desc: "Jual produk baru atau bekas dengan target pasar lokal.",
              },
            ].map((opt, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl bg-white p-6 shadow-md border border-[#8b5cf6]/10"
              >
                <div className="flex flex-col items-center gap-3">
                  {opt.icon}
                  <h3 className="text-lg font-semibold">{opt.title}</h3>
                  <p className="text-sm text-gray-600">{opt.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <FooterElegant />
      </main>
    </>
  );
}
