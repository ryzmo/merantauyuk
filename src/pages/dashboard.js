import Header from "../components/Nav";
import CityHighlight from "../components/CityHighlight";
import FilterBar from "../components/FilterBar";
import InsightSection from "../components/InsightSection";
import PropertyShowcase from "../components/PropertyShowcase";
import AIBubble from "../components/AIBubble";

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* 🔝 Header utama */}
      <Header />

      {/* 🎯 Hero / Highlight kota */}
      <CityHighlight />

      {/* 🧭 Konten utama */}
      <main className="flex-1 overflow-y-auto space-y-16 py-12 px-6 md:px-12">
        {/* Filter bar */}
        <div className="max-w-6xl mx-auto">
          <FilterBar />
        </div>

        {/* 🏙️ Section 1 – Insight & info kota */}
        <section className="bg-gray-50 rounded-2xl shadow-sm border border-[#e9d5ff] p-8">
          <InsightSection />
        </section>

        {/* 🏠 Section 2 – Showcase properti */}
        <section className="bg-gray-50 rounded-2xl shadow-sm border border-[#e9d5ff] p-8">
          <PropertyShowcase />
        </section>

        {/* 🤖 Section 3 – AI Assistant */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold mb-3">
            Masih bingung mau tinggal di mana?
          </h2>
          <p className="text-gray-600 mb-6">
            Coba ngobrol dengan{" "}
            <span className="font-semibold" style={{ color: "#a21caf" }}>
              YUKA
            </span>{" "}
            — asisten AI kamu di MerantauYuk.
          </p>
          <div className="inline-block">
            <AIBubble />
          </div>
        </div>

        {/* Tombol contoh */}
        <div className="text-center mt-10">
          <button
            className="text-white font-medium px-4 py-2 rounded-lg shadow-md transition"
            style={{
              backgroundColor: "#a21caf",
              boxShadow: "0 0 40px rgba(162, 28, 175, 0.25)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#7c1fbf")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#a21caf")}
          >
            Eksplor Sekarang
          </button>
        </div>

        {/* Contoh teks dan border ungu */}
        <div
          className="rounded-xl p-4 mt-10 text-center"
          style={{
            border: "1px solid #d946ef",
            color: "#7c1fbf",
          }}
        >
          Konten dengan aksen ungu ✨
        </div>
      </main>

      {/* Footer kecil dengan aksen ungu */}
      <footer
        className="mt-12 py-6 text-center text-sm text-gray-500 border-t"
        style={{ borderColor: "#e9d5ff" }}
      >
        Dibuat dengan 💜 oleh{" "}
        <span className="font-semibold" style={{ color: "#a21caf" }}>
          MerantauYuk
        </span>
      </footer>
    </div>
  );
}
