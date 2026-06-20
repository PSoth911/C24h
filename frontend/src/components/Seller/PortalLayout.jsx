import React, { useState, useRef, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, Utensils, BarChart3, Megaphone, 
  Settings, HelpCircle, LogOut, AlertTriangle, X, MessageSquare, 
  Send, CheckCircle2, ShieldQuestion, FileText, ChevronRight, User, Store, Bell
} from 'lucide-react';
import { PATHS } from '../../path.js';
const Sidebar = ({ onOpenSupport, onOpenLogout }) => {
  const navItems = [
    { name: 'Dashboard', path: PATHS.SELLER.DASHBOARD, icon: <LayoutDashboard size={20} /> },
    { name: 'Orders', path: PATHS.SELLER.ORDERS, icon: <ShoppingBag size={20} /> },
    { name: 'Menu', path: PATHS.SELLER.MENU, icon: <Utensils size={20} /> },
    { name: 'Analytics', path: PATHS.SELLER.ANALYTICS, icon: <BarChart3 size={20} /> },
    { name: 'Promotions', path: PATHS.SELLER.PROMOTIONS, icon: <Megaphone size={20} /> },
    { name: 'Settings', path: PATHS.SELLER.SETTINGS, icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-64 bg-[#004D40] text-white flex flex-col h-screen fixed left-0 top-0 z-20 shadow-xl">
      {/* Brand Header */}
      <div className="p-6 text-2xl font-black flex items-center gap-2 tracking-tight border-b border-teal-800/40">
        <span>🍴 Crave24h</span>
        <span className="text-[10px] font-bold text-teal-300 mt-1 uppercase tracking-widest bg-teal-900/60 px-2 py-0.5 rounded-md">Partner</span>
      </div>
      
      {/* Navigation Deck */}
      <nav className="flex-1 mt-6 px-4 space-y-1.5">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-semibold text-sm tracking-wide ${
                isActive 
                  ? 'bg-[#00332A] text-white shadow-md shadow-black/10 border-l-4 border-teal-400 pl-3' 
                  : 'text-teal-100/80 hover:bg-[#003d33] hover:text-white'
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Footer Utility Actions */}
      <div className="p-4 border-t border-teal-800/40 space-y-1 text-sm font-bold text-teal-100/70">
        <button 
          onClick={onOpenSupport}
          className="flex items-center gap-3 px-4 py-2.5 hover:text-white hover:bg-[#003d33] rounded-xl w-full transition-all cursor-pointer text-left"
        >
          <HelpCircle size={18} /> Support Desk
        </button>
        <button 
          onClick={onOpenLogout}
          className="flex items-center gap-3 px-4 py-2.5 text-rose-300 hover:text-rose-100 hover:bg-rose-950/30 rounded-xl w-full transition-all cursor-pointer text-left group"
        >
          <LogOut size={18} className="group-hover:translate-x-0.5 transition-transform" /> Sign Out Portal
        </button>
      </div>
    </div>
  );
};

const Header = ({ onOpenLogout }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-black text-gray-800 tracking-tight">Big Apple Donuts</h1>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold flex items-center gap-1.5 border border-emerald-100">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Terminal Open
        </span>
      </div>

      <div className="flex items-center gap-4">

        <div className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
          <Bell size={20} />
          <div className="w-2 h-2 rounded-full bg-rose-500 absolute top-2 right-2 ring-2 ring-white"></div>
        </div> 

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 border-l pl-4 py-1 hover:opacity-80 transition-opacity cursor-pointer text-left focus:outline-none"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-800 leading-none">Alex Manager</p>
              <p className="text-[10px] font-semibold text-gray-400 mt-0.5">Master Administrator</p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-gray-100 overflow-hidden border border-gray-200 shadow-sm">
              <img src="https://i.pravatar.cc/150?img=11" alt="User profile" className="object-cover w-full h-full" />
            </div>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-30 animate-in fade-in slide-in-from-top-2 duration-150 text-gray-700">
              <div className="px-4 py-2.5 border-b border-gray-50 sm:hidden">
                <p className="text-sm font-bold text-gray-800">Alex Manager</p>
                <p className="text-xs text-gray-400">Master Administrator</p>
              </div>
              
              <button 
                onClick={() => { setShowDropdown(false); navigate(PATHS.SELLER.SETTINGS); }}
                className="w-full px-4 py-2 text-sm font-semibold flex items-center gap-2.5 hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-left"
              >
                <User size={16} className="text-gray-400" /> Account Settings
              </button>
              
              <button 
                onClick={() => { setShowDropdown(false); navigate(PATHS.SELLER.SETTINGS); }}
                className="w-full px-4 py-2 text-sm font-semibold flex items-center gap-2.5 hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer text-left"
              >
                <Store size={16} className="text-gray-400" /> Store Profile
              </button>

              <div className="my-1 border-t border-gray-100"></div>

              <button 
                onClick={() => { setShowDropdown(false); onOpenLogout(); }}
                className="w-full px-4 py-2 text-sm font-bold flex items-center gap-2.5 text-rose-600 hover:bg-rose-50/50 transition-colors cursor-pointer text-left"
              >
                <LogOut size={16} /> Sign Out Details
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const PortalLayout = () => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [supportSubmitted, setSupportSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [supportForm, setSupportForm] = useState({
    topic: 'Orders & Fulfillment',
    message: ''
  });

  const handleConfirmLogout = () => {
    setShowLogoutConfirm(false);
    navigate(PATHS.SELLER.LOGIN); 
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSupportSubmitted(true);
    }, 1200);
  };

  const closeSupportModal = () => {
    setShowSupportModal(false);
    setTimeout(() => {
      setSupportSubmitted(false);
      setSupportForm({ topic: 'Orders & Fulfillment', message: '' });
    }, 200);
  };

  return (
    <div className="flex bg-[#F9FAFB] min-h-screen font-sans antialiased selection:bg-[#004D40] selection:text-white">

      <Sidebar 
        onOpenSupport={() => setShowSupportModal(true)} 
        onOpenLogout={() => setShowLogoutConfirm(true)} 
      />

      <div className="ml-64 flex-1 flex flex-col min-w-0">
        <Header onOpenLogout={() => setShowLogoutConfirm(true)} />
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {showSupportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row h-[500px] animate-in zoom-in-95 duration-150 text-gray-800">

            <div className="bg-slate-50 md:w-5/12 p-6 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#004D40] font-black text-xs uppercase tracking-wider">
                  <ShieldQuestion size={16} /> Knowledge Base
                </div>
                <h4 className="text-lg font-black text-gray-900 tracking-tight leading-tight">Common Solutions</h4>
                <div className="space-y-2.5 text-xs font-semibold text-gray-600">
                  <div className="flex items-center justify-between p-2.5 bg-white border border-gray-200/60 rounded-xl hover:border-teal-600 transition-colors group cursor-pointer">
                    <span className="flex items-center gap-2"><FileText size={14} className="text-gray-400" /> Terminal hardware drop</span>
                    <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-white border border-gray-200/60 rounded-xl hover:border-teal-600 transition-colors group cursor-pointer">
                    <span className="flex items-center gap-2"><FileText size={14} className="text-gray-400" /> Delayed banking batch</span>
                    <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-gray-400 font-medium pt-4 border-t border-gray-200/60">
                Merchant Hotline: <span className="font-bold text-gray-700">1-800-CRAVE-24</span>
              </div>
            </div>

            <div className="flex-1 p-6 relative flex flex-col justify-between bg-white">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <MessageSquare size={18} className="text-[#004D40]" />
                  <span className="font-black text-gray-900 tracking-tight">Open Support Ticket</span>
                </div>
                <button onClick={closeSupportModal} className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <X size={18} />
                </button>
              </div>

              {!supportSubmitted ? (
                <form onSubmit={handleSupportSubmit} className="flex-1 flex flex-col justify-between pt-4">
                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-[10px] font-bold text-teal-900 uppercase tracking-wider mb-1">Issue Category</label>
                      <select 
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white outline-none focus:ring-2 focus:ring-[#004D40] cursor-pointer"
                        value={supportForm.topic}
                        onChange={(e) => setSupportForm({ ...supportForm, topic: e.target.value })}
                      >
                        <option value="Orders & Fulfillment">Orders & Fulfillment</option>
                        <option value="Menu/Pricing Discrepancies">Menu & Pricing Discrepancies</option>
                        <option value="Hardware & Printer Connectivity">Hardware & Printer Connectivity</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-teal-900 uppercase tracking-wider mb-1">Elaborate on your issue</label>
                      <textarea 
                        required
                        placeholder="Please include specific details..."
                        className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#004D40] resize-none h-44 placeholder:text-gray-400"
                        value={supportForm.message}
                        onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end pt-2 border-t border-gray-100">
                    <button type="button" onClick={closeSupportModal} className="px-4 py-2 rounded-xl text-xs font-bold text-gray-500 hover:bg-gray-50 cursor-pointer">Dismiss</button>
                    <button type="submit" disabled={isSending} className="px-4 py-2 rounded-xl text-xs font-bold bg-[#004D40] text-white hover:bg-[#003d33] flex items-center gap-1.5 shadow-sm disabled:opacity-50 cursor-pointer">
                      {isSending ? <>Transmission Loading...</> : <><Send size={12} /> Dispatch Ticket</>}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3 p-4 animate-in fade-in zoom-in-95">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-2xl flex items-center justify-center shadow-inner">
                    <CheckCircle2 size={24} />
                  </div>
                  <h5 className="font-black text-gray-900 tracking-tight text-base">Ticket Transmitted</h5>
                  <button type="button" onClick={closeSupportModal} className="mt-2 px-5 py-2 border border-gray-200 text-gray-700 font-bold text-xs rounded-xl hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
                    Return to Terminal
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full shadow-2xl p-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-150 border border-gray-100 text-gray-800">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto border border-amber-100 shadow-inner">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-gray-900 tracking-tight">Confirm Sign Out</h3>
              <p className="text-sm text-gray-500 mt-1.5">
                Are you sure you want to exit the manager portal? You will need your security credentials to log back in.
              </p>
            </div>
            <div className="flex gap-2.5 pt-2">
              <button type="button" onClick={() => setShowLogoutConfirm(false)} className="flex-1 py-2.5 rounded-xl text-sm font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
                Stay Logged In
              </button>
              <button type="button" onClick={handleConfirmLogout} className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-rose-600 text-white hover:bg-rose-700 transition-all active:scale-[0.98] cursor-pointer">
                Yes, Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortalLayout;