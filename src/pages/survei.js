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
  Camera,
  ShieldCheck,
  Navigation,
} from "lucide-react";
import { useRouter } from "next/router";


// 🗺️ Dynamic import (biar aman di SSR)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function SurveiPage() {
  const [lokasi, setLokasi] = useState("");
  const [catatan, setCatatan] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [found, setFound] = useState(false);
  const [surveyor, setSurveyor] = useState(null);
  const [userPosition, setUserPosition] = useState([-7.9666, 112.6326]); // default Malang
  const [surveyorPosition, setSurveyorPosition] = useState(null);
  const [status, setStatus] = useState("menemukan");

  const router = useRouter();

useEffect(() => {
  if (router.query.lokasi) {
    setLokasi(router.query.lokasi);
  }
}, [router.query.lokasi]);



  // 🔹 Mock surveyors data
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
    },
  ];

  // 🔹 Ambil lokasi user (GPS)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserPosition([pos.coords.latitude, pos.coords.longitude]),
        () => console.warn("Lokasi user tidak diizinkan")
      );
    }
  }, []);

  // 🔹 Handle tombol cari surveyor
  const handleCariSurveyor = () => {
    if (!lokasi.trim()) {
      alert("Masukkan lokasi kos atau area survei terlebih dahulu!");
      return;
    }

    setIsSearching(true);
    setFound(false);
    setSurveyor(null);
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 10 : 100));
    }, 300);

    setTimeout(() => {
      clearInterval(timer);
      const randomSurveyor =
        surveyorsMock[Math.floor(Math.random() * surveyorsMock.length)];
      setSurveyor(randomSurveyor);
      setSurveyorPosition(randomSurveyor.coords);
      setIsSearching(false);
      setFound(true);
    }, 3000);
  };

  // 🔹 Simulasi surveyor bergerak mendekat
  useEffect(() => {
    if (found && surveyorPosition && userPosition) {
      const interval = setInterval(() => {
        setSurveyorPosition((prev) => {
          if (!prev) return prev;
          const [lat, lng] = prev;
          const [userLat, userLng] = userPosition;

          const newLat = lat + (userLat - lat) * 0.05;
          const newLng = lng + (userLng - lng) * 0.05;

          const dist = Math.sqrt(
            Math.pow(newLat - userLat, 2) + Math.pow(newLng - userLng, 2)
          );

          if (dist < 0.0005) {
            clearInterval(interval);
            return userPosition;
          }
          return [newLat, newLng];
        });
      }, 1200);

      return () => clearInterval(interval);
    }
  }, [found]);
  useEffect(() => {
  if (found) {
    setStatus("menuju"); // setelah ditemukan
    setTimeout(() => setStatus("tiba"), 10000); // 10 detik kemudian tiba
    setTimeout(() => setStatus("selesai"), 20000); // lalu selesai
  }
}, [found]);


  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[95vh] text-black flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#faf5ff] via-[#f3e8ff] to-[#ede9fe] overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-[url('/map-pattern.png')] bg-cover bg-center"
          style={{ backgroundSize: "120%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/90" />

        {/* CONTENT */}
        <div className="relative z-10 mt-24 max-w-3xl w-full px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-[#8b5cf6] drop-shadow-sm"
          >
            Survei Kos, Semudah GoRide 🚗
          </motion.h1>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl mx-auto">
            Masukkan lokasi kos atau apartemen yang ingin kamu survei. Kami akan
            mencarikan surveyor lokal terbaik yang bisa langsung menuju lokasi.
          </p>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-[#c084fc]/30 text-left"
          >
            <label className="block mb-4">
              <span className="font-medium text-gray-700 flex items-center gap-2">
                <MapPin className="text-[#8b5cf6]" size={18} /> Lokasi Hunian
              </span>
              <input
                type="text"
                placeholder="Contoh: Kos Putri Anggrek, Lowokwaru"
                value={lokasi}
                onChange={(e) => setLokasi(e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#c084fc]"
              />
            </label>

            <label className="block mb-6">
              <span className="font-medium text-gray-700 flex items-center gap-2">
                <ShieldCheck className="text-[#93c5fd]" size={18} /> Catatan Tambahan
              </span>
              <textarea
                rows="2"
                placeholder="Contoh: Tolong ambil video di kamar & dapur."
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#c084fc]"
              />
            </label>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCariSurveyor}
              disabled={isSearching}
              className={`w-full py-3 font-semibold rounded-xl flex items-center justify-center gap-2 transition-all ${
                isSearching
                  ? "bg-gray-300 text-gray-600"
                  : "bg-gradient-to-r from-[#c084fc] to-[#93c5fd] text-white shadow-md hover:shadow-lg"
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

          {/* STATE: SEARCHING */}
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
                <p className="mt-3 text-lg font-medium">
                  Mencari surveyor di sekitar {lokasi}...
                </p>
                <div className="w-64 h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#c084fc] to-[#93c5fd]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Mohon tunggu sebentar... kami sedang mencarikan yang terdekat 🕵️
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* STATE: FOUND */}
          <AnimatePresence>
            {found && surveyor && (
              <motion.div
                key="found"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
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
                        <Star size={14} /> {surveyor.rating}
                      </div>
                    </div>
                  </div>

                  {/* MAP - Fokus ke surveyor */}
                  <div className="overflow-hidden rounded-xl mt-5">
                    <MapContainer
                      center={surveyorPosition || userPosition}
                      zoom={15}
                      scrollWheelZoom={false}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap"
                      />
                      {surveyorPosition && (
                        <Marker position={surveyorPosition}>
                          <Popup>
                            🚗 {surveyor.nama} (Surveyor) sedang menuju lokasi
                          </Popup>
                        </Marker>
                      )}
                      <Marker position={userPosition}>
                        <Popup>📍 Lokasi Kamu</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                  <div className="mt-4 bg-white/90 border border-[#c084fc]/20 rounded-xl p-3 text-center text-sm font-medium text-gray-700">
  {status === "menuju" && "🚗 Surveyor sedang menuju lokasi kamu"}
  {status === "tiba" && "📸 Surveyor telah tiba dan sedang melakukan survei"}
  {status === "selesai" && "✅ Survei selesai, laporan sedang dikirim ke akun kamu"}
</div>


                  <motion.div
                    className="flex flex-col sm:flex-row gap-3 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#93c5fd] text-white font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                      <MessageCircle size={16} /> Hubungi Surveyor
                    </button>
                    <button className="flex-1 py-2 rounded-lg border border-[#c084fc]/40 text-[#8b5cf6] font-semibold hover:bg-[#f3e8ff]/70 transition flex items-center justify-center gap-2">
                      <CheckCircle size={16} /> Konfirmasi Survei
                    </button>
                  </motion.div>
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
