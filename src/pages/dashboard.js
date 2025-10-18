import dynamic from "next/dynamic";
import Header from "../components/Nav";
import CityHighlight from "../components/CityHighlight";
import FilterBar from "../components/FilterBar";
import InsightSection from "../components/InsightSection";
import PropertyShowcase from "../components/PropertyShowcase";
import AIBubble from "../components/AIBubble";

// ⛔ Ganti dari CityInsightSection ke CityInsightMalang
const CityInsightMalang = dynamic(() => import("../components/CityInsightMalang"), {
  ssr: false, // biar ga error hydration
});

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <CityHighlight />

      <main className="flex-1 overflow-y-auto space-y-16 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FilterBar />
        </div>

        {/* 🏙️ City Insight Malang */}
        <CityInsightMalang />

        <section className="bg-gray-50 rounded-2xl shadow-sm border border-[#e9d5ff] p-8">
          <InsightSection />
        </section>

        <section className="bg-gray-50 rounded-2xl shadow-sm border border-[#e9d5ff] p-8">
          <PropertyShowcase />
        </section>

        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold mb-3">
            Masih bingung mau tinggal di mana?
          </h2>
          <p className="text-gray-600 mb-6">
            Coba ngobrol dengan{" "}
            <span className="font-semibold text-[#8b5cf6]">YUKA</span> — asisten AI kamu di MerantauYuk.
          </p>
          <AIBubble />
        </div>
      </main>

      <footer
        className="mt-12 py-6 text-center text-sm text-gray-500 border-t"
        style={{ borderColor: "#e9d5ff" }}
      >
        Dibuat dengan 💜 oleh{" "}
        <span className="font-semibold text-[#8b5cf6]">MerantauYuk</span>
      </footer>
    </div>
  );
}
