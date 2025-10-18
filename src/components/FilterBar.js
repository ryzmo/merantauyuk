import { MapPin, Calendar, Filter, Search } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="w-full px-4 md:px-8 py-6 bg-white/70 backdrop-blur-md border border-[#8b5cf6]/20 rounded-2xl mt-10 shadow-[0_4px_20px_rgba(139,92,246,0.15)] transition-all hover:shadow-[0_6px_25px_rgba(139,92,246,0.25)]">
      <form className="flex flex-col md:flex-row items-center gap-4">
        {/* Lokasi */}
        <div className="flex items-center gap-2 bg-white/60 px-4 py-3 rounded-xl w-full md:w-1/3 border border-[#8b5cf6]/30 focus-within:border-[#8b5cf6] transition-all shadow-sm">
          <MapPin className="text-[#8b5cf6] w-5 h-5" />
          <input
            type="text"
            placeholder="Cari kota tujuanmu..."
            className="bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none flex-1"
          />
        </div>

        {/* Waktu sewa */}
        <div className="flex items-center gap-2 bg-white/60 px-4 py-3 rounded-xl w-full md:w-1/4 border border-[#8b5cf6]/30 focus-within:border-[#8b5cf6] transition-all shadow-sm">
          <Calendar className="text-[#8b5cf6] w-5 h-5" />
          <input
            type="date"
            className="bg-transparent text-gray-600 focus:outline-none flex-1 cursor-pointer"
          />
        </div>

        {/* Tipe hunian */}
        <select className="bg-white/60 px-4 py-3 rounded-xl text-gray-700 border border-[#8b5cf6]/30 focus:border-[#8b5cf6] w-full md:w-1/4 cursor-pointer transition-all shadow-sm">
          <option value="">Semua tipe</option>
          <option value="kos">Kos</option>
          <option value="coliving">Coliving</option>
          <option value="apartment">Apartemen</option>
        </select>

        {/* Tombol Cari */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md w-full md:w-auto"
        >
          <Search className="w-5 h-5" />
          <span>Cari Hunian</span>
        </button>

        {/* Filter Lanjut */}
        <button
          type="button"
          className="hidden md:flex items-center justify-center gap-2 text-[#8b5cf6] hover:text-[#7c3aed] transition-all font-medium"
        >
          <Filter className="w-5 h-5" />
          <span>Filter Lanjut</span>
        </button>
      </form>
    </div>
  );
}
