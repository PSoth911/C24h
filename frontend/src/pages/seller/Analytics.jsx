import React from 'react';
import AnalyticsMetrics from '../../components/Seller/AnalyticsMetrics';
import VolumeTimelineChart from '../../components/Seller/VolumeTimelineChart';
import SalesMixChart from '../../components/Seller/SalesMixChart';

const Analytics = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 px-4 sm:px-6">
      
      {/* Structural Module Header */}
      <div>
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Performance Analytics</h2>
        <p className="text-sm text-gray-500 mt-0.5">Review gross metrics, sales channels, and consumer acquisition insights.</p>
      </div>

      {/* Aggregate Statistics View Component */}
      <AnalyticsMetrics />

      {/* Structured Visualization Split Row */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        <VolumeTimelineChart />
        <SalesMixChart />
      </div>

    </div>
  );
};

export default Analytics;