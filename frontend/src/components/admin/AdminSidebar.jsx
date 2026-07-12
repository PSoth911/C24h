import {
  LayoutDashboard,
  Users,
  Store,
  Bike,
  UserCircle,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../common/Logo";


export default function AdminSidebar({ PATH }) {
  
  const navigate = useNavigate();

  const menus = [
    {
      title: "GENERAL",
      items: [
        { name: "Dashboard",   path: PATH.ADMIN.DASHBOARD,  icon: LayoutDashboard },
        { name: "Users",       path: PATH.ADMIN.USERS,       icon: Users },
        { name: "Restaurants", path: PATH.ADMIN.RESTAURANTS, icon: Store },
        { name: "Deliveries",  path: PATH.ADMIN.DELIVERIES,  icon: Bike },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        { name: "Profile", path: PATH.ADMIN.PROFILE, icon: UserCircle },
      ],
    },
  ];

  const logout = () => {
    sessionStorage.clear();
    navigate("/auth/login");
  };
  

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    logout();            
    navigate("/auth/login"); 
  };

  return (
    <aside className="w-64 bg-[#F8FAFC] h-screen flex flex-col px-5 py-8">

      {/* Logo */}
      <div className="mb-12">
        <Logo to={PATH.ADMIN.DASHBOARD} />
        <p className="text-xs text-slate-500 mt-1 ml-11">Admin Panel</p>
      </div>

      {/* Menu */}
      <div className="flex-1">
        {menus.map((section) => (
          <div key={section.title} className="mb-8">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3 px-3">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((menu) => {
                const Icon = menu.icon;
                return (
                  <NavLink
                    key={menu.name}
                    to={menu.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-[#004953] text-white shadow-sm"
                          : "text-slate-500 hover:bg-white hover:text-slate-900"
                      }`
                    }
                  >
                    <Icon size={19} />
                    <span className="font-medium">{menu.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-white hover:text-red-500 transition"
      >
        <LogOut size={19} />
        Logout
      </button>

    </aside>
  );
}