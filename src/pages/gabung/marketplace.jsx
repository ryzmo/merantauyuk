"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../../components/Nav";
import { ShoppingBag, Upload, Send } from "lucide-react";

export default function GabungMarketplace() {
  return (
    <>
      <Head>
        <title>Gabung Penjual Marketplace | MerantauYuk</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white via-[#fdf4ff]/80 to-[#fae8ff]/60 text-gray-800 p-6 md:p-12">
        <Header />

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md border border-[#d946ef]/20 rounded-2xl shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <ShoppingBag size={48} className="mx-auto text-[#d946ef]" />
            <h1 className="text-3xl font-bold text-[#d946ef] mt-3">
              Gabung Sebagai Penjual 🛍️
            </h1>
            <p className="text-gray-600 mt-2">
              Upload produkmu — barang baru atau bekas — agar bisa dijangkau oleh para pengguna MerantauYuk.
            </p>
          </div>

          <form className="grid gap-5">
            <div>
              <label className="font-semibold">Nama Toko / Penjual</label>
              <input
                type="text"
                placeholder="SecondChance Store"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#d946ef] outline-none"
              />
            </div>

            <div>
              <label className="font-semibold">Nama Produk</label>
              <input
                type="text"
                placeholder="Laptop Bekas ASUS i5"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#d946ef] outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold">Harga</label>
                <input
                  type="number"
                  placeholder="3500000"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#d946ef] outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">Kategori</label>
                <select className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#d946ef] outline-none">
                  <option>Pakaian</option>
                  <option>Elektronik</option>
                  <option>Perabot</option>
                  <option>Lainnya</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-semibold">Deskripsi Produk</label>
              <textarea
                placeholder="Ceritakan detail kondisi barang, kelengkapan, dan alasan dijual..."
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#d946ef] outline-none"
              />
            </div>

            <div>
              <label className="font-semibold flex items-center gap-2">
                <Upload size={18} /> Foto Produk
              </label>
              <input type="file" multiple className="mt-2" />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#d946ef] text-white py-3 rounded-xl font-semibold hover:bg-[#c026d3] transition flex items-center justify-center gap-2"
            >
              <Send size={18} /> Upload Sekarang
            </button>
          </form>
        </motion.section>
      </main>
    </>
  );
}
