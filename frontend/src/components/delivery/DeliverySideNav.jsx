import { NavLink } from "react-router-dom";
import { UserRound, LayoutDashboard, Map, Wallet } from "lucide-react";
import { PATH } from "../../path.js";

export default function DeliverySideNav() {
    return (
        <div className="w-72 h-[calc(100vh-80px)] flex justify-center items-start">
            <div className="w-[90%] h-[90%] flex flex-col justify-between py-8 mt-7 ml-6 rounded-2xl ring-1 ring-gray-200">

              
                <div className="flex flex-col gap-12">
                   

                    {/* Navigation */}
                    <nav className="flex flex-col gap-6 px-6 mt-5 text-[#aeaeae]">
                        <NavLink to={PATH.DELIVERY.DASHBOARD} className={({ isActive }) => `flex items-center gap-3 pl-4 ${isActive ? "text-[#004953] bg-[#F3F4F4] py-2 rounded-xl " : ""}`}>
                            <LayoutDashboard size={20} />
                            Dashboard
                        </NavLink>

                        <NavLink to={PATH.DELIVERY.MAP} className={({ isActive }) =>`flex items-center gap-3 pl-4 ${isActive ? "text-[#004953] bg-[#F3F4F4] py-2 rounded-xl " : ""}`}>
                            <Map size={20} />
                            Map
                        </NavLink>

                        <NavLink to={PATH.DELIVERY.EARNING} className={({ isActive }) =>`flex items-center gap-3 pl-4 ${isActive ? "text-[#004953] bg-[#F3F4F4] py-2  rounded-xl " : ""}`}>
                            <Wallet size={20} />
                            Earning
                        </NavLink>
                    </nav>
                </div>

                {/* Profile */}
                <div className="px-6">
                    <NavLink
                    to={PATH.DELIVERY.PROFILE}
                    className={({ isActive }) =>
                        isActive
                        ? "flex items-center justify-between bg-white text-[#004953] px-4 py-3 rounded-2xl shadow-lg border border-[#004953]"
                        : "flex items-center justify-between bg-[#004953] text-[#ADFF2F] px-4 py-3 rounded-2xl shadow-lg hover:bg-white hover:text-[#004953] hover:border hover:border-[#004953]"
                    }
                    >
                        <span>Profile</span>
                        <UserRound size={20} />
                    </NavLink>
                </div>

            </div>
            

        </div>
    );
}