import { Utensils, Check, Clock3, X } from "lucide-react";

export default function TotalOrdersCard() {
    return (
        <div className="bg-[#f1fff0] rounded-2xl shadow-lg p-6 text-[#004953]">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-sm text-gray-500">
                        Orders This Week
                    </h2>
                    <h1 className="text-4xl font-bold">
                        70
                    </h1>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <Utensils size={28} />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-xl p-4">
                    <Check className="mb-2" size={18} />
                    <h1 className="text-xl font-bold">60</h1>
                    <p className="text-xs text-gray-500">
                        Delivered
                    </p>
                </div>

                <div className="bg-white rounded-xl p-4">
                    <Clock3 className="mb-2" size={18} />
                    <h1 className="text-xl font-bold">7</h1>
                    <p className="text-xs text-gray-500">
                        Pending
                    </p>
                </div>

                <div className="bg-white rounded-xl p-4">
                    <X className="mb-2" size={18} />
                    <h1 className="text-xl font-bold">3</h1>
                    <p className="text-xs text-gray-500">
                        Cancelled
                    </p>
                </div>
            </div>
        </div>
    );
}