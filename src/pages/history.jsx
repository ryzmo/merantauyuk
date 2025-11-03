"use client";

import { motion } from "framer-motion";
import {
  Home,
  Droplet,
  ClipboardList,
  ShoppingBag,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Header from "../components/Nav";
import FooterElegant from "@/components/Footer";

export default function HistoryPage() {
  const orders = [
    {
      id: 1,
      type: "Kos",
      name: "Kos Exclusive Putri Jasmine",
      location: "Lowokwaru, Malang",
      date: "10 Oktober 2025",
      status: "Selesai",
      price: "Rp 1.200.000/bulan",
      icon: <Home className="text-[#8b5cf6]" size={22} />,
    },
    {
      id: 2,
      type: "Survei",
      name: "Surveyor: Dewi Anggraini",
      location: "Tlogomas, Malang",
      date: "18 Oktober 2025",
      status: "Selesai",
      price: "Gratis",
      icon: <ClipboardList className="text-[#f9a8d4]" size={22} />,
    },
    {
      id: 3,
      type: "Laundry",
      name: "Laundry Bersih Kilat",
      location: "Jalan MT Haryono",
      date: "28 Oktober 2025",
      status: "Diproses",
      price: "Rp 45.000",
      icon: <Droplet className="text-[#60a5fa]" size={22} />,
    },
    {
      id: 4,
      type: "Marketplace",
      name: "Kasur Lipat Bekas Mahasiswa",
      location: "Sawojajar, Malang",
      date: "2 November 2025",
      status: "Dibatalkan",
      price: "Rp 150.000",
      icon: <ShoppingBag className="text-[#c084fc]" size={22} />,
    },
  ];

  const statusStyle = {
    Selesai: "bg-green-100 text-green-700 border-green-300",
    Diproses: "bg-yellow-100 text-yellow-700 border-yellow-300",
    Dibatalkan: "bg-red-100 text-red-700 border-red-300",
  };

  const statusIcon = {
    Selesai: <CheckCircle size={16} className="text-green-600" />,
    Diproses: <Clock size={16} className="text-yellow-500" />,
    Dibatalkan: <XCircle size={16} className="text-red-500" />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#faf5ff] via-[#f3e8ff] to-[#e0f2fe] text-gray-800">
      <Header />

      {/* 🌈 Header Section */}
      <section className="text-center py-25 relative overflow-hidden">
        <motion.div
          className="absolute top-[-5rem] left-[10%] w-[18rem] h-[18rem] bg-[#c084fc]/30 blur-3xl rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-[-5rem] right-[15%] w-[22rem] h-[22rem] bg-[#93c5fd]/30 blur-3xl rounded-full"
          animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#8b5cf6] relative z-10"
        >
          Riwayat Pemesanan 💼
        </motion.h1>
        <p className="text-gray-600 relative z-10 mt-2">
          Lihat semua pesanan kamu dari kos, laundry, survei, dan marketplace.
        </p>
      </section>

      {/* 📋 Daftar Pesanan */}
      <section className="relative z-10 max-w-4xl mx-auto w-full px-6 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6"
        >
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md border border-[#c084fc]/20 rounded-2xl shadow-md hover:shadow-lg transition-all p-6"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#faf5ff] border border-[#c084fc]/20">
                  {order.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {order.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {order.location} • {order.date}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full border ${statusStyle[order.status]}`}
                  >
                    {statusIcon[order.status]} {order.status}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                <p className="font-medium">{order.type}</p>
                <p className="font-semibold text-[#8b5cf6]">{order.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 🩵 Empty State */}
      {orders.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-500 mt-20"
        >
          <ClipboardList size={48} className="mx-auto text-[#8b5cf6] mb-4" />
          <p>Belum ada pemesanan yang tercatat.</p>
        </motion.div>
      )}

      {/* 🌸 Footer */}
      <FooterElegant />
    </div>
  );
}
