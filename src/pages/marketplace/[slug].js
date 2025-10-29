"use client";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Package,
  Phone,
  MessageCircle,
  Heart,
  Share2,
  CalendarDays,
  User,
} from "lucide-react";

// 🛍️ Data Marketplace Lengkap
const items = [
  {
    id: 1,
    title: "Sepeda Lipat Bekas",
    slug: "sepeda-lipat-bekas",
    price: 750000,
    location: "Lowokwaru",
    category: "WTS",
    images: [
      "/market/bike.jpg",
      "/market/bike2.jpg",
      "/market/bike3.jpg",
    ],
    desc: "Sepeda lipat kondisi 90%, jarang dipakai. Siap pakai! Cocok untuk ke kampus atau jalan santai.",
    date: "2025-10-15",
    seller: {
      name: "Doni Saputra",
      phone: "0813-5555-1212",
      email: "doni.spt@example.com",
    },
    coordinates: { lat: -7.952, lng: 112.615 },
  },
  {
    id: 2,
    title: "Kamera Canon 600D",
    slug: "kamera-canon-600d",
    price: 2500000,
    location: "Tlogomas",
    category: "WTS",
    images: [
      "/market/camera.jpg",
      "/market/camera2.jpg",
      "/market/camera3.jpg",
    ],
    desc: "Kamera DSLR second, kondisi masih bagus, include lensa kit 18-55mm. Cocok untuk belajar fotografi atau konten creator.",
    date: "2025-10-14",
    seller: {
      name: "Rian Purnomo",
      phone: "0812-8888-9090",
      email: "rianfoto@example.com",
    },
    coordinates: { lat: -7.956, lng: 112.621 },
  },
  {
    id: 3,
    title: "Kasur Busa - Diberikan Gratis",
    slug: "kasur-busa-diberikan-gratis",
    price: 0,
    location: "Blimbing",
    category: "WTG",
    images: ["/market/mattress.jpg"],
    desc: "Kasur bekas tapi masih empuk dan bersih. Cocok untuk anak kos baru. Ambil sendiri ke rumah.",
    date: "2025-10-18",
    seller: {
      name: "Ibu Lilis",
      phone: "0819-3333-4444",
      email: "lilisrumah@example.com",
    },
    coordinates: { lat: -7.949, lng: 112.612 },
  },
];

export default function MarketplaceDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const item = items.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        <p>Barang tidak ditemukan 😢</p>
        <Link href="/marketplace" className="text-[#8b5cf6] mt-2 underline">
          Kembali ke Marketplace
        </Link>
      </div>
    );
  }

  // Barang lain untuk rekomendasi
  const related = items.filter((i) => i.slug !== slug).slice(0, 2);

  return (
    <>
      <Head>
        <title>{item.title} | Marketplace MerantauYuk</title>
        <meta
          name="description"
          content={`Temukan ${item.title} di ${item.location}. Harga: ${
            item.price === 0 ? "Gratis" : `Rp ${item.price.toLocaleString("id-ID")}`
          } - ${item.desc.substring(0, 80)}...`}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white via-[#faf5ff]/80 to-[#f3e8ff]/60 text-gray-800 p-6 md:p-12">
        {/* 🔙 Tombol kembali */}
        <Link href="/marketplace" className="flex items-center text-[#8b5cf6] mb-6">
          <ArrowLeft size={18} className="mr-2" /> Kembali ke Marketplace
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl shadow-lg overflow-hidden"
        >
          {/* 🖼️ Galeri Gambar */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-80 object-cover md:rounded-l-2xl"
            />
            <div className="grid grid-cols-2 gap-2 p-4">
              {item.images.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Preview ${idx + 1}`}
                  className="rounded-xl object-cover h-36 w-full border border-gray-200"
                />
              ))}
            </div>
          </div>

          {/* 📋 Detail */}
          <div className="p-8 space-y-8">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-[#8b5cf6]">{item.title}</h1>
                <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                  <MapPin size={16} /> {item.location}
                  <CalendarDays size={16} />{" "}
                  {new Date(item.date).toLocaleDateString("id-ID")}
                </div>
              </div>

              <div
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
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
            </div>

            <p className="text-gray-700 leading-relaxed">{item.desc}</p>

            {/* 💰 Harga */}
            <div className="flex items-center gap-2 text-xl font-semibold text-[#8b5cf6]">
              <DollarSign size={20} />
              {item.price === 0
                ? "Gratis"
                : `Rp ${item.price.toLocaleString("id-ID")}`}
            </div>

            {/* 👤 Penjual */}
            <div className="bg-[#f3e8ff]/50 border border-[#8b5cf6]/20 rounded-xl p-5 space-y-2 text-sm">
              <h3 className="text-[#8b5cf6] font-semibold mb-2 flex items-center gap-2">
                <User size={16} /> Informasi Penjual
              </h3>
              <p>
                <strong>Nama:</strong> {item.seller.name}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} /> {item.seller.phone}
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle size={14} /> {item.seller.email}
              </p>
            </div>

            {/* 📍 Lokasi */}
            <div>
              <h3 className="text-xl font-semibold text-[#8b5cf6] mb-3">
                Lokasi Barang
              </h3>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${item.coordinates.lat},${item.coordinates.lng}&hl=id&z=16&output=embed`}
                ></iframe>
              </div>
            </div>

            {/* 🔘 Tombol Aksi */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#93c5fd] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition">
                <Phone size={18} /> Hubungi Penjual
              </button>
              <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition">
                <Heart size={18} /> Simpan
              </button>
              <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition">
                <Share2 size={18} /> Bagikan
              </button>
            </div>
          </div>
        </motion.div>

        {/* 🔁 Barang Terkait */}
        {related.length > 0 && (
          <div className="max-w-5xl mx-auto mt-12">
            <h2 className="text-xl font-semibold text-[#8b5cf6] mb-4">
              Barang Serupa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/marketplace/${r.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition"
                  >
                    <img
                      src={r.images[0]}
                      alt={r.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 text-left">
                      <h3 className="font-semibold text-gray-800 line-clamp-1">
                        {r.title}
                      </h3>
                      <p className="text-sm text-[#8b5cf6] font-medium">
                        {r.price === 0
                          ? "Gratis"
                          : `Rp ${r.price.toLocaleString("id-ID")}`}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 🦶 Footer */}
        <footer className="border-t border-gray-200 py-8 mt-12 text-center text-sm text-gray-500 bg-white/70 backdrop-blur-md">
          © {new Date().getFullYear()} MerantauYuk. Semua Hak Dilindungi.
        </footer>
      </main>
    </>
  );
}
