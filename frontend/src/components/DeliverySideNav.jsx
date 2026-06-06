import { NavLink } from "react-router-dom";
import { UserRound, EggFried, LayoutDashboard, Map, Wallet } from "lucide-react";

export default function DeliverySideNav() {
    return (
        <div className="w-64 h-screen bg-white shadow-lg flex flex-col justify-between py-8">

            {/* Logo */}
            <div className="flex flex-col gap-12">
                <NavLink
                    to="/dashboard"
                    className="flex items-center gap-2 px-6 text-[#004953]"
                >
                    <EggFried size={35} />
                    <h1 className="text-2xl font-medium">C24h</h1>
                </NavLink>

                {/* Navigation */}
                <nav className="flex flex-col gap-6 px-6 text-[#aeaeae]">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `flex items-center gap-3 ${
                                isActive ? "text-[#004953]" : ""
                            }`
                        }
                    >
                        <LayoutDashboard size={20} />
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/map"
                        className={({ isActive }) =>
                            `flex items-center gap-3 ${
                                isActive ? "text-[#004953]" : ""
                            }`
                        }
                    >
                        <Map size={20} />
                        Map
                    </NavLink>

                    <NavLink
                        to="/earning"
                        className={({ isActive }) =>
                            `flex items-center gap-3 ${
                                isActive ? "text-[#004953]" : ""
                            }`
                        }
                    >
                        <Wallet size={20} />
                        Earning
                    </NavLink>
                </nav>
            </div>

            {/* Profile */}
            <div className="px-6">
                <NavLink
                    to="/profile"
                    className="flex items-center justify-between bg-[#004953] text-[#ADFF2F] px-4 py-3 rounded-2xl shadow-lg hover:bg-white hover:text-[#004953] hover:border hover:border-[#004953]"
                >
                    <span>Profile</span>
                    <UserRound size={20} />
                </NavLink>
            </div>

        </div>
    );
}