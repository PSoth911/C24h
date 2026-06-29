import { useEffect, useState } from "react";
import { DollarSign, Package, Star, TrendingUp } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

import DeliveryNav from "../../components/delivery/DeliveryNav";
import DeliverySideNav from "../../components/delivery/DeliverySideNav";

const BASE = "http://localhost:5000/api";

export default function DeliveryEarning() {
  const user     = JSON.parse(sessionStorage.getItem("user"));
  const driverId = user?.Driver?.driver_id ?? user?.driver_id;

  const [stats,   setStats]   = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!driverId) return;

    Promise.all([
      fetch(`${BASE}/deliver/stats/${driverId}`).then((r) => r.json()),
      fetch(`${BASE}/deliver/history/${driverId}`).then((r) => r.json()),
    ]).then(([s, h]) => {
      if (s.success) setStats(s.data);
      if (h.success) setHistory(h.data);
    }).finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <DeliveryNav />

      <div className="flex flex-1">
        <DeliverySideNav />

        <main className="flex-1 p-8 space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Earnings</h1>
            <p className="text-sm text-slate-500">Your performance and payout overview</p>
          </div>

          {loading ? (
            <p className="text-slate-400 text-sm animate-pulse">Loading...</p>
          ) : (
            <>
              {/* Top stat cards */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <StatCard
                  title="Total Earned"
                  value={`$${parseFloat(stats?.totalEarnings ?? 0).toFixed(2)}`}
                  icon={<DollarSign size={20} />}
                  color="from-teal-600 to-teal-400"
                />
                <StatCard
                  title="Deliveries"
                  value={stats?.delivered ?? 0}
                  icon={<Package size={20} />}
                  color="from-blue-500 to-blue-400"
                />
                <StatCard
                  title="Completion Rate"
                  value={
                    stats?.total
                      ? `${Math.round((stats.delivered / stats.total) * 100)}%`
                      : "—"
                  }
                  icon={<TrendingUp size={20} />}
                  color="from-green-500 to-green-400"
                />
                <StatCard
                  title="Avg per Delivery"
                  value={
                    stats?.delivered
                      ? `$${(stats.totalEarnings / stats.delivered).toFixed(2)}`
                      : "—"
                  }
                  icon={<Star size={20} />}
                  color="from-orange-500 to-orange-400"
                />
              </div>

              {/* Chart */}
              <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-sm p-6">
                <h2 className="font-semibold text-lg text-slate-800 mb-6">Weekly Earnings</h2>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={stats?.weekly ?? []} barSize={28}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                    <Tooltip
                      formatter={(v) => [`$${v}`, "Earned"]}
                      contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
                    />
                    <Bar dataKey="earning" fill="#0d9488" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Delivery History */}
              <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-sm">
                <div className="flex items-center justify-between p-6 border-b border-white/30">
                  <h2 className="font-semibold text-lg text-slate-800">Delivery History</h2>
                  <span className="text-sm text-slate-500">{history.length} deliveries</span>
                </div>

                <div className="p-6 space-y-3">
                  {history.length === 0 ? (
                    <p className="text-center text-slate-400 py-10 text-sm">No completed deliveries yet.</p>
                  ) : (
                    history.map((d) => (
                      <div
                        key={d.delivery_id}
                        className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex justify-between items-center hover:shadow-md hover:-translate-y-0.5 transition"
                      >
                        <div>
                          <p className="text-xs text-slate-400">#{d.delivery_id}</p>
                          <h3 className="font-semibold text-slate-800">
                            {d.Order?.Restaurant?.restaurant_name ?? "Restaurant"}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {d.updatedAt
                              ? new Date(d.updatedAt).toLocaleString("en-US", {
                                  month: "short", day: "numeric",
                                  hour: "2-digit", minute: "2-digit",
                                })
                              : "—"}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                            Delivered
                          </span>
                          <p className="font-bold text-lg text-slate-800 mt-2">
                            ${parseFloat(d.delivery_fee ?? 0).toFixed(2)}
                          </p>
                          <p className="text-xs text-slate-400">Earned</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-sm hover:scale-[1.02] transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <h2 className="text-2xl font-bold mt-1 text-slate-800">{value}</h2>
        </div>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}