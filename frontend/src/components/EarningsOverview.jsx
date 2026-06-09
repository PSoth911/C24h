import { Wallet, Clock3, Package } from "lucide-react";

export default function EarningsOverview() {
  return (
    <div className="w-full bg-[#004953] rounded-3xl p-8 shadow-lg text-white">

      <p className="text-sm opacity-80">
        Total Earned
      </p>

      <h1 className="text-5xl font-bold mt-2">
        $312.50
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-8">

        <div className="bg-white/10 rounded-2xl p-4">
          <Package size={20} />
          <p className="text-xs mt-3 opacity-80">
            Deliveries
          </p>
          <h3 className="text-2xl font-semibold">
            48
          </h3>
        </div>

        <div className="bg-white/10 rounded-2xl p-4">
          <Clock3 size={20} />
          <p className="text-xs mt-3 opacity-80">
            Hours
          </p>
          <h3 className="text-2xl font-semibold">
            32.5
          </h3>
        </div>

        <div className="bg-white/10 rounded-2xl p-4">
          <Wallet size={20} />
          <p className="text-xs mt-3 opacity-80">
            Avg / Order
          </p>
          <h3 className="text-2xl font-semibold">
            $6.50
          </h3>
        </div>

      </div>

      <button className="w-full bg-white text-[#004953] py-3 rounded-full font-semibold mt-8 hover:opacity-90">
        Request Payout
      </button>

    </div>
  );
}