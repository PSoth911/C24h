import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import CategoryTabs from '../../components/Seller/CategoryTabs';
import MenuItemCard from '../../components/Seller/MenuItemCard';
import MenuModal from '../../components/Seller/MenuModal';

const initialCategories = [
  { id: 'all', label: 'Full Menu' },
  { id: 'donuts', label: 'Premium Donuts' },
  { id: 'drinks', label: 'Beverages' }
];

const initialItems = [
  { id: 1, name: 'Classic Glazed Donut', description: 'Our signature melt-in-your-mouth yeast donut with a crisp honey glaze layer.', price: 2.25, category: 'donuts', isAvailable: true },
  { id: 2, name: 'Maple Bacon Bar', description: 'Fluffy long-john donut coated in rich maple glaze and topped with smoky bacon chunks.', price: 3.75, category: 'donuts', isAvailable: true },
  { id: 3, name: 'Cold Brew Coffee', description: 'Slow-steeped specialty arabica beans served over ice for optimal smooth profiles.', price: 3.50, category: 'drinks', isAvailable: false }
];

const MenuManagement = () => {
  const [items, setItems] = useState(initialItems);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', price: '', category: 'donuts', description: '' });

  const handleToggleStatus = (id) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, isAvailable: !item.isAvailable } : item));
  };

  const handleDeleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: formData.name,
      description: formData.description || 'No description provided.',
      price: parseFloat(formData.price) || 0.00,
      category: formData.category,
      isAvailable: true
    };

    setItems([newItem, ...items]);
    setIsModalOpen(false);
    setFormData({ name: '', price: '', category: 'donuts', description: '' });
  };

  const filteredItems = items.filter(item => activeCategory === 'all' || item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 px-4 sm:px-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black text-gray-800 tracking-tight">Menu Catalog</h2>
          <p className="text-sm text-gray-500 mt-0.5">Maintain active product configurations, modify retail values, and shift item stock configurations.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#004D40] text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#003d33] transition-all shadow-sm cursor-pointer shrink-0"
        >
          <Plus size={16} /> Add Product
        </button>
      </div>

      <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={initialCategories} />

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <MenuItemCard key={item.id} item={item} onToggleStatus={handleToggleStatus} onDeleteItem={handleDeleteItem} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center max-w-md mx-auto shadow-sm">
          <p className="text-sm font-bold text-gray-800">No Items Found</p>
          <p className="text-xs text-gray-400 mt-1">There are no items populated inside this specific category matrix yet.</p>
        </div>
      )}

      <MenuModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAddItem} 
        formData={formData} 
        setFormData={setFormData} 
        categories={initialCategories} 
      />
    </div>
  );
};

export default MenuManagement;