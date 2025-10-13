export default function InsightSection() {
  const data = [
    { label: "Survei kos jarak jauh", value: "Lewat mahasiswa lokal terpercaya" },
    { label: "Transaksi aman", value: "Dilindungi sistem escrow" },
    { label: "Layanan pendukung", value: "Laundry, cleaning, & marketplace" },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-brand-300">
        Sekilas Tentang Layanan Kami
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-brand-900/60 p-6 rounded-2xl border border-brand-800/30 hover:border-brand-400/60 transition-all shadow-md"
          >
            <p className="text-gray-400 text-sm">{item.label}</p>
            <p className="text-lg font-semibold mt-2 text-brand-300">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
