import React, { useEffect, useState } from 'react';
import AnalyticsMetrics from '../../components/Seller/AnalyticsMetrics';
import VolumeTimelineChart from '../../components/Seller/VolumeTimelineChart';
import SalesMixChart from '../../components/Seller/SalesMixChart';
import { getAnalyticsSummary, getVolumeTimeline, getSalesMix } from '../../api/sellerApi';

const Analytics = () => {
  const [summary, setSummary] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [salesMix, setSalesMix] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [summaryRes, timelineRes, salesMixRes] = await Promise.all([
          getAnalyticsSummary(),
          getVolumeTimeline(7),
          getSalesMix(),
        ]);

        if (!summaryRes.success) {
          setError(summaryRes.message || "Failed to load analytics.");
          return;
        }

        setSummary(summaryRes.data);
        setTimeline(timelineRes.data ?? []);
        setSalesMix(salesMixRes.data ?? []);
      } catch {
        setError("Server unreachable. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <p className="text-center text-gray-400 py-12 text-sm">Loading analytics...</p>;
  if (error) return <p className="text-center text-red-500 py-12 text-sm">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 px-4 sm:px-6">

      <div>
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Performance Analytics</h2>
        <p className="text-sm text-gray-500 mt-0.5">Review gross metrics, sales channels, and consumer acquisition insights.</p>
      </div>

      <AnalyticsMetrics summary={summary} />

      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        <VolumeTimelineChart data={timeline} />
        <SalesMixChart data={salesMix} />
      </div>

    </div>
  );
};

export default Analytics;
