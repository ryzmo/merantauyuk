"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Search,
  ShoppingBag,
  HandHeart,
  Package,
  DollarSign,
  ArrowLeftRight,
  SlidersHorizontal,
  MapPin,
} from "lucide-react";
import Head from "next/head";
import Navbar from "../components/Nav";

export default function MarketplacePage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  // 📦 contoh data dummy marketplace
  const items = [
    {
      id: 1,
      title: "Sepeda Lipat Bekas",
      price: 750000,
      location: "Lowokwaru",
      category: "WTS",
      image: "/market/bike.jpg",
      desc: "Sepeda lipat kondisi 90%, jarang dipakai. Siap pakai!",
      date: "2025-10-15",
    },
    {
      id: 2,
      title: "Cari Laptop Bekas",
      price: 5000000,
      location: "Dinoyo",
      category: "WTB",
      image: "/market/laptop.jpg",
      desc: "Saya mencari laptop second dengan RAM minimal 8GB.",
      date: "2025-10-10",
    },
    {
      id: 3,
      title: "Kasur Busa - Diberikan Gratis",
      price: 0,
      location: "Blimbing",
      category: "WTG",
      image: "/market/mattress.jpg",
      desc: "Kasur bekas tapi masih layak. Ambil sendiri ke rumah.",
      date: "2025-10-18",
    },
    {
      id: 4,
      title: "Kamera Canon 600D",
      price: 2500000,
      location: "Tlogomas",
      category: "WTS",
      image: "/market/camera.jpg",
      desc: "Kamera DSLR second, kondisi masih bagus, include lensa kit.",
      date: "2025-10-14",
    },
    {
      id: 5,
      title: "Ingin Tukar Helm dengan Jaket",
      price: 0,
      location: "Sukun",
      category: "EXCHANGE",
      image: "/market/helmet.jpg",
      desc: "WTG/WTT: tukar helm half-face dengan jaket kulit.",
      date: "2025-10-12",
    },
  ];

  const categories = ["All", "WTS", "WTB", "WTG", "EXCHANGE"];

  // 🔍 Filter, search, dan sort logic
  const filtered = useMemo(() => {
    let result = [...items];

    if (filter !== "All") result = result.filter((i) => i.category === filter);
    if (search.trim() !== "")
      result = result.filter((i) =>
        i.title.toLowerCase().includes(search.toLowerCase())
      );

    if (sortOrder === "newest") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOrder === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filter, search, sortOrder]);

  return (
    <>
      <Head>
        <title>Marketplace Barang Bekas | MerantauYuk</title>
        <meta
          name="description"
          content="Jual beli dan tukar barang bekas di MerantauYuk Marketplace. Tempat WTS, WTB, dan WTG bagi anak kos!"
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
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#8b5cf6]">
              Marketplace Barang Bekas 🛍️
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Jual, beli, tukar, atau beri barang yang masih layak — semuanya di satu tempat.
            </p>

            {/* 🔍 Search & Filter Bar */}
            <div className="mt-10 bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl p-5 shadow-sm flex flex-wrap justify-center gap-4 items-center">
              {/* Search bar */}
              <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 w-full sm:w-72">
                <Search size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Cari barang..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Filter kategori */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-200 rounded-full px-4 py-2 text-sm bg-white text-gray-700 focus:ring-2 focus:ring-[#8b5cf6]"
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>

              {/* Sort */}
              <div className="flex items-center gap-2 text-sm">
                <SlidersHorizontal size={16} className="text-[#8b5cf6]" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border border-gray-200 rounded-full px-3 py-2 bg-white text-gray-700 focus:ring-2 focus:ring-[#8b5cf6]"
                >
                  <option value="newest">Terbaru</option>
                  <option value="priceLow">Harga: Rendah → Tinggi</option>
                  <option value="priceHigh">Harga: Tinggi → Rendah</option>
                </select>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setFilter("All");
                  setSearch("");
                  setSortOrder("newest");
                }}
                className="text-sm text-gray-600 hover:text-[#8b5cf6] underline"
              >
                Reset Filter
              </button>
            </div>

            {/* 📊 Info jumlah */}
            <p className="mt-4 text-sm text-gray-500">
              Menampilkan <strong>{filtered.length}</strong> dari {items.length} barang
            </p>

            {/* 🛍️ Grid barang */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                  className="relative bg-white/70 backdrop-blur-lg border border-[#8b5cf6]/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_25px_rgba(139,92,246,0.25)] transition-all"
                >
                  <div className="relative group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover"
                    />
                    <div
                      className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                        item.category === "WTS"
                          ? "bg-green-500 text-white"
                          : item.category === "WTB"
                          ? "bg-blue-500 text-white"
                          : item.category === "WTG"
                          ? "bg-pink-500 text-white"
                          : "bg-purple-500 text-white"
                      }`}
                    >
                      {item.category}
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                      <button className="px-4 py-2 bg-white/80 text-[#8b5cf6] font-medium rounded-lg shadow-md hover:bg-white transition-all">
                        Lihat Detail
                      </button>
                    </div>
                  </div>

                  <div className="p-5 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between mt-3 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin size={14} /> {item.location}
                      </div>
                      <span className="font-semibold text-[#8b5cf6]">
                        {item.price === 0
                          ? "Gratis"
                          : `Rp ${item.price.toLocaleString("id-ID")}`}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-12 text-sm text-gray-500">
              {filtered.length > 0
                ? `Ditemukan ${filtered.length} barang di Marketplace 💜`
                : "Tidak ada barang yang cocok dengan filter."}
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
