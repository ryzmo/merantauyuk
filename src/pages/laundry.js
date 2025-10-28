"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Shirt, DollarSign, Search, SlidersHorizontal } from "lucide-react";
import Head from "next/head";
import Navbar from "../components/Nav";
import Link from "next/link";

export default function LaundryPage() {
  const [filter, setFilter] = useState("Semua");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const laundries = [
    {
      name: "Laundry Express UB",
      price: 7000,
      location: "Lowokwaru",
      image: "/laundry/laundry1.jpg",
      services: ["Cuci + Setrika", "Antar Jemput", "Express 6 Jam"],
    },
    {
      name: "Quick Wash Dinoyo",
      price: 6000,
      location: "Dinoyo",
      image: "/laundry/laundry2.jpg",
      services: ["Cuci Kering", "Setrika", "Cuci Sepatu"],
    },
    {
      name: "Cahaya Laundry Blimbing",
      price: 8000,
      location: "Blimbing",
      image: "/laundry/laundry3.jpg",
      services: ["Cuci Basah", "Antar Jemput", "Express"],
    },
    {
      name: "Eco Clean Laundry",
      price: 5500,
      location: "Sukun",
      image: "/laundry/laundry4.jpg",
      services: ["Cuci Kering", "Setrika", "Cuci Karpet"],
    },
    {
      name: "Smart Laundry Tlogomas",
      price: 6500,
      location: "Tlogomas",
      image: "/laundry/laundry5.jpg",
      services: ["Cuci + Setrika", "Express 1 Hari"],
    },
    {
      name: "Perfect Clean Soehat",
      price: 9000,
      location: "Soekarno Hatta",
      image: "/laundry/laundry6.jpg",
      services: ["Laundry Premium", "Antar Jemput", "Cuci Sepatu"],
    },
  ];

  const city = "Malang";
  const uniqueLocations = ["Semua", ...new Set(laundries.map((l) => l.location))];

  // 🔍 Filter, search, dan sort
  const filtered = useMemo(() => {
    let result = [...laundries];

    if (filter !== "Semua") {
      result = result.filter((l) => l.location === filter);
    }

    if (search.trim() !== "") {
      result = result.filter((l) =>
        l.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filter, search, sortOrder]);

  return (
    <>
      <Head>
        <title>Laundry di {city} | MerantauYuk</title>
        <meta
          name="description"
          content={`Temukan layanan laundry terbaik di ${city}. Cepat, bersih, dan harga terjangkau.`}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white via-[#faf5ff]/80 to-[#f3e8ff]/60 text-gray-800 overflow-hidden">
        <Navbar />

        <section className="relative pt-32 pb-24 px-6 max-w-6xl mx-auto text-center">
          {/* 🌈 Background animasi */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#8b5cf6]/25 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-[#f9a8d4]/25 rounded-full blur-3xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-extrabold text-[#8b5cf6]"
            >
              Laundry di {city} 🧺
            </motion.h1>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Temukan layanan laundry cepat, bersih, dan terpercaya di sekitar tempat tinggalmu.
            </p>

            {/* 🔍 Search & Filter Bar */}
            <div className="mt-10 bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl p-5 shadow-sm flex flex-wrap justify-center gap-4 items-center">
              {/* Search bar */}
              <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 w-full sm:w-72">
                <Search size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Cari nama laundry..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Filter lokasi */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-200 rounded-full px-4 py-2 text-sm bg-white text-gray-700 focus:ring-2 focus:ring-[#8b5cf6] transition"
              >
                {uniqueLocations.map((loc) => (
                  <option key={loc}>{loc}</option>
                ))}
              </select>

              {/* Sort harga */}
              <div className="flex items-center gap-2 text-sm">
                <SlidersHorizontal size={16} className="text-[#8b5cf6]" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border border-gray-200 rounded-full px-3 py-2 bg-white text-gray-700 focus:ring-2 focus:ring-[#8b5cf6]"
                >
                  <option value="default">Urutkan</option>
                  <option value="asc">Harga: Rendah → Tinggi</option>
                  <option value="desc">Harga: Tinggi → Rendah</option>
                </select>
              </div>

              {/* Reset button */}
              <button
                onClick={() => {
                  setFilter("Semua");
                  setSearch("");
                  setSortOrder("default");
                }}
                className="text-sm text-gray-600 hover:text-[#8b5cf6] underline"
              >
                Reset Filter
              </button>
            </div>

            {/* 📊 Info jumlah */}
            <p className="mt-4 text-sm text-gray-500">
              Menampilkan <strong>{filtered.length}</strong> dari {laundries.length} laundry
            </p>

            {/* 🧺 Grid daftar laundry */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                  className="relative bg-white/70 backdrop-blur-lg border border-[#8b5cf6]/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_25px_rgba(139,92,246,0.25)] transition-all"
                >
                  <div className="group relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover"
                    />

                    <Link href={`/laundry/${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
  <button className="px-4 py-2 bg-white/80 text-[#8b5cf6] font-medium rounded-lg shadow-md hover:bg-white transition-all">
    Lihat Detail
  </button>
</Link>

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-left">
                      <h3 className="text-white text-lg font-semibold drop-shadow-sm">
                        {item.name}
                      </h3>
                      <p className="text-[#f9a8d4] text-sm font-medium">
                        Rp {item.price.toLocaleString("id-ID")} / kg
                      </p>
                    </div>
                  </div>

                  <div className="p-5 text-left">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <MapPin size={16} /> {item.location}
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                      {item.services.map((svc, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 bg-[#f3e8ff]/60 px-2 py-1 rounded-full"
                        >
                          <Shirt size={12} /> {svc}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-12 text-sm text-gray-500">
              Ditemukan {filtered.length} layanan laundry di {city} 💜
            </p>
          </div>
        </section>

        <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 bg-white/70 backdrop-blur-md">
          © {new Date().getFullYear()} MerantauYuk. All rights reserved.
        </footer>
      </main>
    </>
  );
}
