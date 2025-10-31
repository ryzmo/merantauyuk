import { MapPin, Calendar, Filter, Search } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="w-full px-4 md:px-8 py-6 bg-white/80 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl mt-10 shadow-[0_4px_20px_rgba(139,92,246,0.15)] hover:shadow-[0_6px_25px_rgba(139,92,246,0.25)] transition-all duration-300">
  <form className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
    {/* Input Lokasi */}
    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl w-full md:flex-1 border border-gray-200 focus-within:border-[#8b5cf6] transition-all shadow-sm">
      <MapPin className="text-[#8b5cf6] w-5 h-5 flex-shrink-0" />
      <input
        type="text"
        placeholder="Cari kota tujuanmu..."
        className="bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none flex-1"
      />
    </div>

    {/* Tombol Cari */}
    <button
      type="submit"
      className="flex items-center justify-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] active:scale-95 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-md w-full md:w-auto"
    >
      <Search className="w-5 h-5" />
      <span>Cari Hunian</span>
    </button>
  </form>
</div>

  );
}
