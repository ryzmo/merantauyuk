"use client";

import { motion } from "framer-motion";
import { MapPin, Bed, Wifi, Droplet } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function PropertyShowcase({ city = "Malang" }) {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState("Semua");
  const [loading, setLoading] = useState(true);

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

  const filtered = properties.filter((p) => {
    if (filter === "Semua") return true;
    return p.location === filter;
  });

  const uniqueLocations = ["Semua", ...new Set(properties.map((p) => p.location))];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#faf5ff]/80 via-white to-[#f3e8ff]/60 overflow-hidden">
      {/* 🌈 Gradient atas lembut */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-[2]" />

      {/* 🌸 Background Glow Animasi */}
      <motion.div
        className="absolute top-40 left-10 w-72 h-72 bg-[#c084fc]/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-[#f9a8d4]/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌸 Overlay pattern lembut */}
      <div className="absolute inset-0 bg-[url('/pattern-light.svg')] opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10 text-center">
        {/* 🏠 Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#8b5cf6] drop-shadow-[0_2px_8px_rgba(139,92,246,0.2)]"
        >
          Hunian di {city} 🏠
        </motion.h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Temukan tempat tinggal sesuai gaya hidupmu.
        </p>

        {/* 📊 Statistik mini */}
        {!loading && properties.length > 0 && (
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-600">
            <div>💰 Mulai dari <strong>Rp {Math.min(...properties.map(p => p.price)).toLocaleString("id-ID")}</strong>/bulan</div>
            <div>📍 Area populer: <strong>Lowokwaru, Dinoyo</strong></div>
          </div>
        )}

        {/* 🔍 Filter Bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {uniqueLocations.map((loc) => (
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              key={loc}
              onClick={() => setFilter(loc)}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                filter === loc
                  ? "bg-[#c084fc] text-white border-[#c084fc] shadow-md"
                  : "bg-white/60 text-gray-600 border-gray-200 hover:bg-[#f3e8ff]/60"
              }`}
            >
              {loc}
            </motion.button>
          ))}
        </div>

        {/* 🏘️ Grid Properti */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <p className="col-span-3 text-gray-500">Memuat data hunian...</p>
          ) : filtered.length === 0 ? (
            <p className="col-span-3 text-gray-500">Tidak ada hunian ditemukan.</p>
          ) : (
            filtered.map((item, index) => (
              <Link href={`/property/${item.slug}`} key={index} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                  className="relative bg-white/70 backdrop-blur-lg border border-[#8b5cf6]/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_25px_rgba(139,92,246,0.25)] transition-all cursor-pointer"
                >
                  <div className="group relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover"
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
            ))
          )}
        </div>
      </div>

      {/* 🌫️ Gradient bawah lembut */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f3e8ff]/90 via-[#faf5ff]/80 to-transparent pointer-events-none" />
    </section>
  );
}
