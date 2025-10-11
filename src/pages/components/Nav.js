export default function Nav() {
  const items = [
    ["About", "tentang"],
    ["Feature", "fitur"],
    ["FAQS", "faqs"],
    ["Roadmap", "roadmap"],
    ["Contact Us", "contact-us"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex items-center">
  <img
    src="/logo.png"
    alt="MerantauYuk Logo"
    className="h-13 w-auto object-contain"
  />
</div>
        </a>
        <div className="hidden md:flex items-center gap-6">
  {items.map(([label, id]) => (
    <a
      key={id}
      href={`#${id}`}
      className="text-sm text-white/80 hover:text-white transition-colors duration-200"
    >
      {label}
    </a>
  ))}

  <a
    href="#cta"
    className="rounded-full bg-gradient-to-r from-brand-400 to-brand-600 text-sm font-semibold text-white px-5 py-2 shadow-md hover:shadow-glow transition-all duration-300 hover:-translate-y-[1px]"
  >
    Mulai Sekarang
  </a>
</div>

      </nav>
    </header>
  );
}
