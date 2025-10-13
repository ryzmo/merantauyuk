import { MapPin, Calendar, Filter, Search } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="w-full px-4 md:px-8 py-4 bg-brand-900/70 backdrop-blur-md border border-brand-800/30 rounded-2xl mt-6 shadow-md">
      <form className="flex flex-col md:flex-row items-center gap-4">
        {/* Lokasi */}
        <div className="flex items-center gap-2 bg-brand-800/50 px-4 py-2 rounded-xl w-full md:w-1/3 border border-brand-700/50 focus-within:border-brand-400 transition-all">
          <MapPin className="text-brand-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Cari kota tujuanmu..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none flex-1"
          />
        </div>

        {/* Waktu sewa */}
        <div className="flex items-center gap-2 bg-brand-800/50 px-4 py-2 rounded-xl w-full md:w-1/4 border border-brand-700/50 focus-within:border-brand-400 transition-all">
          <Calendar className="text-brand-400 w-5 h-5" />
          <input
            type="date"
            className="bg-transparent text-gray-300 focus:outline-none flex-1 cursor-pointer"
          />
        </div>

        {/* Tipe hunian */}
        <select className="bg-brand-800/50 px-4 py-2 rounded-xl text-white border border-brand-700/50 focus:border-brand-400 w-full md:w-1/4 cursor-pointer transition-all">
          <option value="">Semua tipe</option>
          <option value="kos">Kos</option>
          <option value="coliving">Coliving</option>
          <option value="apartment">Apartemen</option>
        </select>

        {/* Tombol Cari */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold px-6 py-2 rounded-xl transition-all w-full md:w-auto"
        >
          <Search className="w-5 h-5" />
          <span>Cari Hunian</span>
        </button>

        {/* Filter Lanjut */}
        <button
          type="button"
          className="hidden md:flex items-center justify-center gap-2 text-brand-300 hover:text-brand-400 transition-all"
        >
          <Filter className="w-5 h-5" />
          <span>Filter Lanjut</span>
        </button>
      </form>
    </div>
  );
}
