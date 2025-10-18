"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const items = [
    ["About", "tentang"],
    ["Feature", "fitur"],
    ["FAQS", "faqs"],
    ["Roadmap", "roadmap"],
    ["Contact Us", "contact-us"],
  ];

  // 🔹 Logika hide saat scroll ke bawah, show saat scroll ke atas
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll ke bawah -> sembunyikan
        setVisible(false);
      } else {
        // Scroll ke atas -> tampilkan
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        borderColor: "rgba(255,255,255,0.1)",
        backgroundColor: "rgba(12, 7, 23, 0.7)", // ungu transparan
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* 🔹 Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="MerantauYuk Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
        </a>

        {/* 🔹 Menu items */}
        <div className="hidden md:flex items-center gap-6">
          {items.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm transition-colors duration-200"
              style={{
                color: "rgba(255,255,255,0.8)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
              }
            >
              {label}
            </a>
          ))}

          {/* 🔹 Tombol CTA */}
          <a
            href="#cta"
            className="rounded-full text-sm font-semibold text-white px-5 py-2 shadow-md transition-all duration-300"
            style={{
              backgroundImage:
                "linear-gradient(to right, #d946ef, #7c1fbf)", // ungu gradasi
              boxShadow: "0 0 40px rgba(217,70,239,0.25)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            Mulai Sekarang
          </a>
        </div>
      </nav>
    </header>
  );
}
