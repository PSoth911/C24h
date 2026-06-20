import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({ to, label, icon: Icon }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
          isActive
            ? 'bg-white/10 text-white shadow-sm'
            : 'text-gray-300/80 hover:bg-white/5 hover:text-white'
        }`
      }
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarLink;