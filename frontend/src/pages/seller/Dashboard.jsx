import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { ShoppingBag, DollarSign, Clock, Star, ArrowUpRight, ChevronRight } from 'lucide-react';

const revenueTrendData = [
  { name: '10am', amount: 400 },
  { name: '12pm', amount: 950 },
  { name: '2pm', amount: 720 },
  { name: '4pm', amount: 1200 },
  { name: '6pm', amount: 1850 },
  { name: '8pm', amount: 2442 },
];


const initialOrders = [
  { id: '#ORD-8821', time: '4m ago', customer: 'Sarah Jenkins', status: 'New' },
  { id: '#ORD-8825', time: '12m ago', customer: 'David Miller', status: 'New' },
  { id: '#ORD-8819', time: '12:30', customer: 'Markus Thompson', status: 'Preparing' },
  { id: '#ORD-8818', time: '12:15', customer: 'Jessica Alba', status: 'Preparing' },
  { id: '#ORD-8815', time: '4m ago', customer: 'Eliza Vance', status: 'New' },
  { id: '#ORD-8812', time: '6m ago', customer: 'Tommy Lee', status: 'New' },
  { id: '#ORD-8810', time: '3m ago', customer: 'Nina Simone', status: 'new' },
];

const StatCard = ({ title, value, subtitle, icon, valueColor = "text-gray-800" }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{title}</p>
        <h3 className={`text-3xl font-black mt-1 tracking-tight ${valueColor}`}>{value}</h3>
      </div>
      <div className="p-3 bg-gray-50 text-[#004D40] rounded-xl">{icon}</div>
    </div>
    <div className="flex items-center gap-2 mt-2">
      <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
         <div className="h-full bg-teal-600 rounded-full w-2/3"></div>
      </div>
      {subtitle && (
        <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
          <ArrowUpRight size={12} /> {subtitle}
        </span>
      )}
    </div>
  </div>
);

const OrderCard = ({ orderId, time, customer, status, onAction }) => (
  <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm mb-3 hover:border-gray-200 transition-all">
    <div className="flex justify-between items-center mb-2">
      <span className="font-bold text-sm text-gray-900">{orderId}</span>
      <span className={`text-xs font-semibold ${status === 'Ready' ? 'text-green-600' : 'text-gray-400'}`}>{time}</span>
    </div>
    <p className="text-sm font-medium text-gray-600 mb-4">{customer}</p>
    
    <div className="flex justify-end">
      {status === 'New' && (
        <button 
          onClick={onAction}
          className="w-full py-2 bg-teal-50 text-[#004D40] text-xs font-bold rounded-lg hover:bg-[#004D40] hover:text-white transition-colors flex items-center justify-center gap-1"
        >
          Accept Order <ChevronRight size={14} />
        </button>
      )}
      {status === 'Preparing' && (
        <button 
          onClick={onAction}
          className="w-full py-2 bg-[#004D40] text-white text-xs font-bold rounded-lg hover:bg-teal-900 transition-colors"
        >
          Mark as Ready
        </button>
      )}
    </div>
  </div>
);

const Dashboard = () => {
  const [orders, setOrders] = useState(initialOrders);

  const moveOrderProgress = (orderId, currentStatus) => {
    const nextStatusMap = { 'New': 'Preparing', 'Preparing': 'Ready' };
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: nextStatusMap[currentStatus] } : order
      )
    );
  };

  const lanes = [
    { title: 'New', dotColor: 'bg-[#004D40]', bgBadge: 'bg-teal-50 text-teal-800' },
    { title: 'Preparing', dotColor: 'bg-amber-500', bgBadge: 'bg-amber-50 text-amber-800' },
    { title: 'Ready', dotColor: 'bg-green-500', bgBadge: 'bg-green-50 text-green-800' }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Orders" value={orders.length + 124} icon={<ShoppingBag size={20} />} subtitle="12 new" />
        <StatCard title="Net Revenue" value="$2,442.50" valueColor="text-[#004D40]" icon={<DollarSign size={20} />} subtitle="Live" />
        <StatCard title="Avg Preparation" value="8.4 min" icon={<Clock size={20} />} subtitle="Optimal" />
        <StatCard title="Store Rating" value="4.8" icon={<Star size={20} />} subtitle="Top 5%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {lanes.map((lane) => {
            const laneOrders = orders.filter(o => o.status === lane.title);
            return (
              <div key={lane.title} className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-4 px-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${lane.dotColor}`}></span>
                  <h4 className="font-bold text-gray-800 text-sm">{lane.title}</h4>
                  <span className={`ml-auto text-xs py-0.5 px-2 rounded-full font-bold ${lane.bgBadge}`}>
                    {laneOrders.length}
                  </span>
                </div>
                
                <div className="space-y-1">
                  {laneOrders.map((order) => (
                    <OrderCard 
                      key={order.id}
                      orderId={order.id}
                      time={order.time}
                      customer={order.customer}
                      status={order.status}
                      onAction={() => moveOrderProgress(order.id, order.status)}
                    />
                  ))}
                  {laneOrders.length === 0 && (
                    <div className="text-center py-8 text-xs font-medium text-gray-400 border border-dashed rounded-xl bg-white">
                      No orders in this stage
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1 bg-gradient-to-b from-teal-50/30 to-transparent rounded-2xl p-6 border border-teal-100/60 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-[#004D40] text-sm tracking-tight">Revenue Insights</h4>
              <span className="text-[10px] bg-white text-teal-800 border border-teal-100 px-2 py-0.5 rounded font-bold uppercase">Real-Time</span>
            </div>

            <div className="h-40 w-full mb-4 bg-white rounded-xl p-2 border border-gray-100 shadow-inner overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueTrendData} margin={{ top: 10, right: 5, left: -25, bottom: 0 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 9, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ fontSize: '11px', borderRadius: '8px' }} />
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#004D40" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#004D40" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="amount" stroke="#004D40" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex justify-between items-center shadow-sm">
              <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">⚡ Peak Demand Hour</span>
              <span className="text-sm font-bold text-[#004D40]">6:00 PM</span>
            </div>
            <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex justify-between items-center shadow-sm">
              <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">📈 Target Conversion</span>
              <span className="text-sm font-bold text-gray-800">94.2%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;