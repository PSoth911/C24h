import { MapPin, Check, X } from "lucide-react";

export default function NewOrder({ order, onAccepted }) {

    const acceptOrder = async () => {
        try {
            await fetch(
                `http://localhost:5000/api/driver/delivery/${order.delivery_id}/pickup`,
                {
                    method: "PUT",
                }
            );

            alert("Order accepted!");

            // refresh list
            onAccepted();

        } catch (err) {
            console.log(err);
        }
    };

    const rejectOrder = () => {
        alert("Rejected (you can implement later)");
    };

    return (
        <div className="bg-[#f1fff0] rounded-2xl shadow-lg p-6 text-[#004953]">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">
                    New Order
                </h1>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    Incoming
                </span>
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl p-4">

                <div className="flex justify-between">

                    <div>
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />

                            <h2 className="font-semibold">
                                {order.restaurant_name}
                            </h2>
                        </div>

                        <p className="text-sm text-gray-500 mt-1">
                            {order.distance} • Pickup in{" "}
                            {order.pickup_time_estimate}
                        </p>
                    </div>

                    <div className="text-right">
                        <h1 className="font-bold text-xl">
                            ${order.payout}
                        </h1>
                        <p className="text-sm text-gray-500">
                            Estimated payout
                        </p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">

                    <button
                        onClick={acceptOrder}
                        className="flex-1 bg-[#004953] text-white py-2 rounded-xl flex justify-center items-center gap-2"
                    >
                        Accept <Check size={16} />
                    </button>

                    <button
                        onClick={rejectOrder}
                        className="bg-red-500 text-white px-4 rounded-xl flex items-center gap-2"
                    >
                        <X size={16} />
                    </button>

                </div>
            </div>
        </div>
    );
}