export default function OverviewCard({ title, value, desc }) {
  return (
    <div className="rounded-xl bg-white/5 p-6 border border-white/10 shadow-lg hover:shadow-glow transition">
      <p className="text-sm text-white/60">{title}</p>
      <h3 className="text-2xl font-semibold mt-2 text-white">{value}</h3>
      <p className="text-xs text-white/50 mt-1">{desc}</p>
    </div>
  );
}
