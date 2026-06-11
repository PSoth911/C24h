function DeliveryHistory() {
    const deliveries = [
        {
            id: "#ORD-28491",
            restaurant: "The Burger Joint",
            date: "Oct 20, 2023 • 12:45 PM",
            amount: "$12.40"
        },
        {
            id: "#ORD-28477",
            restaurant: "Pasta Express",
            date: "Oct 20, 2023 • 11:20 AM",
            amount: "$8.50"
        },
        {
            id: "#ORD-28450",
            restaurant: "Pho 24h Central",
            date: "Oct 19, 2023 • 08:15 PM",
            amount: "$15.20"
        }
    ];

    return (
        <div className="w-full bg-[#f1fff0] rounded-2xl shadow-lg p-6 text-[#004953]">
            <h1 className="text-2xl font-semibold mb-5">
                Delivery History
            </h1>

            <div className="space-y-4">
                {deliveries.map((delivery) => (
                    <div
                        key={delivery.id}
                        className="bg-white rounded-xl p-4 border-l-4 border-[#004953] shadow-sm flex justify-between items-center"
                    >
                        <div>
                            <p className="text-xs text-gray-500">
                                {delivery.id}
                            </p>

                            <h2 className="font-semibold text-lg">
                                {delivery.restaurant}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {delivery.date}
                            </p>
                        </div>

                        <div className="text-right">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                                Delivered
                            </span>

                            <h2 className="font-bold text-xl mt-2">
                                {delivery.amount}
                            </h2>

                            <p className="text-sm text-gray-500">
                                Earned
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DeliveryHistory;