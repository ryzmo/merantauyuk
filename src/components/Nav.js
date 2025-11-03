"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔹 Menu navigasi
  const items = [
    ["Beranda", "/"],
    ["Profil", "/profile"],
    ["Riwayat", "/history"],
    ["Kos", "/property"],
    ["Survei", "/survei"],
    ["Laundry", "/laundry"],
    ["Marketplace", "/marketplace"],
    ["Bantuan", "/bantuan"],
    ["Tentang", "/tentang"],
    ["Gabung", "/gabung"],
  ];

  // 🧠 Hide navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(!(currentScrollY > lastScrollY && currentScrollY > 80));
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Cek login status
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-lg transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        background: "rgba(255, 255, 255, 0.75)",
        borderColor: "rgba(139, 92, 246, 0.25)",
        boxShadow: "0 4px 25px rgba(139, 92, 246, 0.15)",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* 🔹 Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="MerantauYuk Logo"
            className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(45%) sepia(100%) saturate(800%) hue-rotate(222deg)",
            }}
          />
        </Link>

        {/* 🔹 Menu Items */}
        <div className="hidden md:flex items-center gap-6 relative">
          {items.map(([label, path]) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`relative text-sm font-medium transition-all duration-300 pb-1 ${
                  isActive
                    ? "text-[#8b5cf6]"
                    : "text-gray-600 hover:text-[#8b5cf6]"
                }`}
              >
                {label}
                {/* 🌈 Animated underline */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all duration-500 ${
                    isActive
                      ? "w-full bg-gradient-to-r from-[#f9a8d4] via-[#c084fc] to-[#93c5fd]"
                      : "w-0 bg-transparent"
                  }`}
                ></span>
              </Link>
            );
          })}

          {/* 🔹 Tombol Login / Logout */}
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="ml-4 rounded-full text-sm font-semibold text-white px-5 py-2 shadow-md transition-all duration-300 transform hover:scale-105"
              style={{
                background:
                  "linear-gradient(to right, #a78bfa, #8b5cf6, #7c3aed)",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.35)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #c4b5fd, #8b5cf6, #6d28d9)";
                e.currentTarget.style.boxShadow =
                  "0 6px 25px rgba(139,92,246,0.5)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #a78bfa, #8b5cf6, #7c3aed)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(139, 92, 246, 0.35)";
              }}
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="ml-4 rounded-full text-sm font-semibold text-white px-5 py-2 shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(to right, #f9a8d4, #ec4899, #db2777)",
                boxShadow: "0 4px 15px rgba(236,72,153,0.3)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #fbcfe8, #f472b6, #db2777)";
                e.currentTarget.style.boxShadow =
                  "0 6px 25px rgba(236,72,153,0.45)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #f9a8d4, #ec4899, #db2777)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(236,72,153,0.3)";
              }}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
