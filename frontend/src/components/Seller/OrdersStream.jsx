import React from 'react';
import { Clock } from 'lucide-react';

const OrdersStream = () => {
  const incomingOrders = [
    { id: "#8831", items: "2x Classic Glazed, 1x Cold Brew", price: "$12.50", status: "In Kitchen", badge: "bg-amber-100 text-amber-800" },
    { id: "#8830", items: "1x Maple Bacon, 1x Matcha Latte", price: "$9.75", status: "Ready", badge: "bg-teal-100 text-teal-800" },
    { id: "#8829", items: "6x Party Assortment Box", price: "$24.00", status: "In Kitchen", badge: "bg-amber-100 text-amber-800" }
  ];

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-sm font-bold text-gray-800">Live Kitchen Tracker</h4>
          <p className="text-xs text-gray-400 mt-0.5">Earliest incoming routing priority queues.</p>
        </div>
        <span className="text-xs font-bold text-[#004D40] bg-teal-50 px-2.5 py-1 rounded-lg flex items-center gap-1.5 animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-[#004D40]"></span> Live
        </span>
      </div>

      <div className="divide-y divide-gray-100">
        {incomingOrders.map((order, index) => (
          <div key={index} className="py-3.5 flex justify-between items-center first:pt-0 last:pb-0">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm text-gray-800">{order.id}</span>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase ${order.badge}`}>{order.status}</span>
              </div>
              <p className="text-xs text-gray-500 font-medium">{order.items}</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-gray-800 block">{order.price}</span>
              <span className="text-[10px] text-gray-400 font-medium inline-flex items-center gap-0.5"><Clock size={10}/> 4m ago</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersStream;