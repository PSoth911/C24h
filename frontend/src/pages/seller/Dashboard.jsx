import { Bell, Search } from "lucide-react";
import { useState } from "react";
import DashboardMetrics from '../../components/Seller/DashboardMetrics';
import RevenueChart from '../../components/Seller/RevenueChart';
import OrdersStream from '../../components/Seller/OrdersStream';

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <main className="flex-1">
        <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/70 border-b border-white/40">
          <div className="h-20 flex items-center justify-between px-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Command Center</h1>
              <p className="text-sm text-slate-500">Glazed & Confused Donuts — Hub Live Terminal Monitor</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
                <input
                  placeholder="Search orders..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-72 pl-10 pr-4 py-2 rounded-2xl bg-white/80 border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button className="w-10 h-10 rounded-2xl bg-white shadow-sm border flex items-center justify-center hover:scale-105 transition">
                <Bell size={18} />
              </button>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-teal-400 text-white flex items-center justify-center font-bold shadow">
                S
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8 max-w-7xl mx-auto">
          <DashboardMetrics />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2 bg-white/70 backdrop-blur-xl rounded-3xl shadow-sm border border-white/40 p-6">
              <RevenueChart />
            </div>
            <div className="lg:col-span-1 bg-white/70 backdrop-blur-xl rounded-3xl shadow-sm border border-white/40 p-6">
              <OrdersStream />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;