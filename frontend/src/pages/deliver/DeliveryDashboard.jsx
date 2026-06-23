import { useEffect, useState } from "react";

import DeliveryNav from "../../components/delivery/DeliveryNav";
import DeliverySideNav from "../../components/delivery/DeliverySideNav";

import NewOrder from "../../components/delivery/NewOrder";
import TotalOrdersCard from "../../components/delivery/TotalOrder";

export default function DeliveryDashboard() {
    const [orders, setOrders] = useState([]);

    const user = JSON.parse(sessionStorage.getItem("user"));

    
    const fetchOrders = async () => {
        try {
            const res = await fetch(
                "http://localhost:5000/api/driver/available"
            );
            const data = await res.json();
            setOrders(data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchOrders();

        // auto refresh every 10 seconds
        const interval = setInterval(fetchOrders, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-screen">
            <div className="hidden lg:flex flex-col w-full h-fit">
                <DeliveryNav />

                <div className="w-full h-fit flex">
                    <DeliverySideNav />

                    <div className="flex-1 p-12 mx-12 my-6 overflow-y-auto bg-[#F3F4F4] rounded-4xl text-[#004953]">

                        <h1 className="text-3xl font-medium mb-8">
                            Good Morning, {user?.full_name}
                        </h1>

                        <div className="grid grid-cols-2 gap-12">

                            {/* LEFT SIDE */}
                            <div className="flex flex-col gap-12">
                                <TotalOrdersCard />
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="flex flex-col gap-6">

                                {orders.length > 0 ? (
                                    orders.map((order) => (
                                        <NewOrder
                                            key={order.delivery_id}
                                            order={order}
                                            onAccepted={fetchOrders}
                                        />
                                    ))
                                ) : (
                                    <p>No new orders</p>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}