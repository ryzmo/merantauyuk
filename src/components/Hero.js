import { Badge, Pill } from "./UI";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Pill>⚡ Solusi end-to-end perantau</Pill>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight">
  Merantau jadi{" "}
  <span
    className="inline-block"
    style={{
      backgroundImage: "linear-gradient(to right, #d946ef, #7c1fbf)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    aman
  </span>
  ,{" "}
  <span
    className="inline-block"
    style={{
      backgroundImage: "linear-gradient(to right, #d946ef, #7c1fbf)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    murah
  </span>
  , dan{" "}
  <span
    className="inline-block"
    style={{
      backgroundImage: "linear-gradient(to right, #d946ef, #7c1fbf)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    terarah
  </span>
  .
</h1>


            <p className="mt-4 text-white/80 max-w-xl">
              Pendamping digital untuk riset kota, hunian, kerja, komunitas, sampai adaptasi setelah pindah.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-3 font-semibold shadow-glow transition hover:translate-y-[-1px]"
              >
                Coba Gratis
              </a>
              <a
                href="#fitur"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white/90"
              >
                Lihat Fitur
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/70">
              <Badge>✅ Riset & Perencanaan</Badge>
              <Badge>🏠 Hunian</Badge>
              <Badge>💼 Peluang Kerja</Badge>
              <Badge>👥 Komunitas</Badge>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-brand-400/20 to-brand-600/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
              <div className="rounded-xl bg-brand-900 p-4">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-20 rounded bg-white/15" />
                  <div className="h-3 w-8 rounded bg-white/15" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {["Biaya hidup", "Area aman", "Kost/kontrak", "Lowongan", "Transport", "Komunitas"].map((t) => (
                    <div key={t} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                      <p className="text-white/80">{t}</p>
                      <div className="mt-3 h-2 w-2/3 rounded bg-gradient-to-r from-brand-400 to-brand-600" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
