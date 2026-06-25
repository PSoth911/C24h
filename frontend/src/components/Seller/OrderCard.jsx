import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';

const OrderCard = ({ order, onStatusChange }) => {
  const statusConfigs = {
    pending: { badge: 'bg-amber-100 text-amber-800 border-amber-200', btnText: 'Accept Order', nextStatus: 'preparing', btnClass: 'bg-amber-600 hover:bg-amber-700' },
    preparing: { badge: 'bg-blue-100 text-blue-800 border-blue-200', btnText: 'Mark Ready', nextStatus: 'ready', btnClass: 'bg-blue-600 hover:bg-blue-700' },
    ready: { badge: 'bg-emerald-100 text-emerald-800 border-emerald-200', btnText: 'Complete / Handover', nextStatus: 'completed', btnClass: 'bg-emerald-600 hover:bg-emerald-700' }
  };

  const currentConfig = statusConfigs[order.status];

  return (
    <div className="bg-white border border-gray-200/90 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between hover:border-gray-300 transition-all">
      <div className="p-5 space-y-4">
        
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-mono font-black text-base text-gray-800">{order.id}</h4>
            <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
              <Clock size={12} /> {order.timeAgo}
            </div>
          </div>
          <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold border uppercase tracking-wider ${currentConfig?.badge || 'bg-gray-100 text-gray-600'}`}>
            {order.status}
          </span>
        </div>

        <div className="text-xs text-gray-600 bg-gray-50 p-2.5 rounded-xl flex items-center gap-2 font-medium">
          <User size={14} className="text-gray-400" />
          <span>{order.customer} • <span className="text-gray-400">{order.type}</span></span>
        </div>

        <div className="space-y-1.5 pt-1">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span className="text-gray-600 font-medium"><span className="font-bold text-[#004D40]">{item.qty}x</span> {item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50/50 px-5 py-3.5 border-t border-gray-100 flex items-center justify-between gap-4 mt-auto">
        <div>
          <span className="text-[10px] text-gray-400 block font-bold uppercase tracking-wider">Total Value</span>
          <span className="text-base font-black text-gray-800">${order.total.toFixed(2)}</span>
        </div>

        {currentConfig && (
          <button
            onClick={() => onStatusChange(order.id, currentConfig.nextStatus)}
            className={`text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer ${currentConfig.btnClass}`}
          >
            {currentConfig.btnText}
            <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;