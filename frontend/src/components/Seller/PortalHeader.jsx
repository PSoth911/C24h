import React from 'react';
import { Bell } from 'lucide-react';

const PortalHeader = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-40">
      
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-bold text-slate-800">Big Apple Donuts</h2>
        <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 border border-teal-100">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
          Open
        </span>
      </div>

      <div className="flex items-center gap-4">

        <button type="button" className="text-gray-400 hover:text-gray-600 relative p-2 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
          <Bell size={18} className="text-gray-400" />
          <span className="w-2 h-2 bg-rose-500 rounded-full absolute top-1.5 right-1.5 border border-white" />
        </button>

        <div className="w-px h-6 bg-gray-200" />

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <span className="text-sm font-bold text-slate-800 block leading-none">Alex Manager</span>
            <span className="text-[9px] text-gray-400 font-extrabold uppercase tracking-wider block mt-1">
              Store Manager
            </span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
            alt="Alex Manager Profile Avatar" 
            className="w-9 h-9 rounded-full object-cover border border-gray-100 shadow-sm"
          />
        </div>

      </div>

    </header>
  );
};

export default PortalHeader;