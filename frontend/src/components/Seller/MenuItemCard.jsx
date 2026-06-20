import React from 'react';
import { Trash2 } from 'lucide-react';

const MenuItemCard = ({ item, onToggleStatus, onDeleteItem }) => {
  return (
    <div className={`bg-white border rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between transition-all ${
      item.isAvailable ? 'border-gray-200/90' : 'border-gray-200 bg-gray-50/40 opacity-75'
    }`}>
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h4 className="font-bold text-gray-800 text-base">{item.name}</h4>
            <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
          </div>
          <span className="text-base font-black text-[#004D40] bg-teal-50/60 px-2.5 py-1 rounded-xl shrink-0">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Control Actions Strip Footer */}
      <div className="bg-gray-50/60 px-5 py-3 border-t border-gray-100 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onToggleStatus(item.id)}
            className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer outline-none ${
              item.isAvailable ? 'bg-[#004D40]' : 'bg-gray-300'
            }`}
          >
            <div className={`w-3.5 h-3.5 bg-white rounded-full absolute top-0.5 transition-all shadow-sm ${
              item.isAvailable ? 'left-6' : 'left-0.5'
            }`} />
          </button>
          <span className="text-xs font-bold text-gray-500">
            {item.isAvailable ? 'Available' : 'Sold Out'}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onDeleteItem(item.id)}
          className="text-gray-400 hover:text-red-600 p-1.5 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;