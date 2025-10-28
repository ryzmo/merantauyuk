"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Nav";
import FooterElegant from "../components/Footer";
import {
  MapPin,
  Search,
  Loader2,
  CheckCircle,
  Star,
  MessageCircle,
  ShieldCheck,
  Phone,
  Send,
} from "lucide-react";
import { useRouter } from "next/router";

// 🗺️ Dynamic imports (agar aman di SSR)
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });

export default function SurveiPage() {
  const router = useRouter();
  const [lokasi, setLokasi] = useState("");
  const [catatan, setCatatan] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [found, setFound] = useState(false);
  const [surveyor, setSurveyor] = useState(null);
  const [userPosition, setUserPosition] = useState([-7.9666, 112.6326]);
  const [surveyorPosition, setSurveyorPosition] = useState(null);
  const [status, setStatus] = useState("menemukan");

  useEffect(() => {
    if (router.query.lokasi) setLokasi(router.query.lokasi);
  }, [router.query.lokasi]);

  const surveyorsMock = [
    {
      id: 1,
      nama: "Budi Prasetyo",
      rating: 4.9,
      lokasi: "Lowokwaru",
      jarak: "0.8 km",
      pengalaman: "3 tahun",
      foto: "/user1.jpg",
      coords: [-7.956, 112.621],
      telp: "0812-9999-1234",
    },
    {
      id: 2,
      nama: "Dewi Anggraini",
      rating: 4.8,
      lokasi: "Tlogomas",
      jarak: "1.2 km",
      pengalaman: "2 tahun",
      foto: "/user2.jpg",
      coords: [-7.958, 112.628],
      telp: "0813-8888-5678",
    },
  ];

  // Ambil lokasi user (GPS)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserPosition([pos.coords.latitude, pos.coords.longitude]),
        () => console.warn("Lokasi user tidak diizinkan")
      );
    }
  }, []);

  const handleCariSurveyor = () => {
    if (!lokasi.trim()) return alert("Masukkan lokasi kos atau area survei terlebih dahulu!");

    setIsSearching(true);
    setFound(false);
    setSurveyor(null);
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 8 : 100));
    }, 250);

    setTimeout(() => {
      clearInterval(timer);
      const s = surveyorsMock[Math.floor(Math.random() * surveyorsMock.length)];
      setSurveyor(s);
      setSurveyorPosition(s.coords);
      setIsSearching(false);
      setFound(true);
    }, 3000);
  };

  // Animasi bergerak mendekat
  useEffect(() => {
    if (found && surveyorPosition && userPosition) {
      const interval = setInterval(() => {
        setSurveyorPosition((prev) => {
          if (!prev) return prev;
          const [lat, lng] = prev;
          const [ulat, ulng] = userPosition;
          const newLat = lat + (ulat - lat) * 0.05;
          const newLng = lng + (ulng - lng) * 0.05;
          const dist = Math.sqrt(Math.pow(newLat - ulat, 2) + Math.pow(newLng - ulng, 2));
          if (dist < 0.0005) {
            clearInterval(interval);
            return userPosition;
          }
          return [newLat, newLng];
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [found]);

  useEffect(() => {
    if (found) {
      setStatus("menuju");
      setTimeout(() => setStatus("tiba"), 10000);
      setTimeout(() => setStatus("selesai"), 20000);
    }
  }, [found]);

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen text-gray-800 bg-gradient-to-b from-[#faf5ff] via-[#f3e8ff] to-[#ede9fe] overflow-hidden flex flex-col items-center">
        {/* Background dekorasi */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-[#c084fc]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-[#93c5fd]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 w-full max-w-3xl mt-32 px-5 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-[#8b5cf6] drop-shadow-sm"
          >
            Survei Kos, Semudah GoRide 🚗
          </motion.h1>
          <p className="mt-3 text-gray-600 text-lg">
            Temukan surveyor lokal terbaik yang bisa langsung ke lokasi kos pilihanmu.
          </p>

          {/* Form utama */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 bg-white/90 border border-[#c084fc]/30 shadow-xl backdrop-blur-md rounded-2xl p-6 text-left"
          >
            <label className="block mb-4">
              <span className="font-medium text-gray-700 flex items-center gap-2">
                <MapPin className="text-[#8b5cf6]" size={18} /> Lokasi Hunian
              </span>
              <input
                type="text"
                value={lokasi}
                onChange={(e) => setLokasi(e.target.value)}
                placeholder="Contoh: Kos Putri Anggrek, Lowokwaru"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8b5cf6] focus:outline-none"
              />
            </label>

            <label className="block mb-6">
              <span className="font-medium text-gray-700 flex items-center gap-2">
                <ShieldCheck className="text-[#93c5fd]" size={18} /> Catatan Tambahan
              </span>
              <textarea
                rows="2"
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                placeholder="Contoh: Tolong ambil video di kamar & dapur."
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8b5cf6] focus:outline-none"
              />
            </label>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              disabled={isSearching}
              onClick={handleCariSurveyor}
              className={`w-full py-3 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all ${
                isSearching
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#8b5cf6] to-[#93c5fd] text-white shadow-md hover:shadow-lg"
              }`}
            >
              {isSearching ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Mencari surveyor...
                </>
              ) : (
                <>
                  <Search size={18} /> Cari Surveyor Sekarang
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Animasi mencari */}
          <AnimatePresence>
            {isSearching && (
              <motion.div
                key="search"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-10 flex flex-col items-center text-gray-600"
              >
                <Loader2 size={52} className="animate-spin text-[#8b5cf6]" />
                <p className="mt-3 font-medium text-lg">
                  Mencari surveyor terbaik di sekitar {lokasi}...
                </p>
                <div className="w-64 h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#93c5fd]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Surveyor ditemukan */}
          <AnimatePresence>
            {found && surveyor && (
              <motion.div
                key="found"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-10"
              >
                <div className="bg-white/95 border border-[#c084fc]/30 rounded-2xl p-6 shadow-lg backdrop-blur-md text-left">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={surveyor.foto}
                      alt={surveyor.nama}
                      className="w-16 h-16 rounded-full border-2 border-[#c084fc]/40 object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {surveyor.nama}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {surveyor.lokasi} • {surveyor.jarak}
                      </p>
                      <div className="flex items-center gap-1 text-[#f9a8d4] text-sm mt-1">
                        <Star size={14} /> {surveyor.rating} ⭐
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-4">
                    <MapContainer
                      center={surveyorPosition || userPosition}
                      zoom={15}
                      scrollWheelZoom={false}
                      style={{ height: 300 }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap"
                      />
                      {surveyorPosition && (
                        <Marker position={surveyorPosition}>
                          <Popup>🚗 {surveyor.nama} sedang menuju lokasi kamu</Popup>
                        </Marker>
                      )}
                      <Marker position={userPosition}>
                        <Popup>📍 Lokasi Kamu</Popup>
                      </Marker>
                    </MapContainer>
                  </div>

                  {/* Status */}
                  <div className="mt-4 text-center text-sm font-medium text-gray-700 bg-[#f9f9ff]/80 border border-[#c084fc]/20 rounded-xl py-2">
                    {status === "menuju" && "🚗 Surveyor sedang menuju lokasi kamu"}
                    {status === "tiba" && "📸 Surveyor telah tiba dan sedang melakukan survei"}
                    {status === "selesai" && "✅ Survei selesai, laporan sedang dikirim ke akun kamu"}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a
                      href={`https://wa.me/${surveyor.telp.replace(/^0/, "62")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#93c5fd] text-white font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={16} /> Hubungi via WhatsApp
                    </a>
                    <button className="flex-1 py-2 rounded-lg border border-[#c084fc]/40 text-[#8b5cf6] font-semibold hover:bg-[#f3e8ff]/70 transition flex items-center justify-center gap-2">
                      <CheckCircle size={16} /> Konfirmasi Survei
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <FooterElegant />
    </>
  );
}
