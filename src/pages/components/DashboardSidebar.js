import Link from "next/link";
import { useRouter } from "next/router";
import { Home, Building2, Wallet, Users, ShoppingBag } from "lucide-react";

const menu = [
  { label: "Beranda", href: "/dashboard", icon: <Home size={18} /> },
  { label: "Kos Saya", href: "/dashboard/kos", icon: <Building2 size={18} /> },
  { label: "Keuangan", href: "/dashboard/keuangan", icon: <Wallet size={18} /> },
  { label: "Komunitas", href: "/dashboard/komunitas", icon: <Users size={18} /> },
  { label: "Marketplace", href: "/dashboard/market", icon: <ShoppingBag size={18} /> },
];

export default function DashboardSidebar() {
  const router = useRouter();
  return (
    <aside className="w-64 bg-brand-900/70 border-r border-white/10 p-5 flex flex-col min-h-screen">
      <div className="flex items-center gap-2 mb-8">
        <img src="/logo.png" alt="MerantauYuk Logo" className="h-8 w-8" />
        <span className="font-bold text-white text-lg">MerantauYuk</span>
      </div>

      <nav className="space-y-2 flex-1">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              router.pathname === item.href
                ? "bg-gradient-to-r from-brand-400 to-brand-600 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
