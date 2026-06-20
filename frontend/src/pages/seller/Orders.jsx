import React, { useState } from 'react';
import { Search, SlidersHorizontal, RefreshCw, Printer, Clock, Check, X, AlertCircle, ChevronDown } from 'lucide-react';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: '#ORD-8821', customer: 'daro', avatar: 'https://i.pravatar.cc/150?img=63', items: 'Classic Glazed (x12), Hot Latte (x1)', total: '$24.50', payment: 'VISA ...4421', status: 'Preparing' },
    { id: '#ORD-8822', customer: 'Alice Smith', avatar: 'https://i.pravatar.cc/150?img=47', items: 'Assorted Box (x6), Tea (x2)', total: '$18.20', payment: 'Apple Pay', status: 'Pending' },
    { id: '#ORD-8823', customer: 'Mike Ross', avatar: 'https://i.pravatar.cc/150?img=12', items: 'Glazed Donut (x24)', total: '$42.00', payment: 'MasterCard', status: 'Ready' },
    { id: '#ORD-8824', customer: 'Lebron James', avatar: 'https://i.pravatar.cc/150?img=51', items: 'Iced Coffee (x5)', total: '$15.75', payment: 'VISA ...1102', status: 'Cancelled' },
    { id: '#ORD-8825', customer: 'Emma Watson', avatar: 'https://i.pravatar.cc/150?img=32', items: 'Cinnamon Roll (x2), Cappuccino (x1)', total: '$11.50', payment: 'Apple Pay', status: 'Completed' },
  ]);

  const [activeTab, setActiveTab] = useState('Live'); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [paymentFilter, setPaymentFilter] = useState('All'); 

  const statusStyles = {
    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
    Preparing: 'bg-blue-50 text-blue-700 border-blue-200',
    Ready: 'bg-purple-50 text-purple-700 border-purple-200',
    Completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Cancelled: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  const handleStatusChange = (id, nextStatus) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: nextStatus } : order));
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setPaymentFilter('All');
  };

  const liveCount = orders.filter(o => ['Pending', 'Preparing', 'Ready'].includes(o.status)).length;
  const historyCount = orders.filter(o => ['Completed', 'Cancelled'].includes(o.status)).length;
  
  const filteredOrders = orders.filter(order => {
    const matchesTab = activeTab === 'Live' 
      ? ['Pending', 'Preparing', 'Ready'].includes(order.status)
      : ['Completed', 'Cancelled'].includes(order.status);

    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.items.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPayment = paymentFilter === 'All' || 
                           order.payment.toLowerCase().includes(paymentFilter.toLowerCase());

    return matchesTab && matchesSearch && matchesPayment;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 px-4 sm:px-6">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">Orders Management</h2>
          <p className="text-sm text-gray-500 mt-0.5">Track live kitchen fulfillment updates and check sales pipelines.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#004D40] text-white rounded-xl border border-[#004D40]/80 hover:bg-[#004D40]/90 transition-all text-sm font-medium">
          <Printer size={16} /> Print Orders
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#004D40] text-white p-5 rounded-2xl flex justify-between items-center shadow-md">
          <div>
            <p className="text-xs uppercase text-teal-200 font-bold tracking-wider">Revenue Today</p>
            <h4 className="text-2xl font-black mt-1">$1,248.50</h4>
          </div>
          <span className="text-xs bg-teal-900/60 border border-teal-700 px-2.5 py-1 rounded-lg text-teal-200 font-bold">
            ▲ +12% vs yesterday
          </span>
        </div>

        <div className="bg-white border p-5 rounded-2xl flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Active Workspace Count</p>
            <h4 className="text-2xl font-black text-gray-800 mt-1">{liveCount} Orders</h4>
          </div>
          <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?img=32" alt="avatar" />
            <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?img=12" alt="avatar" />
            <span className="w-8 h-8 rounded-full bg-teal-50 border-2 border-teal-200 text-xs font-bold text-teal-800 flex items-center justify-center">
              +{liveCount}
            </span>
          </div>
        </div>

        <div className="bg-white border p-5 rounded-2xl flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Avg. Terminal Delivery Time</p>
            <h4 className="text-2xl font-black text-gray-800 mt-1">12.4 min</h4>
          </div>
          <div className="p-3 bg-teal-50 text-[#004D40] rounded-xl border border-teal-100">
            <Clock size={20} />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200/80 flex justify-between items-center">
        <nav className="flex gap-6">
          <button 
            onClick={() => setActiveTab('Live')}
            className={`pb-3 text-sm font-bold transition-all relative cursor-pointer ${
              activeTab === 'Live' ? 'text-[#004D40]' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Live Monitor ({liveCount})
            {activeTab === 'Live' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004D40] rounded-full"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('History')}
            className={`pb-3 text-sm font-bold transition-all relative cursor-pointer ${
              activeTab === 'History' ? 'text-[#004D40]' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            History Archive ({historyCount})
            {activeTab === 'History' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004D40] rounded-full"></div>}
          </button>
        </nav>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search by Order #, Customer, or items..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent text-gray-800 font-medium"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="relative">
          <SlidersHorizontal className="absolute left-3.5 top-3 text-gray-400 pointer-events-none" size={15} />
          <select
            className="pl-9 pr-8 py-2 border border-gray-200 bg-white rounded-xl text-sm font-medium text-gray-600 outline-none focus:ring-2 focus:ring-[#004D40] appearance-none cursor-pointer"
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
          >
            <option value="All">All Payment Methods</option>
            <option value="VISA">Visa Cards</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Apple Pay">Apple Pay</option>
          </select>
          <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={14} />
        </div>

        <button 
          onClick={clearAllFilters}
          className="p-2.5 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-500 transition-all cursor-pointer"
          title="Reset Filters"
        >
          <RefreshCw size={15} />
        </button>
      </div>

      <div className="bg-white border border-gray-200/80 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-gray-50/70 text-xs font-bold uppercase tracking-wider text-teal-900 border-b border-gray-100">
                <th className="p-4 w-28">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Ordered Items</th>
                <th className="p-4">Total</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Fulfillment Stage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50/60 transition-colors">
                    <td className="p-4 font-mono font-bold text-teal-900">{order.id}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img src={order.avatar} alt={order.customer} className="w-8 h-8 rounded-full border bg-gray-100 object-cover" />
                        <span className="font-semibold text-gray-800">{order.customer}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600 max-w-xs truncate font-medium">{order.items}</td>
                    <td className="p-4 font-extrabold text-gray-900">{order.total}</td>
                    <td className="p-4">
                      <span className="bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-1 rounded-lg text-xs font-bold">
                        {order.payment}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="relative inline-block">
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className={`pl-3 pr-8 py-1 rounded-full text-xs font-bold border outline-none cursor-pointer appearance-none ${statusStyles[order.status]}`}
                        >
                          <option value="Pending">🕒 Pending</option>
                          <option value="Preparing">🍳 Preparing</option>
                          <option value="Ready">📦 Ready</option>
                          <option value="Completed">✅ Completed</option>
                          <option value="Cancelled">❌ Cancelled</option>
                        </select>
                        <ChevronDown className="absolute right-2.5 top-2 pointer-events-none opacity-60" size={12} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-12 text-center text-sm text-gray-400 font-medium">
                    <div className="flex flex-col items-center gap-2 justify-center">
                      <AlertCircle size={24} className="text-gray-300" />
                      <span>No orders found matching the chosen search criteria.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Orders;