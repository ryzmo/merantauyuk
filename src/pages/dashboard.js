"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Droplet,
  ShoppingBag,
  PlusCircle,
  Edit,
  Trash2,
  BarChart3,
  CheckCircle,
  Clock,
} from "lucide-react";
import Header from "../components/Nav";
import FooterElegant from "@/components/Footer";

export default function DashboardMitra() {
  const [activeTab, setActiveTab] = useState("kos");

  const data = {
    kos: [
      {
        id: 1,
        nama: "Kos Putri Mawar",
        lokasi: "Jl. Melati No.12, Bandung",
        harga: "Rp 850.000/bulan",
        status: "Aktif",
      },
      {
        id: 2,
        nama: "Kos Putra Sakura",
        lokasi: "Jl. Dipatiukur No.7, Bandung",
        harga: "Rp 1.000.000/bulan",
        status: "Nonaktif",
      },
    ],
    laundry: [
      {
        id: 1,
        nama: "Laundry Express Cepat Bersih",
        lokasi: "Jl. Sukajadi No.9, Bandung",
        harga: "Mulai Rp 7.000/kg",
        status: "Aktif",
      },
    ],
    marketplace: [
      {
        id: 1,
        nama: "Paket Piring Makan",
        lokasi: "Online",
        harga: "Rp 60.000/set",
        status: "Aktif",
      },
    ],
  };

  const totalPesanan = 42;
  const pesananSelesai = 38;
  const pesananProses = 4;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f9ff] via-[#f3e8ff] to-[#e0f2fe] text-gray-800">
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-25">
        {/* Judul */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#7c3aed]">🏢 Dashboard Mitra</h1>
          <p className="text-gray-500 mt-1">
            Kelola layananmu — pantau pesanan, ubah data, dan tambah layanan baru.
          </p>
        </div>

        {/* Statistik Ringkas */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow p-5 border"
          >
            <BarChart3 className="text-[#7c3aed]" />
            <h3 className="font-semibold mt-2">Total Pesanan</h3>
            <p className="text-2xl font-bold">{totalPesanan}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow p-5 border"
          >
            <CheckCircle className="text-green-500" />
            <h3 className="font-semibold mt-2">Pesanan Selesai</h3>
            <p className="text-2xl font-bold">{pesananSelesai}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow p-5 border"
          >
            <Clock className="text-yellow-500" />
            <h3 className="font-semibold mt-2">Dalam Proses</h3>
            <p className="text-2xl font-bold">{pesananProses}</p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("kos")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              activeTab === "kos"
                ? "bg-[#8b5cf6] text-white"
                : "bg-white text-gray-600 border"
            }`}
          >
            <Home size={18} /> Kos
          </button>
          <button
            onClick={() => setActiveTab("laundry")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              activeTab === "laundry"
                ? "bg-[#6366f1] text-white"
                : "bg-white text-gray-600 border"
            }`}
          >
            <Droplet size={18} /> Laundry
          </button>
          <button
            onClick={() => setActiveTab("marketplace")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              activeTab === "marketplace"
                ? "bg-[#3b82f6] text-white"
                : "bg-white text-gray-600 border"
            }`}
          >
            <ShoppingBag size={18} /> Marketplace
          </button>
        </div>

        {/* Tombol Tambah */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mb-4 flex items-center gap-2 bg-[#7c3aed] text-white px-4 py-2 rounded-xl shadow hover:bg-[#6d28d9]"
        >
          <PlusCircle size={20} /> Tambah Layanan
        </motion.button>

        {/* Daftar Layanan */}
        <div className="grid gap-4">
          {data[activeTab].map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white border shadow-sm rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.nama}</h3>
                <p className="text-sm text-gray-500">{item.lokasi}</p>
                <p className="text-sm font-medium mt-1">{item.harga}</p>
                <span
                  className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                    item.status === "Aktif"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <div className="flex gap-2 mt-3 md:mt-0">
                <button className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200">
                  <Edit size={18} className="text-yellow-600" />
                </button>
                <button className="p-2 rounded-lg bg-red-100 hover:bg-red-200">
                  <Trash2 size={18} className="text-red-600" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <FooterElegant />
    </div>
  );
}
