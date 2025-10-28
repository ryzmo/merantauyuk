"use client";

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  MapPin,
  Wifi,
  Droplet,
  Bed,
  ArrowLeft,
  Phone,
  Mail,
  Utensils,
  Car,
  ShieldCheck,
  DoorClosed,
  Users,
} from "lucide-react";
import Link from "next/link";

const properties = [
  {
    name: "Kos Griya Putri Anggrek",
    slug: "kos-griya-putri-anggrek",
    price: 850000,
    location: "Lowokwaru",
    image: "/malang/kos1.jpg",
    images: ["/malang/kos1.jpg", "/malang/kos2.jpg", "/malang/kos3.jpg"],
    facilities: ["WiFi", "Kamar Mandi Dalam", "Dapur Bersama", "Parkir Motor"],
    description:
      "Kos putri dengan suasana nyaman dan lokasi strategis dekat kampus UB. Didesain untuk kenyamanan mahasiswa, lengkap dengan dapur bersama, WiFi cepat, dan area bersih.",
    rules: [
      "Khusus putri",
      "Tidak diperbolehkan merokok di dalam kamar",
      "Tamu lawan jenis hanya boleh di ruang tamu",
      "Jam malam pukul 22.00",
    ],
    owner: {
      name: "Bu Siti Anggraeni",
      phone: "0812-3456-7890",
      email: "kosanggrek@example.com",
    },
    coordinates: { lat: -7.9497, lng: 112.615 },
  },
  {
    name: "Apartemen Soekarno Hatta",
    slug: "apartemen-soekarno-hatta",
    price: 2800000,
    location: "Soekarno Hatta",
    image: "/malang/kos3.jpg",
    images: ["/malang/kos3.jpg", "/malang/kos4.jpg", "/malang/kos5.jpg"],
    facilities: ["AC", "WiFi", "Laundry", "Parkir Mobil", "Keamanan 24 Jam"],
    description:
      "Apartemen modern dengan fasilitas premium di jantung kota Malang. Cocok untuk profesional muda dan keluarga kecil.",
    rules: [
      "Tidak boleh membawa hewan peliharaan",
      "Dilarang merokok di area indoor",
      "Minimal sewa 3 bulan",
    ],
    owner: {
      name: "Pak Budi Santoso",
      phone: "0813-5678-9999",
      email: "budiapartemen@example.com",
    },
    coordinates: { lat: -7.955, lng: 112.621 },
  },
];

export default function PropertyDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        <p>Hunian tidak ditemukan 😢</p>
        <Link href="/property" className="text-[#8b5cf6] mt-2 underline">
          Kembali ke daftar
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#faf5ff]/80 to-[#f3e8ff]/60 text-gray-800 p-6 md:p-12">
      {/* Tombol kembali */}
      <Link href="/property" className="flex items-center text-[#8b5cf6] mb-6">
        <ArrowLeft size={18} className="mr-2" /> Kembali
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl shadow-lg overflow-hidden"
      >
        {/* 🏙️ Hero / Gambar utama */}
        <div className="relative">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 className="text-3xl font-bold text-white">{property.name}</h1>
            <p className="text-[#f9a8d4] text-lg font-semibold">
              Rp {property.price.toLocaleString("id-ID")}/bulan
            </p>
          </div>
        </div>

        {/* 🏠 Info detail */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Lokasi & deskripsi */}
          <div>
            <p className="text-gray-500 mb-3 flex items-center gap-2">
              <MapPin size={18} /> {property.location}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Fasilitas */}
          <div>
            <h3 className="text-xl font-semibold text-[#8b5cf6] mb-3">
              Fasilitas Lengkap
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
              {property.facilities.includes("WiFi") && (
                <div className="flex items-center gap-2">
                  <Wifi size={16} /> WiFi
                </div>
              )}
              {property.facilities.includes("Kamar Mandi Dalam") && (
                <div className="flex items-center gap-2">
                  <Droplet size={16} /> Kamar Mandi Dalam
                </div>
              )}
              {property.facilities.includes("Dapur Bersama") && (
                <div className="flex items-center gap-2">
                  <Utensils size={16} /> Dapur Bersama
                </div>
              )}
              {property.facilities.includes("AC") && (
                <div className="flex items-center gap-2">
                  <Bed size={16} /> AC
                </div>
              )}
              {property.facilities.includes("Parkir Motor") && (
                <div className="flex items-center gap-2">
                  <Car size={16} /> Parkir Motor
                </div>
              )}
              {property.facilities.includes("Keamanan 24 Jam") && (
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} /> Keamanan 24 Jam
                </div>
              )}
            </div>
          </div>

          {/* Aturan */}
          {property.rules && (
            <div>
              <h3 className="text-xl font-semibold text-[#8b5cf6] mb-3">
                Aturan Penghuni
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {property.rules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Kontak Pemilik */}
          <div>
            <h3 className="text-xl font-semibold text-[#8b5cf6] mb-3">
              Kontak Pemilik
            </h3>
            <div className="bg-[#f3e8ff]/50 border border-[#8b5cf6]/20 rounded-xl p-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Users size={16} /> {property.owner.name}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> {property.owner.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> {property.owner.email}
              </p>
            </div>
          </div>

          {/* Tombol Minta Survei */}
<div className="text-center">
  <Link
    href={{
      pathname: "/survei",
      query: {
        lokasi: `${property.name}, ${property.location}`,
      },
    }}
    className="inline-flex items-center gap-2 px-5 py-3 mt-4 bg-gradient-to-r from-[#8b5cf6] to-[#93c5fd] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
  >
    <MapPin size={18} />
    Minta Survei Lokasi Ini
  </Link>
</div>


          {/* Lokasi (embed peta) */}
          <div>
            <h3 className="text-xl font-semibold text-[#8b5cf6] mb-3">
              Lokasi di Peta
            </h3>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&hl=id&z=16&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
