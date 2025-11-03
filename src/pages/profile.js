"use client";
import Header from "../components/Nav";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Star,
  Heart,
  Settings,
  LogOut,
  Clock,
  Shield,
  Building2,
  ShoppingBag,
  Droplet,
} from "lucide-react";
import Head from "next/head";
import FooterElegant from "@/components/Footer";

export default function ProfilePage() {
  const user = {
    name: "Farhan Rahman",
    email: "farhan@example.com",
    phone: "0812-3456-7890",
    location: "Malang, Jawa Timur",
    joined: "Januari 2024",
    avatar: "/user/avatar.jpg",
    bio: "Mahasiswa perantau dari Surabaya, suka eksplor tempat makan baru dan membantu pengguna lain dengan review jujur di MerantauYuk.",
  };

  const favorites = [
    {
      type: "Kos",
      name: "Kos Exclusive Putri Jasmine",
      price: "Rp 2.200.000/bulan",
      image: "/malang/kos6.jpg",
    },
    {
      type: "Laundry",
      name: "Laundry Express UB",
      price: "Rp 7.000/kg",
      image: "/laundry/laundry1.jpg",
    },
    {
      type: "Marketplace",
      name: "Sepeda Lipat Bekas",
      price: "Rp 750.000",
      image: "/market/bike.jpg",
    },
  ];

  const activities = [
    {
      type: "Laundry",
      name: "Laundry Express UB",
      action: "Selesai dicuci",
      time: "2 hari lalu",
    },
    {
      type: "Kos",
      name: "Kos Green Hills",
      action: "Melihat detail kos",
      time: "4 hari lalu",
    },
    {
      type: "Marketplace",
      name: "Kamera Canon 600D",
      action: "Menandai sebagai favorit",
      time: "1 minggu lalu",
    },
  ];

  const reviews = [
    {
      place: "Laundry Express UB",
      rating: 5,
      comment: "Cepat dan wangi! Recommended banget buat mahasiswa UB.",
      date: "10 Oktober 2025",
    },
    {
      place: "Kos Putra Mahasiswa UB",
      rating: 4,
      comment: "Tempat nyaman, cuma parkir agak sempit.",
      date: "2 Oktober 2025",
    },
  ];

  return (
    <>
      <Head>
        <title>Profil Pengguna | MerantauYuk</title>
        <meta
          name="description"
          content="Halaman profil pengguna MerantauYuk — lihat data diri, aktivitas, favorit, dan pengaturan akunmu di sini."
        />
      </Head>

      <main>
        <div className="min-h-screen bg-gradient-to-b from-white via-[#faf5ff]/80 to-[#f3e8ff]/60 text-gray-800 p-6 md:p-12">
        <Header />

        {/* 🧭 Header Section */}
        <div className="max-w-6xl mt-15 mx-auto mb-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.img
            src={user.avatar}
            alt="User Avatar"
            className="w-36 h-36 rounded-full object-cover border-4 border-[#8b5cf6]/60 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div>
            <h1 className="text-3xl font-bold text-[#8b5cf6]">{user.name}</h1>
            <p className="text-gray-500 mt-1">{user.bio}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <p className="flex items-center gap-2">
                <Mail size={16} /> {user.email}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> {user.phone}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} /> {user.location}
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} /> Bergabung: {user.joined}
              </p>
            </div>
          </div>
        </div>

        {/* 🧾 Aktivitas Terbaru */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-12 bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl shadow-sm p-6"
        >
          <h2 className="text-xl font-semibold text-[#8b5cf6] mb-4 flex items-center gap-2">
            <Clock size={18} /> Aktivitas Terbaru
          </h2>
          <ul className="space-y-3">
            {activities.map((a, i) => (
              <li
                key={i}
                className="flex items-center justify-between text-sm border-b border-gray-100 pb-2"
              >
                <div className="flex items-center gap-2">
                  {a.type === "Laundry" && <Droplet size={16} />}
                  {a.type === "Kos" && <Building2 size={16} />}
                  {a.type === "Marketplace" && <ShoppingBag size={16} />}
                  <span>
                    <strong>{a.name}</strong> — {a.action}
                  </span>
                </div>
                <span className="text-gray-500">{a.time}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* 💜 Favorit */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto mb-12 bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl shadow-sm p-6"
        >
          <h2 className="text-xl font-semibold text-[#8b5cf6] mb-4 flex items-center gap-2">
            <Heart size={18} /> Favorit Tersimpan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden bg-white border border-[#8b5cf6]/20 shadow-sm cursor-pointer hover:shadow-md transition"
              >
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 text-left">
                  <p className="text-xs text-[#8b5cf6] font-semibold">{f.type}</p>
                  <h3 className="text-gray-800 font-semibold line-clamp-1">
                    {f.name}
                  </h3>
                  <p className="text-sm text-gray-600">{f.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ⭐ Ulasan */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-12 bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl shadow-sm p-6"
        >
          <h2 className="text-xl font-semibold text-[#8b5cf6] mb-4 flex items-center gap-2">
            <Star size={18} /> Ulasan Saya
          </h2>
          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white/60 rounded-xl p-4 border border-gray-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-800">{r.place}</h4>
                  <span className="text-sm text-gray-500">{r.date}</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="gold" stroke="none" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{r.comment}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ⚙️ Pengaturan Akun */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-16 bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl shadow-sm p-6"
        >
          <h2 className="text-xl font-semibold text-[#8b5cf6] mb-4 flex items-center gap-2">
            <Settings size={18} /> Pengaturan Akun
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <button className="flex items-center gap-2 border border-gray-200 rounded-xl p-3 hover:bg-[#f3e8ff]/40 transition">
              <Shield size={16} /> Privasi & Keamanan
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-xl p-3 hover:bg-[#f3e8ff]/40 transition">
              <User size={16} /> Edit Profil
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-xl p-3 hover:bg-[#f3e8ff]/40 transition">
              <Heart size={16} /> Daftar Favorit
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-xl p-3 hover:bg-[#f3e8ff]/40 transition">
              <LogOut size={16} /> Keluar Akun
            </button>
          </div>
        </motion.section>

        {/* 🦶 Footer */}
        
      </div>
      <FooterElegant />
      </main>
      
    </>
  );
}
