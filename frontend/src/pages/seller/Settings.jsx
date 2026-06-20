import React, { useState } from 'react';
import { Store, Bell, Sliders, Shield, Save, CheckCircle2, DollarSign, Percent, Clock, Smartphone } from 'lucide-react';

const Settings = () => {
  // --- State Configuration ---
  const [isSaved, setIsSaved] = useState(false);
  const [storeDetails, setStoreDetails] = useState({
    name: 'Glazed & Confused Donuts',
    email: 'seyhagaming045@gmail.com',
    phone: '(+855) 888636592',
    currency: 'USD ($)',
    taxRate: '8.25',
    deliveryFee: '3.50'
  });

  const [operations, setOperations] = useState({
    isOpen: true,
    autoAcceptOrders: false,
    soundAlerts: true,
    emailDailyReports: true
  });

  // --- Handlers ---
  const handleInputChange = (field, value) => {
    setStoreDetails(prev => ({ ...prev, [field]: value }));
  };

  const toggleOperation = (field) => {
    setOperations(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12 px-4 sm:px-6 relative">
      
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">System Settings</h2>
          <p className="text-sm text-gray-500 mt-0.5">Configure storefront properties, order variables, and hardware behaviors.</p>
        </div>
        
        <button 
          onClick={handleSaveSettings}
          className="bg-[#004D40] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#003d33] transition-all shadow-sm active:scale-[0.98] cursor-pointer"
        >
          <Save size={16} />
          Save Configurations
        </button>
      </div>

      {isSaved && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
          <div className="text-sm">
            <span className="font-bold">Configurations updated!</span> Your terminal store variables have been synchronized globally.
          </div>
        </div>
      )}

      <form onSubmit={handleSaveSettings} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        <div className="md:col-span-1 space-y-6">
          
          <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-teal-900 font-bold text-sm uppercase tracking-wider">
              <Sliders size={16} className="text-[#004D40]" />
              Fulfillment Control
            </div>
            
            <hr className="border-gray-100" />

            <div className="flex items-center justify-between py-1">
              <div>
                <p className="text-sm font-bold text-gray-800">Accepting Orders</p>
                <p className="text-xs text-gray-400 mt-0.5">Control live checkout state.</p>
              </div>
              <button
                type="button"
                onClick={() => toggleOperation('isOpen')}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer outline-none ${
                  operations.isOpen ? 'bg-[#004D40]' : 'bg-gray-200'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all shadow-sm ${
                  operations.isOpen ? 'left-7' : 'left-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between py-1">
              <div>
                <p className="text-sm font-bold text-gray-800">Auto-Accept Queue</p>
                <p className="text-xs text-gray-400 mt-0.5">Bypass manual prep confirmations.</p>
              </div>
              <button
                type="button"
                onClick={() => toggleOperation('autoAcceptOrders')}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer outline-none ${
                  operations.autoAcceptOrders ? 'bg-[#004D40]' : 'bg-gray-200'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all shadow-sm ${
                  operations.autoAcceptOrders ? 'left-7' : 'left-1'
                }`} />
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-teal-900 font-bold text-sm uppercase tracking-wider">
              <Bell size={16} className="text-[#004D40]" />
              Alert Terminals
            </div>
            
            <hr className="border-gray-100" />

            <div className="flex items-center justify-between py-1">
              <div>
                <p className="text-sm font-bold text-gray-800">Kitchen Audio Pings</p>
                <p className="text-xs text-gray-400 mt-0.5">Chime on new incoming orders.</p>
              </div>
              <button
                type="button"
                onClick={() => toggleOperation('soundAlerts')}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer outline-none ${
                  operations.soundAlerts ? 'bg-[#004D40]' : 'bg-gray-200'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all shadow-sm ${
                  operations.soundAlerts ? 'left-7' : 'left-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between py-1">
              <div>
                <p className="text-sm font-bold text-gray-800">Daily EOD Reports</p>
                <p className="text-xs text-gray-400 mt-0.5">Email summary metrics automatically.</p>
              </div>
              <button
                type="button"
                onClick={() => toggleOperation('emailDailyReports')}
                className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer outline-none ${
                  operations.emailDailyReports ? 'bg-[#004D40]' : 'bg-gray-200'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all shadow-sm ${
                  operations.emailDailyReports ? 'left-7' : 'left-1'
                }`} />
              </button>
            </div>
          </div>

        </div>

        <div className="md:col-span-2 space-y-6">

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-teal-900 font-bold text-sm uppercase tracking-wider">
              <Store size={18} className="text-[#004D40]" />
              Storefront Registry
            </div>
            
            <hr className="border-gray-100" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Business Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent"
                  value={storeDetails.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Primary Contact Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent"
                  value={storeDetails.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Business Phone</label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    required
                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent"
                    value={storeDetails.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Regional Currency Base</label>
                <select 
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white outline-none focus:ring-2 focus:ring-[#004D40] appearance-none cursor-pointer"
                  value={storeDetails.currency}
                  onChange={(e) => handleInputChange('currency', e.target.value)}
                >
                  <option value="USD ($)">USD ($) United States Dollar</option>
                  <option value="EUR (€)">EUR (€) Eurozone Euro</option>
                  <option value="GBP (£)">GBP (£) British Pound</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-teal-900 font-bold text-sm uppercase tracking-wider">
              <Shield size={18} className="text-[#004D40]" />
              Taxation & Surcharges
            </div>
            
            <hr className="border-gray-100" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">VAT / Operational Tax (%)</label>
                <div className="relative">
                  <Percent className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <input 
                    type="number" 
                    step="0.01"
                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent"
                    value={storeDetails.taxRate}
                    onChange={(e) => handleInputChange('taxRate', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Base Flat Delivery Fee ($)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <input 
                    type="number" 
                    step="0.01"
                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent"
                    value={storeDetails.deliveryFee}
                    onChange={(e) => handleInputChange('deliveryFee', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Settings;