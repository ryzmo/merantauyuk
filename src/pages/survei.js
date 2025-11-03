"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Nav";
import FooterElegant from "../components/Footer";
import {
  MapPin,
  Search,
  Loader2,
  Star,
  MessageCircle,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

// 🗺️ React Leaflet Dynamic Import
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });

export default function SurveiPage() {
  const [lokasi, setLokasi] = useState("");
  const [catatan, setCatatan] = useState("");
  const [progress, setProgress] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [found, setFound] = useState(false);
  const [surveyor, setSurveyor] = useState(null);
  const [status, setStatus] = useState("idle");
  const [userPosition, setUserPosition] = useState([-7.9666, 112.6326]);
  const [surveyorPosition, setSurveyorPosition] = useState(null);
  const mapRef = useRef(null);

  const surveyorsMock = [
    {
      nama: "Budi Prasetyo",
      rating: 4.9,
      lokasi: "Lowokwaru",
      jarak: "0.8 km",
      foto: "/user1.jpg",
      coords: [-7.956, 112.621],
      telp: "081299991234",
    },
    {
      nama: "Dewi Anggraini",
      rating: 4.8,
      lokasi: "Tlogomas",
      jarak: "1.2 km",
      foto: "/user2.jpg",
      coords: [-7.958, 112.628],
      telp: "081388885678",
    },
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserPosition([pos.coords.latitude, pos.coords.longitude]),
        () => console.warn("GPS ditolak")
      );
    }
  }, []);

  const startSearch = () => {
    if (!lokasi.trim()) return alert("Masukkan lokasi hunian terlebih dahulu.");
    setIsSearching(true);
    setProgress(0);
    setFound(false);
    setStatus("mencari");

    const timer = setInterval(() => setProgress((p) => (p < 100 ? p + 6 : 100)), 200);

    setTimeout(() => {
      clearInterval(timer);
      const s = surveyorsMock[Math.floor(Math.random() * surveyorsMock.length)];
      setSurveyor(s);
      setSurveyorPosition(s.coords);
      setFound(true);
      setIsSearching(false);
      setStatus("menuju");
      setTimeout(() => setStatus("tiba"), 7000);
      setTimeout(() => setStatus("selesai"), 15000);
    }, 3200);
  };

  // 🔧 Auto resize map when visible
  useEffect(() => {
    if (mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 500);
    }
  }, [found]);

  // ✅ Handle window resize too
  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) mapRef.current.invalidateSize();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex flex-col items-center bg-gradient-to-b from-[#faf5ff] via-[#f3e8ff] to-[#ede9fe] pt-28 pb-20 overflow-hidden">
        {/* background glow */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#c084fc]/30 blur-3xl rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#93c5fd]/30 blur-3xl rounded-full"
          animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 9, repeat: Infinity }}
        />

        <div className="relative z-10 w-full max-w-3xl text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-[#8b5cf6]"
          >
            Surveyor Profesional Siap Membantu 🧭
          </motion.h1>
          <p className="mt-3 text-gray-600 text-lg">
            Layanan survei cepat & transparan — biarkan surveyor lokal mengecek hunianmu langsung di lapangan.
          </p>

          {/* STEP 1 */}
          {!found && !isSearching && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 bg-white/90 border border-[#c084fc]/30 shadow-xl backdrop-blur-md rounded-2xl p-6 text-left"
            >
              <label className="block mb-4">
                <span className="font-medium text-gray-700 flex items-center gap-2">
                  <MapPin className="text-[#8b5cf6]" size={18} /> Lokasi Hunian
                </span>
                <input
                  value={lokasi}
                  onChange={(e) => setLokasi(e.target.value)}
                  placeholder="Contoh: Kos Putri Anggrek, Lowokwaru"
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8b5cf6]"
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
                  placeholder="Contoh: Tolong rekam area dapur dan kamar mandi."
                  className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8b5cf6]"
                />
              </label>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={startSearch}
                className="w-full py-3 font-semibold rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#93c5fd] text-white shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Search size={18} /> Cari Surveyor Sekarang
              </motion.button>
            </motion.div>
          )}

          {/* STEP 2 */}
          <AnimatePresence>
            {isSearching && (
              <motion.div
                key="searching"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-16 text-center"
              >
                <Loader2 size={52} className="animate-spin text-[#8b5cf6] mx-auto" />
                <p className="mt-4 text-lg text-gray-700 font-medium">
                  Mencari surveyor terpercaya di sekitar{" "}
                  <span className="text-[#8b5cf6]">{lokasi}</span>...
                </p>
                <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mt-4 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#93c5fd]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* STEP 3 */}
          <AnimatePresence>
            {found && surveyor && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-10 bg-white/95 border border-[#c084fc]/30 rounded-2xl p-6 shadow-lg backdrop-blur-md text-left"
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={surveyor.foto}
                    alt={surveyor.nama}
                    className="w-16 h-16 rounded-full border-2 border-[#c084fc]/40 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">{surveyor.nama}</h3>
                    <p className="text-sm text-gray-500">{surveyor.lokasi} • {surveyor.jarak}</p>
                    <div className="flex items-center gap-1 text-[#f9a8d4] text-sm mt-1">
                      <Star size={14} /> {surveyor.rating} rating
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm mt-3">
                  <div className="w-full h-[300px]">
                    <MapContainer
                      center={surveyorPosition || userPosition}
                      zoom={15}
                      scrollWheelZoom={false}
                      style={{ height: "100%", width: "100%" }}
                      whenCreated={(mapInstance) => {
                        mapRef.current = mapInstance;
                      }}
                    >
                      <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution="&copy; <a href='https://carto.com/'>CARTO</a> contributors"
                      />
                      <Marker position={userPosition}>
                        <Popup>📍 Lokasi Kamu</Popup>
                      </Marker>
                      {surveyorPosition && (
                        <Marker position={surveyorPosition}>
                          <Popup>🚗 {surveyor.nama} sedang menuju lokasi kamu</Popup>
                        </Marker>
                      )}
                    </MapContainer>
                  </div>
                </div>

                <div className="mt-4 text-center bg-[#faf5ff]/70 border border-[#c084fc]/30 rounded-xl py-2 text-sm font-medium text-gray-700">
                  {status === "menuju" && "🚗 Surveyor sedang menuju lokasi kamu..."}
                  {status === "tiba" && "📸 Surveyor telah tiba dan sedang melakukan survei..."}
                  {status === "selesai" && "✅ Survei selesai! Laporan dikirim ke akun kamu."}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a
                    href={`https://wa.me/${surveyor.telp}`}
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <FooterElegant />
    </>
  );
}
