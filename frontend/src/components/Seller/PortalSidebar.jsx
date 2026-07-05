import React from 'react';
import { LayoutDashboard, ShoppingBag, Utensils, BarChart3, Megaphone, Settings, HelpCircle, LogOut } from 'lucide-react';
import { PATH } from '../../path.js';
import SidebarLink from './SidebarLink';

const PortalSidebar = () => {
  const navItems = [
    { to: PATH.SELLER.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { to: PATH.SELLER.ORDERS, label: 'Orders', icon: ShoppingBag },
    { to: PATH.SELLER.MENU, label: 'Menu', icon: Utensils },
    { to: PATH.SELLER.ANALYTICS, label: 'Analytics', icon: BarChart3 },
    { to: PATH.SELLER.PROMOTIONS, label: 'Promotions', icon: Megaphone },
    { to: PATH.SELLER.SETTINGS, label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen bg-[#034752] flex flex-col justify-between sticky top-0 shrink-0 text-white select-none">
      <div className="p-6 space-y-8">
        
        {/* Crave24h Branding Logo Block from image_86ad87.png */}
        <div className="px-2 pt-2">
          <h1 className="text-2xl font-black tracking-tight text-white">Crave24h</h1>
          <span className="text-[10px] font-bold text-teal-200/50 uppercase tracking-widest block mt-0.5">
            Partner Portal
          </span>
        </div>

        {/* Dynamic Navigation Stack */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <SidebarLink key={item.to} to={item.to} label={item.label} icon={item.icon} />
          ))}
        </nav>
      </div>

      {/* Bottom Action Footer Row from image_86ad87.png */}
      <div className="p-6 space-y-0.5">
        <button
          type="button"
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300/80 hover:bg-white/5 hover:text-white transition-all cursor-pointer"
        >
          <HelpCircle size={18} />
          <span>Help</span>
        </button>
        
        <button
          type="button"
          onClick={() => {
            sessionStorage.clear();
            window.location.reload();
          }}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300/80 hover:bg-rose-500/10 hover:text-rose-300 transition-all cursor-pointer"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default PortalSidebar;