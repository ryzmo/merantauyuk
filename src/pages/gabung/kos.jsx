"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../../components/Nav";
import { Building2, Upload, Send } from "lucide-react";

export default function GabungKos() {
  return (
    <>
      <Head>
        <title>Gabung Pemilik Kos | MerantauYuk</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white via-[#faf5ff]/80 to-[#f3e8ff]/60 text-gray-800 p-6 md:p-12">
        <Header />

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <Building2 size={48} className="mx-auto text-[#8b5cf6]" />
            <h1 className="text-3xl font-bold text-[#8b5cf6] mt-3">
              Daftarkan Kos Anda 🏠
            </h1>
            <p className="text-gray-600 mt-2">
              Isi detail kos Anda agar mudah ditemukan mahasiswa atau pekerja perantau.
            </p>
          </div>

          <form className="grid gap-5">
            <div>
              <label className="font-semibold">Nama Kos</label>
              <input
                type="text"
                placeholder="Contoh: Kos Putri Mawar Indah"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#8b5cf6] outline-none"
              />
            </div>

            <div>
              <label className="font-semibold">Alamat Lengkap</label>
              <textarea
                placeholder="Jl. Soekarno Hatta No. 22, Malang"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#8b5cf6] outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold">Harga per Bulan</label>
                <input
                  type="number"
                  placeholder="Rp 1.000.000"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#8b5cf6] outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">Tipe Kos</label>
                <select className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#8b5cf6] outline-none">
                  <option>Putra</option>
                  <option>Putri</option>
                  <option>Campur</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-semibold">Fasilitas</label>
              <textarea
                placeholder="Kamar mandi dalam, WiFi, parkir motor, dapur bersama..."
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#8b5cf6] outline-none"
              />
            </div>

            <div>
              <label className="font-semibold flex items-center gap-2">
                <Upload size={18} /> Foto Kos
              </label>
              <input type="file" multiple className="mt-2" />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#8b5cf6] text-white py-3 rounded-xl font-semibold hover:bg-[#7c3aed] transition flex items-center justify-center gap-2"
            >
              <Send size={18} /> Kirim Data
            </button>
          </form>
        </motion.section>
      </main>
    </>
  );
}
