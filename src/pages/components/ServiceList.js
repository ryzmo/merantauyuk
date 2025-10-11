export default function ServiceList() {
  const services = [
    { name: "Laundry Express", status: "Aktif" },
    { name: "Jasa Bersih Kos", status: "Belum dipesan" },
    { name: "Marketplace Barang Bekas", status: "3 item dijual" },
  ];

  return (
    <div className="rounded-xl bg-white/5 p-6 border border-white/10 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Layanan Aktif</h3>
      <ul className="space-y-3">
        {services.map((s, i) => (
          <li
            key={i}
            className="flex justify-between items-center text-sm text-white/80 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition"
          >
            <span>{s.name}</span>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                s.status === "Aktif"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-white/10 text-white/60"
              }`}
            >
              {s.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
