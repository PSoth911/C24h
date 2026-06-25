import React from 'react';
import { TrendingUp, ShoppingBag, Coins, Users } from 'lucide-react';

const AnalyticsMetrics = () => {
  const stats = [
    { title: "Monthly Gross Revenue", value: "$42,850.00", change: "▲ +18.2%", color: "text-emerald-600", icon: Coins, bg: "bg-emerald-50 text-emerald-700" },
    { title: "Volume Processed", value: "1,840 Orders", change: "▲ +4.6%", color: "text-emerald-600", icon: ShoppingBag, bg: "bg-blue-50 text-blue-600" },
    { title: "Average Basket Value", value: "$23.28", change: "▼ -1.1%", color: "text-rose-600", icon: TrendingUp, bg: "bg-amber-50 text-amber-700" },
    { title: "Retention Rate", value: "72.4%", change: "▲ +5.3%", color: "text-emerald-600", icon: Users, bg: "bg-teal-50 text-[#004D40]" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="bg-white border border-gray-200/80 p-5 rounded-2xl shadow-sm space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.title}</span>
              <div className={`p-2 rounded-lg ${stat.bg}`}><Icon size={16} /></div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-800">{stat.value}</h3>
              <span className={`text-xs font-bold ${stat.color} block mt-0.5`}>{stat.change} <span className="text-gray-400 font-normal">vs last month</span></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsMetrics;