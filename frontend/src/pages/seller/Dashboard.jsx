import React from 'react';
import DashboardMetrics from '../../components/Seller/DashboardMetrics';
import RevenueChart from '../../components/Seller/RevenueChart';
import OrdersStream from '../../components/Seller/OrdersStream';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 px-4 sm:px-6">
      
      <div>
        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Command Center</h2>
        <p className="text-sm text-gray-500 mt-0.5">Glazed & Confused Donuts — Hub Live Terminal Monitor</p>
      </div>

      <DashboardMetrics />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="lg:col-span-1">
          <OrdersStream />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;