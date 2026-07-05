import React, { useEffect, useState } from 'react';
import { Store, Sliders, Save, CheckCircle } from 'lucide-react';
import SettingsCard from '../../components/Seller/SettingsCard';
import StoreProfileForm from '../../components/Seller/StoreProfileForm';
import OperationsForm from '../../components/Seller/OperationsForm';
import { getProfile, updateProfile, updateSettings } from '../../api/sellerApi';

const Settings = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState({ name: '', phone: '', address: '' });
  const [ops, setOps] = useState({ acceptingOrders: true, autoAccept: false, soundAlerts: true });

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getProfile();
        if (!res.success) {
          setError(res.message || "Failed to load settings.");
          return;
        }

        setProfile({
          name: res.data.restaurant_name,
          phone: res.data.phone ?? '',
          address: res.data.address ?? '',
        });
        setOps({
          acceptingOrders: res.data.accepting_orders,
          autoAccept: res.data.auto_accept,
          soundAlerts: res.data.sound_alerts,
        });
      } catch {
        setError("Server unreachable. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleToggleOps = (field) => {
    setOps(prev => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmitSettings = async (e) => {
    e.preventDefault();

    await Promise.all([
      updateProfile({ restaurant_name: profile.name, phone: profile.phone, address: profile.address }),
      updateSettings({
        accepting_orders: ops.acceptingOrders,
        auto_accept: ops.autoAccept,
        sound_alerts: ops.soundAlerts,
      }),
    ]);

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  if (loading) return <p className="text-center text-gray-400 py-12 text-sm">Loading settings...</p>;
  if (error) return <p className="text-center text-red-500 py-12 text-sm">{error}</p>;

  return (
    <form onSubmit={handleSubmitSettings} className="max-w-4xl mx-auto space-y-6 pb-12 px-4 sm:px-6 relative">

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">System Configurations</h2>
          <p className="text-sm text-gray-500 mt-0.5">Adjust operational parameters, global variables, and terminal notification paths.</p>
        </div>

        <button
          type="submit"
          className="bg-[#004D40] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#003d33] transition-all shadow-sm cursor-pointer shrink-0"
        >
          <Save size={16} /> Save Changes
        </button>
      </div>

      {isSaved && (
        <div className="bg-teal-50 border border-teal-200 text-[#004D40] px-4 py-3 rounded-xl flex items-center gap-2.5 text-xs font-bold shadow-md animate-in fade-in slide-in-from-top-4 duration-200 fixed top-6 right-6 z-50">
          <CheckCircle size={16} />
          <span>Operational configurations updated successfully!</span>
        </div>
      )}

      <SettingsCard
        title="Store Identity Profile"
        description="Public metadata broadcasted dynamically down to consumer-facing applications."
        icon={Store}
      >
        <StoreProfileForm profile={profile} onChange={handleProfileChange} />
      </SettingsCard>

      <SettingsCard
        title="Terminal & Logistics Rules"
        description="Control internal transaction thresholds and layout alerting triggers."
        icon={Sliders}
      >
        <OperationsForm options={ops} onToggle={handleToggleOps} />
      </SettingsCard>

    </form>
  );
};

export default Settings;
