import Header from "../components/Nav";
import CityHighlight from "../components/CityHighlight";
import FilterBar from "../components/FilterBar";
import InsightSection from "../components/InsightSection";
import PropertyShowcase from "../components/PropertyShowcase";
import AIBubble from "../components/AIBubble";

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-950 text-white">
      {/* 🔝 Header utama */}
      <Header />

      {/* 🎯 Hero / Highlight kota */}
      <CityHighlight />

      {/* 🧭 Konten utama */}
      <main className="flex-1 overflow-y-auto space-y-16 py-12 px-6 md:px-12">
        {/* 🏙️ Section 1 – Insight & info kota */}
        <InsightSection />

        {/* 🏠 Section 2 – Showcase properti */}
        <PropertyShowcase />

        {/* 🤖 Section 3 – AI Assistant */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold mb-3">
            Masih bingung mau tinggal di mana?
          </h2>
          <p className="text-gray-300 mb-6">
            Coba ngobrol dengan <span className="text-brand-400 font-semibold">YUKA</span> — asisten AI kamu di MerantauYuk.
          </p>
          <AIBubble />
        </div>
      </main>
    </div>
  );
}
