"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Nav";
import {
  Building2,
  Droplet,
  ShoppingBag,
  UserPlus,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import FooterElegant from "@/components/Footer";

export default function GabungPage() {
  const options = [
    {
      type: "Kos",
      icon: <Building2 size={28} className="text-[#8b5cf6]" />,
      title: "Pemilik Kos",
      desc: "Punya kos? Daftarkan di MerantauYuk agar mudah ditemukan oleh para perantau baru di kotamu.",
      link: "/gabung/kos",
      color: "from-[#ede9fe] to-[#ddd6fe]",
    },
    {
      type: "Laundry",
      icon: <Droplet size={28} className="text-[#6366f1]" />,
      title: "Pemilik Laundry",
      desc: "Tingkatkan pelangganmu! Tambahkan layanan laundry-mu agar mahasiswa dan pekerja bisa order langsung.",
      link: "/gabung/laundry",
      color: "from-[#e0f2fe] to-[#dbeafe]",
    },
    {
      type: "Marketplace",
      icon: <ShoppingBag size={28} className="text-[#d946ef]" />,
      title: "Penjual Marketplace",
      desc: "Ingin jual barang bekas atau baru? Upload barangmu agar bisa dijangkau pengguna lain dengan mudah.",
      link: "/gabung/marketplace",
      color: "from-[#fae8ff] to-[#f5d0fe]",
    },
  ];

  return (
    <>
      <Head>
        <title>Gabung | MerantauYuk</title>
        <meta
          name="description"
          content="Bergabung sebagai pemilik kos, laundry, atau penjual marketplace di MerantauYuk."
        />
      </Head>

      <main>
        <div className="min-h-screen bg-gradient-to-b from-white via-[#faf5ff]/80 to-[#f3e8ff]/60 text-gray-800 p-6 md:p-12">
        <Header />

        {/* 🧭 Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center py-10 mb-12"
        >
          <UserPlus size={48} className="mx-auto text-[#8b5cf6] mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-[#8b5cf6]">
            Gabung Bersama MerantauYuk 💜
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            MerantauYuk menghubungkan mahasiswa perantau dengan berbagai layanan
            lokal — dari kos, laundry, hingga marketplace.  
            Yuk, perluas jangkauan bisnismu dan bantu ribuan pengguna menemukan layananmu!
          </p>
        </motion.section>

        {/* 💼 Pilihan Bergabung */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {options.map((opt, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`rounded-2xl bg-gradient-to-br ${opt.color} p-6 shadow-md border border-[#8b5cf6]/10`}
            >
              <div className="flex flex-col items-center text-center gap-3">
                {opt.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {opt.title}
                </h3>
                <p className="text-sm text-gray-600">{opt.desc}</p>
                <Link
                  href={opt.link}
                  className="mt-4 inline-flex items-center gap-1 text-[#8b5cf6] font-semibold hover:underline"
                >
                  Daftar Sekarang <ChevronRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* 📝 Langkah Bergabung */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl shadow-sm p-6 text-center"
        >
          <h2 className="text-xl font-semibold text-[#8b5cf6] mb-4">
            Cara Bergabung Mudah 💫
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div className="flex flex-col items-center">
              <CheckCircle size={28} className="text-[#8b5cf6] mb-2" />
              <p><strong>1. Pilih kategori</strong></p>
              <p className="text-gray-500">Kos, Laundry, atau Marketplace</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle size={28} className="text-[#8b5cf6] mb-2" />
              <p><strong>2. Isi data & upload</strong></p>
              <p className="text-gray-500">Masukkan detail tempat atau produkmu</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle size={28} className="text-[#8b5cf6] mb-2" />
              <p><strong>3. Tunggu verifikasi</strong></p>
              <p className="text-gray-500">Tim kami akan meninjau dan mempublikasikan</p>
            </div>
          </div>
        </motion.section>

        {/* 🦶 Footer */}
        
      </div>
      <FooterElegant />
      </main>

      
    </>
  );
}
