import { Bell, UserCircle } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 bg-brand-900/40 px-6 py-3">
      <h1 className="font-semibold text-lg">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="text-white/80" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-brand-400"></span>
        </button>
        <UserCircle className="text-white/80" size={28} />
      </div>
    </header>
  );
}
