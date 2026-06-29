// DeliverySideNav.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Map, Wallet, UserCircle, LogOut } from "lucide-react";
import { PATH } from "../../path.js";

export default function DeliverySideNav() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate("/auth/login");
  };

  const menus = [
    {
      title: "GENERAL",
      items: [
        { name: "Dashboard", path: PATH.DELIVERY.DASHBOARD, icon: LayoutDashboard },
        { name: "Map",       path: PATH.DELIVERY.MAP,       icon: Map              },
        { name: "Earnings",  path: PATH.DELIVERY.EARNING,   icon: Wallet           },
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        { name: "Profile", path: PATH.DELIVERY.PROFILE, icon: UserCircle },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-[#F8FAFC] h-[calc(100vh-80px)] sticky top-20 flex flex-col px-5 py-8">
      <div className="flex-1">
        {menus.map((section) => (
          <div key={section.title} className="mb-8">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3 px-3">
              {section.title}
            </p>
            <div className="space-y-1">
              {section.items.map(({ name, path, icon: Icon }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:bg-white hover:text-slate-900"
                    }`
                  }
                >
                  <Icon size={19} />
                  <span className="font-medium">{name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={logout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-white hover:text-red-500 transition"
      >
        <LogOut size={19} />
        Logout
      </button>
    </aside>
  );
}