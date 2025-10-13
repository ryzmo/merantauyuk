export default function PropertyShowcase() {
  const showcase = [
    { area: "Alam Sutera", desc: "Hunian modern dan akses kampus mudah", img: "/img/alam-sutera.jpg" },
    { area: "Karawaci", desc: "Dekat universitas dan pusat bisnis", img: "/img/karawaci.jpg" },
    { area: "BSD", desc: "Lingkungan startup & teknologi", img: "/img/bsd.jpg" },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-brand-300">Area Populer</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {showcase.map((item, i) => (
          <div
            key={i}
            className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-brand-800/50 transition-all"
          >
            <img
              src={item.img}
              alt={item.area}
              className="w-full h-56 object-cover transition-transform group-hover:scale-105 duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold text-brand-400">{item.area}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
