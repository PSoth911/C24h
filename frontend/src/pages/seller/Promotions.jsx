import React, { useState } from 'react';
import { Plus, Megaphone, Target, BarChart2, X, Tag, Calendar, Layers } from 'lucide-react';

const Promotions = () => {
  const [campaigns, setCampaigns] = useState([
    { name: 'Buy 1 Free 1 Glazed', code: 'GLAZEB1G1', status: 'Active', conversions: '456 Redemptions', duration: 'Oct 12 - Oct 24', color: 'bg-green-100 text-green-700' },
    { name: 'Weekend Sweet Box', code: 'Flash Deal', status: 'Scheduled', conversions: 'Starts soon', duration: 'Oct 26 - Oct 28', color: 'bg-purple-100 text-purple-700' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    status: 'Active',
    startDate: '', 
    endDate: ''   
  });

  const formatDateRange = (start, end) => {
    if (!start || !end) return 'Flexible Timeline';
    const options = { month: 'short', day: 'numeric', timeZone: 'UTC' };
    const sDate = new Date(start).toLocaleDateString('en-US', options);
    const eDate = new Date(end).toLocaleDateString('en-US', options);
    return `${sDate} - ${eDate}`;
  };

  const handleCreatePromotion = (e) => {
    e.preventDefault();

    const colorMap = {
      Active: 'bg-green-100 text-green-700',
      Scheduled: 'bg-purple-100 text-purple-700'
    };

    const newCampaign = {
      name: formData.name,
      code: formData.code.toUpperCase() || 'NO CODE',
      status: formData.status,
      conversions: formData.status === 'Active' ? '0 Redemptions' : 'Starts soon',
      duration: formatDateRange(formData.startDate, formData.endDate),
      color: colorMap[formData.status] || 'bg-gray-100 text-gray-700'
    };

    setCampaigns([newCampaign, ...campaigns]);

    setIsModalOpen(false);
    setFormData({ name: '', code: '', status: 'Active', startDate: '', endDate: '' });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 relative">
      
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">My Promotions</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and track your active store offers.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#004D40] text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 hover:bg-[#003d33] cursor-pointer transition-colors shadow-sm"
        >
          <Plus size={18} /> Create Promotion
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border rounded-2xl shadow-sm flex items-center gap-4">
          <div className="p-3 bg-teal-50 text-[#004D40] rounded-xl"><Megaphone size={24} /></div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase">Active Reach</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-0.5">12.4k</h3>
            <span className="text-[11px] text-green-600 font-bold">▲ +15% from last week</span>
          </div>
        </div>
        <div className="bg-white p-6 border rounded-2xl shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><BarChart2 size={24} /></div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase">Total Conversions</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-0.5">842</h3>
            <span className="text-[11px] text-gray-500 font-medium">📋 6.8% conversion rate</span>
          </div>
        </div>
        <div className="bg-white p-6 border rounded-2xl shadow-sm flex items-center gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><Target size={24} /></div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase">Revenue Generated</p>
            <h3 className="text-2xl font-bold text-[#004D40] mt-0.5">$3,240</h3>
            <span className="text-[11px] text-gray-500 font-medium">🎯 Target: $5,000</span>
          </div>
        </div>
      </div>

      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-[#004D40] p-4 text-white font-bold text-sm grid grid-cols-4">
          <div>Promotion Name</div>
          <div>Status</div>
          <div>Performance</div>
          <div>Duration</div>
        </div>
        <div className="divide-y divide-gray-100">
          {campaigns.map((promo, idx) => (
            <div key={idx} className="p-6 grid grid-cols-4 items-center hover:bg-gray-50 text-sm transition-colors">
              <div>
                <h5 className="font-bold text-gray-800">{promo.name}</h5>
                <span className="text-xs text-gray-400 font-mono mt-0.5 block">{promo.code}</span>
              </div>
              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${promo.color}`}>{promo.status}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700 block">{promo.conversions}</span>
                {promo.status === 'Active' && (
                  <div className="w-24 bg-gray-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div className="bg-teal-700 h-full" style={{width: '65%'}}></div>
                  </div>
                )}
              </div>
              <div className="text-gray-600 font-medium">{promo.duration}</div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl border border-gray-100 max-w-md w-full shadow-2xl overflow-hidden p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Create New Offer</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreatePromotion} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Promotion Name</label>
                <div className="relative">
                  <Tag className="absolute left-3.5 top-3 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Free Coffee with Sweet Box"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent font-medium text-gray-800"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Promo Code / Token</label>
                <div className="relative">
                  <Megaphone className="absolute left-3.5 top-3 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., COFFEE24"
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm font-mono uppercase outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent text-gray-800"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">From (Start)</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 text-gray-400 pointer-events-none z-10" size={16} />
                    <input 
                      type="date" 
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent text-gray-700 font-medium cursor-pointer"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">To (End)</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 text-gray-400 pointer-events-none z-10" size={16} />
                    <input 
                      type="date" 
                      required
                      min={formData.startDate} 
                      className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent text-gray-700 font-medium cursor-pointer"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Activation Stage</label>
                <div className="relative">
                  <Layers className="absolute left-3.5 top-3 text-gray-400 pointer-events-none" size={16} />
                  <select 
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent bg-white font-medium text-gray-700 appearance-none cursor-pointer"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="Active">Active (Launch Immediately)</option>
                    <option value="Scheduled">Scheduled (Plan for Later)</option>
                  </select>
                  <div className="absolute right-3.5 top-3.5 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-gray-500 pointer-events-none"></div>
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-2">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2 rounded-xl text-sm font-bold bg-[#004D40] text-white hover:bg-[#003d33] transition-colors shadow-md cursor-pointer"
                >
                  Add Campaign
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default Promotions;