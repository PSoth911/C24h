import { Wallet } from "lucide-react";

export default function EarningsSummary() {
    return (
        <div className="w-full h-fit bg-[#f1fff0] rounded-2xl shadow-lg p-6 text-[#004953]">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500">
                        Total Earned
                    </p>

                    <h1 className="text-4xl font-bold mt-1">
                        $312.50
                    </h1>
                </div>

                <div className="bg-white p-3 rounded-xl shadow">
                    <Wallet size={24} />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-6 text-center">
                <div>
                    <p className="text-xs text-gray-500">
                        Deliveries
                    </p>
                    <h2 className="font-semibold text-lg">
                        48
                    </h2>
                </div>

                <div>
                    <p className="text-xs text-gray-500">
                        Hours
                    </p>
                    <h2 className="font-semibold text-lg">
                        32.5
                    </h2>
                </div>

                <div>
                    <p className="text-xs text-gray-500">
                        Avg/Order
                    </p>
                    <h2 className="font-semibold text-lg">
                        $6.50
                    </h2>
                </div>
            </div>

            <button className="w-full mt-6 bg-[#004953] text-white py-3 rounded-xl font-medium hover:opacity-90 transition">
                Request Payout
            </button>
        </div>
    );
}