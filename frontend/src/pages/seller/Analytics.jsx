import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const mockLineData = [
  { name: 'Mon', revenue: 12000 },
  { name: 'Tue', revenue: 15000 },
  { name: 'Wed', revenue: 14200 },
  { name: 'Thu', revenue: 18500 },
  { name: 'Fri', revenue: 22000 },
  { name: 'Sat', revenue: 24582 },
];

const mockBarData = [
  { hour: '9 AM', count: 20 },
  { hour: '12 PM', count: 85 },
  { hour: '3 PM', count: 40 },
  { hour: '6 PM', count: 95 },
  { hour: '9 PM', count: 60 },
];

const AnalyticsCard = ({ title, value, change, isPositive }) => (
  <div className="bg-white p-6 rounded-2xl border shadow-sm">
    <p className="text-sm font-medium text-gray-500">{title}</p>
    <div className="flex items-baseline gap-3 mt-2">
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      <span className={`text-xs font-bold flex items-center gap-0.5 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
      </span>
    </div>
  </div>
);

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Analytics Overview</h2>
        <span className="bg-teal-50 text-[#004D40] font-medium text-sm px-3 py-1.5 rounded-lg border border-teal-200">Today</span>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <AnalyticsCard title="Total Revenue" value="$24,582" change="+12.5%" isPositive={true} />
        <AnalyticsCard title="Total Orders" value="1,284" change="+8.2%" isPositive={true} />
        <AnalyticsCard title="Avg. Order Value" value="$19.14" change="-2.4%" isPositive={false} />
        <AnalyticsCard title="Store Rating" value="4.85" change="+0.1%" isPositive={true} />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 border rounded-2xl shadow-sm">
          <h4 className="font-bold text-gray-800 mb-4">Revenue Trend</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockLineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#004D40" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-1 bg-white p-6 border rounded-2xl shadow-sm flex flex-col justify-between">
          <h4 className="font-bold text-gray-800">Orders by Category</h4>
          <div className="flex justify-center my-4 relative">
             <div className="w-36 h-36 rounded-full border-[12px] border-teal-800 border-r-teal-200 flex items-center justify-center">
               <span className="text-2xl font-bold text-gray-800">1,284</span>
             </div>
          </div>
          <div className="space-y-2 text-xs font-medium text-gray-600">
            <div className="flex justify-between"><span>🍩 Bakery</span><span>45%</span></div>
            <div className="flex justify-between"><span>🥤 Beverages</span><span>30%</span></div>
            <div className="flex justify-between"><span>📦 Others</span><span>25%</span></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 border rounded-2xl shadow-sm">
          <h4 className="font-bold text-gray-800 mb-2">Peak Order Hours</h4>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockBarData}>
                <XAxis dataKey="hour" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#004D40" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-500 bg-teal-50 p-3 rounded-xl mt-4 text-[#004D40] font-medium">
            💡 Your busiest hours are between 12:00 PM - 2:00 PM. Consider increasing staff capacity.
          </p>
        </div>

        <div className="col-span-1 bg-white p-6 border rounded-2xl shadow-sm space-y-4">
          <h4 className="font-bold text-gray-800">Customer Insights</h4>
          <div className="space-y-3">
             <div>
               <div className="flex justify-between text-xs font-bold text-gray-600 mb-1"><span>Quality & Taste</span><span>4.9/5</span></div>
               <div className="w-full bg-gray-100 h-2 rounded-full"><div className="bg-[#004D40] h-full rounded-full" style={{width: '95%'}}></div></div>
             </div>
             <div>
               <div className="flex justify-between text-xs font-bold text-gray-600 mb-1"><span>Delivery Speed</span><span>4.2/5</span></div>
               <div className="w-full bg-gray-100 h-2 rounded-full"><div className="bg-[#004D40] h-full rounded-full" style={{width: '84%'}}></div></div>
             </div>
             <div>
               <div className="flex justify-between text-xs font-bold text-gray-600 mb-1"><span>Packaging</span><span>4.7/5</span></div>
               <div className="w-full bg-gray-100 h-2 rounded-full"><div className="bg-[#004D40] h-full rounded-full" style={{width: '92%'}}></div></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
