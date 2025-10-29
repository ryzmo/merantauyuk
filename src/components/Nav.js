"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🔹 Tambah item "About"
  const items = [
    ["Beranda", "/"],
    ["Profil", "/profile"],
    ["Kos", "/property"],
    ["Survei", "/survei"],
    ["Laundry", "/laundry"],
    ["Marketplace", "/marketplace"],
    ["Bantuan", "/bantuan"],
    ["Tentang", "/tentang"], // ✅ new link
    ["Gabung", "/gabung"], // ✅ new link
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-lg transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        background: "rgba(255, 255, 255, 0.7)",
        borderColor: "rgba(139, 92, 246, 0.25)",
        boxShadow: "0 4px 25px rgba(139, 92, 246, 0.15)",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* 🔹 Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="MerantauYuk Logo"
              className="h-16 w-auto object-contain transition-all duration-300 drop-shadow-md"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(800%) hue-rotate(222deg) brightness(100%) contrast(105%)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter =
                  "brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(900%) hue-rotate(222deg) brightness(120%) contrast(110%)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter =
                  "brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(800%) hue-rotate(222deg) brightness(100%) contrast(105%)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
        </Link>

        {/* 🔹 Menu items */}
        <div className="hidden md:flex items-center gap-6">
          {items.map(([label, path]) => {
            const isAnchor = path.startsWith("#") || !path.startsWith("/");
            return (
              <a
                key={path}
                href={isAnchor ? `#${path}` : path} // ✅ auto-detect link type
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#4b5563" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#8b5cf6")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#4b5563")}
              >
                {label}
              </a>
            );
          })}

          {/* 🔹 Tombol CTA */}
          <Link
            href="/login"
            className="rounded-full text-sm font-semibold text-white px-5 py-2 shadow-md transition-all duration-300"
            style={{
              background:
                "linear-gradient(to right, #a78bfa, #8b5cf6, #7c3aed)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.35)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(to right, #c4b5fd, #8b5cf6, #6d28d9)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(to right, #a78bfa, #8b5cf6, #7c3aed)")
            }
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
