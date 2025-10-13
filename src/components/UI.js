export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-24 left-1/2 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-700/50 via-brand-500/40 to-brand-700/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight drop-shadow">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-white/80 max-w-3xl">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-white/5 p-6 sm:p-8 shadow-xl ring-1 ring-white/10 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/15">
      {children}
    </span>
  );
}

export function Pill({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-4 py-2 text-white shadow-lg">
      {children}
    </div>
  );
}
