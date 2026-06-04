import DeliveryNav from "../../components/DeliveryNav"
import {TotalOrdersCard} from "../../components/DeliveryCard"

export default function DeliveryDashboard(){
    const orderStats = [
    {
        label: "Delivered",
        count: 60,
        percent: 85,
        color: "bg-green-400",
        textColor: "text-green-400",
    },
    {
        label: "Cancelled",
        count: 10,
        percent: 15,
        color: "bg-red-500",
        textColor: "text-red-500",
    },
    {
        label: "Pending",
        count: 5,
        percent: 7,
        color: "bg-yellow-400",
        textColor: "text-yellow-400",
    },
    {
        label: "On The Way",
        count: 12,
        percent: 17,
        color: "bg-blue-400",
        textColor: "text-blue-400",
    },
    ];
    return(
        <div className="w-full h-screen">
            <div className="lg:hidden flex flex-col w-full h-full">
                <div className="bg-pink-500 w-full h-full flex items-center justify-center">
                    <h1>this is Mobile layout</h1>
                </div>
            </div>

            <div className="hidden lg:flex flex-col justify-start items-center w-full h-full">
                <DeliveryNav></DeliveryNav>
                <div className="grid grid-cols-2 gap-10 mt-16">
                    <div>
                        <TotalOrdersCard orderStats={orderStats}></TotalOrdersCard>
                    </div>
                    <div className="">
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}