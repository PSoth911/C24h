import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, X, Tag, DollarSign, Layers, Activity, Smile, AlertTriangle } from 'lucide-react';

const initialMenuItems = [
  { id: '1', name: 'Classic Glazed', category: 'Donuts', price: '$2.50', status: 'Active', image: '🍩' },
  { id: '2', name: 'Strawberry Frosted', category: 'Donuts', price: '$3.00', status: 'Active', image: '🍓' },
  { id: '3', name: 'Iced Caramel Latte', category: 'Beverages', price: '$4.50', status: 'Active', image: '☕' },
  { id: '4', name: 'Dozen Box Promo', category: 'Combos', price: '$24.00', status: 'Draft', image: '📦' },
  { id: '5', name: 'Matcha Green Tea', category: 'Beverages', price: '$5.00', status: 'Out of Stock', image: '🍵' },
];

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null); 
  const [itemToDelete, setItemToDelete] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Donuts',
    price: '',
    status: 'Active',
    image: '🍩'
  });

  const tabs = ['All', 'Donuts', 'Beverages', 'Combos'];

  const getCategoryCount = (category) => {
    if (category === 'All') return menuItems.length;
    return menuItems.filter(item => item.category === category).length;
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({ name: '', category: 'Donuts', price: '', status: 'Active', image: '🍩' });
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    const rawPrice = item.price.startsWith('$') ? item.price.slice(1) : item.price;
    setFormData({
      name: item.name,
      category: item.category,
      price: rawPrice,
      status: item.status,
      image: item.image
    });
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      setMenuItems(menuItems.filter(item => item.id !== itemToDelete.id));
      setItemToDelete(null);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const formattedPrice = formData.price.startsWith('$') 
      ? formData.price 
      : `$${parseFloat(formData.price || 0).toFixed(2)}`;

    if (editingItem) {
      setMenuItems(menuItems.map(item => 
        item.id === editingItem.id 
          ? { ...item, ...formData, price: formattedPrice }
          : item
      ));
    } else {
      const newItem = {
        id: Date.now().toString(),
        ...formData,
        price: formattedPrice
      };
      setMenuItems([newItem, ...menuItems]);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 relative p-4">

      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">Menu Management</h2>
          <p className="text-sm text-gray-500 mt-0.5">Manage your items, pricing, and availability variables.</p>
        </div>
        <button 
          onClick={openCreateModal}
          className="bg-[#004D40] text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#003d33] transition-all shadow-sm active:scale-[0.98] cursor-pointer"
        >
          <Plus size={18} />
          Add New Item
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center bg-white p-2 rounded-xl border shadow-sm gap-2">
        <div className="flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-none">
          {tabs.map((tab) => {
            const count = getCategoryCount(tab);
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive 
                    ? 'bg-teal-50 text-[#004D40]' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                {tab}
                <span className={`text-xs px-2 py-0.5 rounded-md font-mono ${
                  isActive ? 'bg-teal-700/10 text-[#004D40]' : 'bg-gray-100 text-gray-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        
        <div className="relative min-w-[260px]">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search items..."
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent text-gray-800 font-medium"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-teal-900">
                <th className="p-4 font-bold">Item</th>
                <th className="p-4 font-bold">Category</th>
                <th className="p-4 font-bold">Price</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/60 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-xl select-none shadow-inner border border-gray-100">
                          {item.image}
                        </div>
                        <span className="font-semibold text-gray-800">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600 font-semibold text-xs">{item.category}</td>
                    <td className="p-4 font-extrabold text-gray-900">{item.price}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide ${
                        item.status === 'Active' ? 'bg-green-50 text-green-700 border border-green-200' :
                        item.status === 'Draft' ? 'bg-gray-100 text-gray-700 border border-gray-200' :
                        'bg-red-50 text-red-700 border border-red-100'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button 
                          onClick={() => openEditModal(item)}
                          className="p-2 text-gray-400 hover:text-[#004D40] hover:bg-teal-50/50 rounded-xl transition-all cursor-pointer" 
                          title="Edit Item"
                        >
                          <Edit2 size={15} />
                        </button>
                        <button 
                          onClick={() => setItemToDelete(item)}
                          className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50/50 rounded-xl transition-all cursor-pointer" 
                          title="Delete Item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-12 text-center text-sm text-gray-400 font-medium">
                    No catalog parameters match your current selection filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl border border-gray-100 max-w-md w-full shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">
                {editingItem ? 'Modify Menu Item' : 'Add New Menu Item'}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-4 gap-3">
                <div className="col-span-3">
                  <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Item Name</label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-2.5 text-gray-400" size={16} />
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., Chocolate Sprinkle"
                      className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="col-span-1">
                  <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5 text-center">Icon</label>
                  <div className="relative">
                    <Smile className="absolute left-2.5 top-2.5 text-gray-400 pointer-events-none" size={14} />
                    <input 
                      type="text" 
                      required
                      maxLength="2"
                      placeholder="🍩"
                      className="w-full pl-7 pr-1 py-2 text-center border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Price (USD)</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 text-gray-400" size={16} />
                    <input 
                      type="number" 
                      step="0.01"
                      min="0.00"
                      required
                      placeholder="0.00"
                      className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#004D40] focus:border-transparent"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Category</label>
                  <div className="relative">
                    <Layers className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
                    <select 
                      className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white outline-none focus:ring-2 focus:ring-[#004D40] appearance-none cursor-pointer"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="Donuts">Donuts</option>
                      <option value="Beverages">Beverages</option>
                      <option value="Combos">Combos</option>
                    </select>
                    <div className="absolute right-3 top-3.5 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-gray-500 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-teal-900 uppercase tracking-wider mb-1.5">Availability Status</label>
                <div className="relative">
                  <Activity className="absolute left-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
                  <select 
                    className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white outline-none focus:ring-2 focus:ring-[#004D40] appearance-none cursor-pointer"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="Active">Active (Publish Live)</option>
                    <option value="Draft">Draft (Internal Visibility)</option>
                    <option value="Out of Stock">Out of Stock (Suspended)</option>
                  </select>
                  <div className="absolute right-3 top-3.5 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-gray-500 pointer-events-none"></div>
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
                  {editingItem ? 'Save Changes' : 'Publish Item'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {itemToDelete && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full shadow-2xl p-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-150 border border-gray-100">
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto border border-rose-100 shadow-inner">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900 tracking-tight">Delete Menu Item?</h3>
              <p className="text-sm text-gray-500 mt-1">
                Are you sure you want to remove <span className="font-bold text-gray-800">"{itemToDelete.name}"</span>? This action cannot be reversed.
              </p>
            </div>
            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setItemToDelete(null)}
                className="flex-1 py-2.5 rounded-xl text-sm font-bold text-gray-500 bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer"
              >
                Keep Item
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="flex-1 py-2.5 rounded-xl text-sm font-bold bg-rose-600 text-white hover:bg-rose-700 transition-all shadow-sm shadow-rose-600/10 active:scale-[0.98] cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MenuManagement;