import { NavLink } from "react-router-dom";

export default function AdminSidebar({ PATH }) {
  return (
    <aside className="hidden lg:flex w-72 bg-[#004953] text-white flex-col">

      {/* Logo / Brand */}
      <div className="p-6 border-b border-white/20">
        <h1 className="text-2xl font-bold">Food Admin</h1>
        <p className="text-sm text-white/60">Control Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">

        <NavLink
          to={PATH.ADMIN.DASHBOARD}
          className={({ isActive }) =>
            `block p-3 rounded-xl ${
              isActive
                ? "bg-white text-[#004953] font-semibold"
                : "hover:bg-white/10"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to={PATH.ADMIN.USERS}
          className={({ isActive }) =>
            `block p-3 rounded-xl ${
              isActive
                ? "bg-white text-[#004953] font-semibold"
                : "hover:bg-white/10"
            }`
          }
        >
          Users
        </NavLink>

        <NavLink
          to={PATH.ADMIN.RESTAURANTS}
          className={({ isActive }) =>
            `block p-3 rounded-xl ${
              isActive
                ? "bg-white text-[#004953] font-semibold"
                : "hover:bg-white/10"
            }`
          }
        >
          Restaurants
        </NavLink>

        <NavLink
          to={PATH.ADMIN.DELIVERIES}
          className={({ isActive }) =>
            `block p-3 rounded-xl ${
              isActive
                ? "bg-white text-[#004953] font-semibold"
                : "hover:bg-white/10"
            }`
          }
        >
          Deliveries
        </NavLink>

        <NavLink
          to={PATH.ADMIN.PROFILE}
          className={({ isActive }) =>
            `block p-3 rounded-xl ${
              isActive
                ? "bg-white text-[#004953] font-semibold"
                : "hover:bg-white/10"
            }`
          }
        >
          Profile
        </NavLink>

      </nav>
    </aside>
  );
}