import { Section, Card } from "./UI";

export default function SectionCTA() {
  return (
    <Section id="cta" title="Gabung daftar tunggu">
      <Card className="text-center">
        <p className="mb-4 text-white/80">Dapatkan akses awal & diskon early adopter.</p>
        <form className="mx-auto mt-6 flex max-w-md gap-3">
          <input
            type="email"
            required
            placeholder="Email kamu"
            className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand-500/60"
          />
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-6 py-3 font-semibold shadow-glow"
          >
            Daftar
          </button>
        </form>
      </Card>
    </Section>
  );
}
