"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Phone, MapPin, Home, Heart, Globe } from "lucide-react";
import Link from "next/link";

export default function FooterElegant() {
  return (
    <footer className="relative bg-gradient-to-b from-[#faf5ff]/80 via-[#f3e8ff]/90 to-white pt-20 pb-10 overflow-hidden">
      {/* 🌸 Background Glow */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-[#c084fc]/25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#f9a8d4]/25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 💜 Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-gray-700">
        {/* Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Home className="text-[#8b5cf6]" size={26} />
            <h3 className="text-2xl font-extrabold text-[#8b5cf6]">
              Merantau<span className="text-[#f9a8d4]">Yuk!</span>
            </h3>
          </div>

          <p className="text-sm text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
            Platform untuk membantu para perantau menemukan hunian, layanan, dan komunitas terbaik di kota tujuan mereka 💜
          </p>
        </motion.div>

        {/* Navigasi */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-sm mb-10"
        >
          <Link href="/" className="hover:text-[#8b5cf6] transition">Beranda</Link>
          <Link href="/explore" className="hover:text-[#8b5cf6] transition">Eksplor Kota</Link>
          <Link href="/fitur" className="hover:text-[#8b5cf6] transition">Fitur</Link>
          <Link href="/contact" className="hover:text-[#8b5cf6] transition">Kontak</Link>
        </motion.div>

        {/* Kontak Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-600 mb-8"
        >
          <div className="flex items-center gap-2">
            <Mail size={16} /> support@merantauyuk.id
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} /> +62 812 3456 7890
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} /> Malang, Indonesia
          </div>
        </motion.div>

        {/* Sosial Media */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-5 mb-8"
        >
          <a href="https://instagram.com" target="_blank" className="text-[#8b5cf6] hover:scale-110 transition">
            <Instagram size={20} />
          </a>
          <a href="https://tiktok.com" target="_blank" className="text-[#f9a8d4] hover:scale-110 transition">
            <Globe size={20} /> {/* Ganti ikon TikTok agar tidak undefined */}
          </a>
          <a href="mailto:support@merantauyuk.id" className="text-[#93c5fd] hover:scale-110 transition">
            <Mail size={20} />
          </a>
        </motion.div>

        {/* Garis Pemisah */}
        <div className="border-t border-[#c084fc]/20 w-full mb-6" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-xs text-gray-500"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-[#8b5cf6] font-semibold">MerantauYuk!</span>{" "}
          — Dibuat dengan <Heart size={14} className="inline text-[#f9a8d4]" /> di Malang 💜
        </motion.div>
      </div>
    </footer>
  );
}
