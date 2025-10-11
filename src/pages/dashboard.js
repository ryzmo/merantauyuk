import DashboardSidebar from "./components/DashboardSidebar";
import DashboardHeader from "./components/DashboardHeader";
import OverviewCard from "./components/OverviewCard";
import ChartExpense from "./components/ChartExpense";
import ServiceList from "./components/ServiceList";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-brand-950 text-white">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="flex-1 p-6 space-y-8 overflow-y-auto">
          <h2 className="text-2xl font-bold">Selamat Datang, Andi 👋</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <OverviewCard title="Total Pengeluaran" value="Rp 2.450.000" desc="bulan ini" />
            <OverviewCard title="Status Kos" value="Kontrak aktif" desc="sampai 30 Des 2025" />
            <OverviewCard title="Laundry terakhir" value="2 hari lalu" desc="Rp 35.000" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ChartExpense />
            <ServiceList />
          </div>
        </main>
      </div>
    </div>
  );
}
