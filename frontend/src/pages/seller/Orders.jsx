import React, { useState } from 'react';
import OrderFilters from '../../components/Seller/OrderFilters';
import OrderCard from '../../components/Seller/OrderCard';

const initialOrders = [
  { id: '#ORD-8831', status: 'pending', customer: 'Sokha Mean', type: 'Delivery', timeAgo: '2 mins ago', items: [{ qty: 2, name: 'Classic Glazed' }, { qty: 1, name: 'Cold Brew' }], total: 12.50 },
  { id: '#ORD-8830', status: 'preparing', customer: 'Bora Chem', type: 'Pickup', timeAgo: '12 mins ago', items: [{ qty: 1, name: 'Maple Bacon' }, { qty: 1, name: 'Matcha Latte' }], total: 9.75 },
  { id: '#ORD-8829', status: 'ready', customer: 'Dara Roth', type: 'Delivery', timeAgo: '22 mins ago', items: [{ qty: 6, name: 'Party Assortment Box' }], total: 24.00 }
];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [activeFilter, setActiveFilter] = useState('all');

  // Runtime State Upgrades
  const handleStatusChange = (orderId, nextStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: nextStatus } : o));
  };

  // Metrics Array Math Tally
  const counts = {
    all: orders.filter(o => o.status !== 'completed').length,
    pending: orders.filter(o => o.status === 'pending').length,
    preparing: orders.filter(o => o.status === 'preparing').length,
    ready: orders.filter(o => o.status === 'ready').length
  };

  // Data Filtering Filter Constraint Node
  const filteredOrders = orders.filter(order => {
    if (activeFilter === 'all') return order.status !== 'completed';
    return order.status === activeFilter;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 px-4 sm:px-6">
      
      {/* View Header Core Elements */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">Kitchen Orders</h2>
          <p className="text-sm text-gray-500 mt-0.5">Fulfill streaming guest orders, update execution tracks, and manage handovers.</p>
        </div>
      </div>

      {/* Filter Segment Element */}
      <OrderFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} counts={counts} />

      {/* Grid Iteration Loop Node */}
      {filteredOrders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.map(order => (
            <OrderCard key={order.id} order={order} onStatusChange={handleStatusChange} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center max-w-md mx-auto shadow-sm">
          <p className="text-sm font-bold text-gray-800">Clear Queue</p>
          <p className="text-xs text-gray-400 mt-1">There are no orders current flagged under this processing matrix.</p>
        </div>
      )}

    </div>
  );
};

export default Orders;