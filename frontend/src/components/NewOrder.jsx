import { MapPin,Check,X } from "lucide-react";

export default function NewOrder() {
    return (
        <div className="bg-[#f1fff0] rounded-2xl shadow-lg p-6 text-[#004953]">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">New Order</h1>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    Incoming
                </span>
            </div>

            <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <h2 className="font-semibold">
                                Wok & Roll Express
                            </h2>
                        </div>

                        <p className="text-sm text-gray-500 mt-1">
                            2.4 miles away • Pickup in 8 mins
                        </p>
                    </div>

                    <div className="text-right">
                        <h1 className="font-bold text-xl">$5.00</h1>
                        <p className="text-sm text-gray-500">
                            Estimated payout
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 mt-5">
                    <button className="flex-1 bg-[#004953] text-white py-2 rounded-xl flex justify-center items-center gap-2">
                        Accept <Check size={16} />
                    </button>

                    <button className="bg-red-500 text-white px-4 rounded-xl flex justify-center items-center gap-2">
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}