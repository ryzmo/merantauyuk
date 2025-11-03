"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, Heart } from "lucide-react";
import Link from "next/link";

export default function FooterElegant() {
  return (
    <footer className="relative bg-[#f5f3ff] text-gray-700 pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-[#c084fc]/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#f9a8d4]/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#8b5cf6] mb-2">
              Merantau<span className="text-[#f9a8d4]">Yuk!</span>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Platform untuk membantu para perantau menemukan hunian, layanan, dan komunitas terbaik di kota tujuan mereka.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://youtube.com"
                target="_blank"
                className="p-2 border border-[#c084fc]/40 rounded-md hover:bg-[#c084fc]/10 transition"
              >
                <Youtube size={18} className="text-[#8b5cf6]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="p-2 border border-[#c084fc]/40 rounded-md hover:bg-[#f9a8d4]/10 transition"
              >
                <Instagram size={18} className="text-[#f9a8d4]" />
              </a>
            </div>
          </div>

          {/* Column 1 - Home */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Home</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/profile" className="hover:text-[#8b5cf6] transition">Profile</Link></li>
              <li><Link href="/booking" className="hover:text-[#8b5cf6] transition">My Booking</Link></li>
              <li><Link href="/violations" className="hover:text-[#8b5cf6] transition">Violations</Link></li>
            </ul>
          </div>

          {/* Column 2 - Help */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/rules" className="hover:text-[#8b5cf6] transition">Rules</Link></li>
              <li><Link href="/violations" className="hover:text-[#8b5cf6] transition">Violations</Link></li>
              <li><Link href="/report" className="hover:text-[#8b5cf6] transition">Report a problem</Link></li>
            </ul>
          </div>

          {/* Column 3 - About */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4 text-lg">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/team" className="hover:text-[#8b5cf6] transition">Core Team</Link></li>
              <li><Link href="/budget" className="hover:text-[#8b5cf6] transition">Budget Report</Link></li>
              <li><Link href="/feedback" className="hover:text-[#8b5cf6] transition">Feedback</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#c084fc]/30 mb-6" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-500"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-[#8b5cf6] font-semibold">MerantauYuk!</span> — Dibuat dengan{" "}
          <Heart size={12} className="inline text-[#f9a8d4]" /> di Malang 💜
        </motion.div>
      </div>
    </footer>
  );
}
