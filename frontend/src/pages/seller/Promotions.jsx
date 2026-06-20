import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PromoMetrics from '../../components/Seller/PromoMetrics';
import PromoTable from '../../components/Seller/PromoTable';
import PromoModal from '../../components/Seller/PromoModal';

const initialCampaigns = [
  { name: 'Buy 1 Get 1 Glazed Classic', code: 'BOGODONUT', status: 'Active', conversions: '184 Redemptions', duration: 'Jun 12 - Jun 24' },
  { name: 'Midnight Caffeine Boost', code: 'NIGHTOWL', status: 'Scheduled', conversions: 'Starts Soon', duration: 'Jul 01 - Jul 05' }
];

const Promotions = () => {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', code: '', startDate: '', endDate: '' });

  const formatDateRange = (start, end) => {
    if (!start || !end) return 'Ongoing';
    const options = { month: 'short', day: 'numeric', timeZone: 'UTC' };
    return `${new Date(start).toLocaleDateString('en-US', options)} - ${new Date(end).toLocaleDateString('en-US', options)}`;
  };

  const handleCreatePromo = (e) => {
    e.preventDefault();
    const newPromo = {
      name: formData.name,
      code: formData.code.toUpperCase(),
      status: 'Active',
      conversions: '0 Redemptions',
      duration: formatDateRange(formData.startDate, formData.endDate)
    };

    setCampaigns([newPromo, ...campaigns]);
    setIsModalOpen(false);
    setFormData({ name: '', code: '', startDate: '', endDate: '' });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 px-4 sm:px-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">Promotions & Offers</h2>
          <p className="text-sm text-gray-500 mt-0.5">Deploy store discount rules, monitor user coupon claims, and schedule flashes.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#004D40] text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#003d33] transition-all shadow-sm cursor-pointer shrink-0"
        >
          <Plus size={16} /> Create Campaign
        </button>
      </div>

      <PromoMetrics />
      <PromoTable campaigns={campaigns} />

      <PromoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleCreatePromo} 
        formData={formData} 
        setFormData={setFormData} 
      />
    </div>
  );
};

export default Promotions;