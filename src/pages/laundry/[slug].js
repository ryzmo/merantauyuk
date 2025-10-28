"use client";

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Shirt,
  ArrowLeft,
  Phone,
  Mail,
  DollarSign,
  Truck,
  ShieldCheck,
  Users,
  Droplet,
  Star,
} from "lucide-react";

// 🧺 Data Laundry Lengkap
const laundries = [
  {
    name: "Laundry Express UB",
    slug: "laundry-express-ub",
    price: 7000,
    location: "Lowokwaru",
    image: "/laundry/laundry1.jpg",
    images: ["/laundry/laundry1.jpg", "/laundry/laundry2.jpg", "/laundry/laundry3.jpg"],
    services: ["Cuci + Setrika", "Antar Jemput", "Express 6 Jam"],
    description:
      "Laundry cepat dan bersih dekat kampus Universitas Brawijaya. Menyediakan layanan express 6 jam dengan kualitas premium. Cocok untuk mahasiswa dan pekerja yang butuh cepat.",
    owner: {
      name: "Rina Laundry",
      phone: "0812-3456-7890",
      email: "rinaexpress@example.com",
    },
    rules: [
      "Minimal cucian 2 kg",
      "Layanan antar jemput gratis dalam radius 2 km",
      "Pakaian dilipat rapi, disetrika wangi",
    ],
    coordinates: { lat: -7.952, lng: 112.614 },
    rating: 4.8,
  },
  {
    name: "Perfect Clean Soehat",
    slug: "perfect-clean-soehat",
    price: 9000,
    location: "Soekarno Hatta",
    image: "/laundry/laundry6.jpg",
    images: ["/laundry/laundry6.jpg", "/laundry/laundry5.jpg", "/laundry/laundry4.jpg"],
    services: ["Laundry Premium", "Antar Jemput", "Cuci Sepatu"],
    description:
      "Laundry premium dengan teknologi modern dan cairan ramah lingkungan. Layanan cepat, bersih, dan wangi tahan lama.",
    owner: {
      name: "Pak Budi Laundry",
      phone: "0813-5678-9999",
      email: "perfectclean@example.com",
    },
    rules: [
      "Tidak menerima karpet besar",
      "Antar jemput berlaku minimal 3 kg",
      "Pakaian delicate diproses manual",
    ],
    coordinates: { lat: -7.955, lng: 112.621 },
    rating: 4.9,
  },
];

export default function LaundryDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const laundry = laundries.find((l) => l.slug === slug);

  if (!laundry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        <p>Laundry tidak ditemukan 😢</p>
        <Link href="/laundry" className="text-[#8b5cf6] mt-2 underline">
          Kembali ke daftar
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#faf5ff]/80 to-[#f3e8ff]/60 text-gray-800 p-6 md:p-12">
      {/* 🔙 Tombol kembali */}
      <Link href="/laundry" className="flex items-center text-[#8b5cf6] mb-6">
        <ArrowLeft size={18} className="mr-2" /> Kembali ke daftar
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl shadow-lg overflow-hidden"
      >
        {/* 🧺 Hero Gambar */}
        <div className="relative">
          <img
            src={laundry.image}
            alt={laundry.name}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <h1 className="text-3xl font-bold text-white">{laundry.name}</h1>
            <p className="text-[#f9a8d4] text-lg font-semibold">
              Rp {laundry.price.toLocaleString("id-ID")} / kg
            </p>
          </div>
        </div>

        {/* 🧾 Detail */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Lokasi & Deskripsi */}
          <div>
            <p className="text-gray-500 mb-3 flex items-center gap-2">
              <MapPin size={18} /> {laundry.location}
            </p>
            <p className="text-gray-700 leading-relaxed">{laundry.description}</p>
          </div>

          {/* Layanan / Services */}
          <div>
            <h3 className="text-xl font-semibold text-[#8b5cf6] mb-3">
              Layanan Tersedia
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700">
              {laundry.services.includes("Cuci + Setrika") && (
                <div className="flex items-center gap-2">
                  <Shirt size={16} /> Cuci + Setrika
                </div>
              )}
              {laundry.services.includes("Express 6 Jam") && (
                <div className="flex items-center gap-2">
                  <Clock size={16} /> Express 6 Jam
                </div>
              )}
              {laundry.services.includes("Antar Jemput") && (
                <div className="flex items-center gap-2">
                  <Truck size={16} /> Antar Jemput
                </div>
              )}
              {laundry.services.includes("Cuci Sepatu") && (
                <div className="flex items-center gap-2">
                  <Droplet size={16} /> Cuci Sepatu
                </div>
              )}
              {laundry.services.includes("Laundry Premium") && (
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} /> Laundry Premium
                </div>
              )}
            </div>
          </div>

          {/* Aturan */}
          {laundry.rules && (
            <div>
              <h3 className="text-xl font-semibold text-[#8b5cf6] mb-3">
                Ketentuan & Catatan
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {laundry.rules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Pemilik */}
          <div>
            <h3 className="text-xl font-semibold text-[#8b5cf6] mb-3">
              Kontak Pemilik Laundry
            </h3>
            <div className="bg-[#f3e8ff]/50 border border-[#8b5cf6]/20 rounded-xl p-4 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Users size={16} /> {laundry.owner.name}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> {laundry.owner.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> {laundry.owner.email}
              </p>
            </div>
          </div>

          {/* Tombol Survei */}
          <div className="text-center">
            <Link
              href={{
                pathname: "/survei",
                query: {
                  lokasi: `${laundry.name}, ${laundry.location}`,
                },
              }}
              className="inline-flex items-center gap-2 px-5 py-3 mt-4 bg-gradient-to-r from-[#8b5cf6] to-[#93c5fd] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
            >
              <MapPin size={18} />
              Minta Survei Laundry Ini
            </Link>
          </div>

          {/* Lokasi Map */}
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
                src={`https://www.google.com/maps?q=${laundry.coordinates.lat},${laundry.coordinates.lng}&hl=id&z=16&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
