"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Bed, Wifi, Droplet, Search, SlidersHorizontal } from "lucide-react";
import Head from "next/head";
import Navbar from "../components/Nav";
import Link from "next/link";
import FooterElegant from "@/components/Footer";

export default function PropertyPage() {
  const [filter, setFilter] = useState("Semua");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const city = "Malang";

  // 🔄 Fetch data dari API
  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await fetch("/api/properties");
        const data = await res.json();
        setProperties(data);
      } catch (error) {
        console.error("Gagal memuat data properti:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProperties();
  }, []);

  const uniqueLocations = useMemo(() => {
    const locs = ["Semua", ...new Set(properties.map((p) => p.location))];
    return locs;
  }, [properties]);

  // 🔍 Filter + search + sort logic
  const filtered = useMemo(() => {
    let result = [...properties];

    if (filter !== "Semua") {
      result = result.filter((p) => p.location === filter);
    }

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filter, search, sortOrder, properties]);

  return (
    <>
      <Head>
        <title>Hunian di {city} | MerantauYuk</title>
        <meta
          name="description"
          content={`Temukan kos dan apartemen terbaik di ${city}. Harga terjangkau, lokasi strategis, dan fasilitas lengkap.`}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white via-[#faf5ff]/80 to-[#f3e8ff]/60 text-gray-800 overflow-hidden">
        <Navbar />

        {/* 🏠 Section utama */}
        <section className="relative pt-32 pb-24 px-6 max-w-6xl mx-auto text-center">
          {/* 🌈 Background animasi */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-[#c084fc]/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-[#f9a8d4]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-extrabold text-[#8b5cf6] drop-shadow-[0_2px_8px_rgba(139,92,246,0.2)]"
            >
              Hunian di {city} 🏠
            </motion.h1>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Temukan tempat tinggal sesuai gaya hidupmu — mulai dari kos hingga apartemen eksklusif.
            </p>

            {/* 🔍 Search & Filter Bar */}
            <div className="mt-10 bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl p-5 shadow-sm flex flex-wrap justify-center gap-4 items-center">
              {/* Search bar */}
              <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 w-full sm:w-72">
                <Search size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Cari nama kos / apartemen..."
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

              {/* Urutkan harga */}
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

              {/* Reset */}
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
              {loading
                ? "Memuat data hunian..."
                : `Menampilkan ${filtered.length} dari ${properties.length} hunian`}
            </p>

            {/* 🏘️ Daftar properti */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                <p className="col-span-3 text-gray-500">Loading...</p>
              ) : filtered.length === 0 ? (
                <p className="col-span-3 text-gray-500">Tidak ada hasil ditemukan.</p>
              ) : (
                filtered.map((item, index) => {
                  const slug = item.name.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <Link
                      key={index}
                      href={`/property/${slug}`}
                      className="group relative bg-white/70 backdrop-blur-lg border border-[#8b5cf6]/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_25px_rgba(139,92,246,0.25)] transition-all block"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                        viewport={{ once: true }}
                        className="h-full"
                      >
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-left">
                            <h3 className="text-white text-lg font-semibold drop-shadow-sm">
                              {item.name}
                            </h3>
                            <p className="text-[#f9a8d4] text-sm font-medium">
                              Rp {item.price.toLocaleString("id-ID")}/bulan
                            </p>
                          </div>
                        </div>

                        <div className="p-5 text-left">
                          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                            <MapPin size={16} /> {item.location}
                          </div>

                          <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                            {item.facilities.includes("WiFi") && (
                              <div className="flex items-center gap-1">
                                <Wifi size={14} /> WiFi
                              </div>
                            )}
                            {item.facilities.includes("Kamar Mandi Dalam") && (
                              <div className="flex items-center gap-1">
                                <Droplet size={14} /> KM Dalam
                              </div>
                            )}
                            {item.facilities.includes("AC") && (
                              <div className="flex items-center gap-1">
                                <Bed size={14} /> AC
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })
              )}
            </div>

            {!loading && (
              <p className="mt-12 text-sm text-gray-500">
                Ditemukan {filtered.length} hunian di {city} 💜
              </p>
            )}
          </div>
        </section>

        <FooterElegant />
      </main>
    </>
  );
}
