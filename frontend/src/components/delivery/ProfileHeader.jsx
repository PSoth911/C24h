import {
  Star,
  Bike,
  Package,
  Phone,
  Mail,
} from "lucide-react";
import PayoutCard from "./PayoutCard";

export default function ProfileHeader({name,phoneNum,email,active,totalDeliveries}) {
  return (
    <div className="bg-gradient-to-r from-[#004953] to-[#006b78] rounded-3xl p-8 text-white mb-6">
      <div className="flex items-center gap-6">
        <img
          src="https://i.redd.it/08c9a7jru54d1.jpeg"
          alt=""
          className="w-28 h-28 rounded-full border-4 border-white"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {name}
          </h1>

          <div className="flex items-center gap-4 mt-2 text-white/90">
            <span className="flex items-center gap-1">
              <Phone size={16} />
              {phoneNum}
            </span>

            <span className="flex items-center gap-1">
              <Mail size={16} />
              {email}
            </span>
          </div>

          <div className="flex gap-3 mt-4">
            <span className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
              <Star size={16} />
              4.9 Rating
            </span>

            <span className="bg-green-500 px-4 py-2 rounded-full">
              {active}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-white/10 rounded-2xl p-4">
          <Package size={24} />
          <h2 className="text-2xl font-bold mt-2">
            {totalDeliveries}
          </h2>
          <p>Total Deliveries</p>
        </div>


        <div className="bg-white/10 rounded-2xl p-4">
          <Star size={24} />
          <h2 className="text-2xl font-bold mt-2">
            4.9
          </h2>
          <p>Customer Rating</p>
        </div>
         <PayoutCard />
      </div>
    </div>
  );
}