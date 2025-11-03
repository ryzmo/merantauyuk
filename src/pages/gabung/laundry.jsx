"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Header from "../../components/Nav";
import { Droplet, Upload, Send } from "lucide-react";

export default function GabungLaundry() {
  return (
    <>
      <Head>
        <title>Gabung Pemilik Laundry | MerantauYuk</title>
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white via-[#eef2ff]/80 to-[#e0e7ff]/60 text-gray-800 p-6 md:p-12">
        <Header />

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md border border-[#6366f1]/20 rounded-2xl shadow-sm p-8"
        >
          <div className="text-center mb-8">
            <Droplet size={48} className="mx-auto text-[#6366f1]" />
            <h1 className="text-3xl font-bold text-[#6366f1] mt-3">
              Daftarkan Laundry Anda 🧺
            </h1>
            <p className="text-gray-600 mt-2">
              Tambahkan layanan laundry Anda agar pelanggan sekitar bisa menemukan dan memesan langsung.
            </p>
          </div>

          <form className="grid gap-5">
            <div>
              <label className="font-semibold">Nama Laundry</label>
              <input
                type="text"
                placeholder="Laundry Express Malang"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6366f1] outline-none"
              />
            </div>

            <div>
              <label className="font-semibold">Alamat</label>
              <textarea
                placeholder="Jl. Veteran No. 15, Malang"
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6366f1] outline-none"
              />
            </div>

            <div>
              <label className="font-semibold">Layanan</label>
              <textarea
                placeholder="Cuci Kering, Setrika, Antar-Jemput, Express..."
                className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6366f1] outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold">Harga per Kg</label>
                <input
                  type="number"
                  placeholder="7000"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6366f1] outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">Jam Operasional</label>
                <input
                  type="text"
                  placeholder="08.00 - 21.00"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#6366f1] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-semibold flex items-center gap-2">
                <Upload size={18} /> Foto Toko / Logo
              </label>
              <input type="file" multiple className="mt-2" />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#6366f1] text-white py-3 rounded-xl font-semibold hover:bg-[#4f46e5] transition flex items-center justify-center gap-2"
            >
              <Send size={18} /> Kirim Data
            </button>
          </form>
        </motion.section>
      </main>
    </>
  );
}
