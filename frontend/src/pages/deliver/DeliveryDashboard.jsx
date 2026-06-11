import DeliveryNav from "../../components/delivery/DeliveryNav"
import DeliverySideNav from "../../components/delivery/DeliverySideNav";

import Map from "../../components/delivery/Map";
import WeeklyEarningChart from "../../components/delivery/WeeklyEarningChart";
import StatsCard from "../../components/delivery/StatusCard";
import NewOrder from "../../components/delivery/NewOrder";
import TotalOrdersCard from "../../components/delivery/TotalOrder";

import {Star} from 'lucide-react'

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
    // const earningStats = [
    // {
    //     label: "Monday",
    //     amount: 120,
    //     percent: 60,
    //     color: "bg-green-400",
    //     textColor: "text-green-400",
    // },
    // {
    //     label: "Tuesday",
    //     amount: 180,
    //     percent: 90,
    //     color: "bg-blue-400",
    //     textColor: "text-blue-400",
    // },
    // {
    //     label: "Wednesday",
    //     amount: 150,
    //     percent: 75,
    //     color: "bg-yellow-400",
    //     textColor: "text-yellow-400",
    // },
    // ];

    const data = [
        { day: "Mon", earning: 120 },
        { day: "Tue", earning: 180 },
        { day: "Wed", earning: 150 },
        { day: "Thu", earning: 220 },
        { day: "Fri", earning: 300 },
        { day: "Sat", earning: 280 },
        { day: "Sun", earning: 170 }
    ];

    return(
        <div className="w-full h-screen">
            <div className="lg:hidden flex flex-col w-full h-full">
                <div className="bg-pink-500 w-full h-full flex items-center justify-center">
                    <h1>this is Mobile layout</h1>
                </div>
            </div>

            {/* <div className="hidden lg:flex flex-col justify-start items-center w-full h-full">
                <DeliveryNav></DeliveryNav>
                <div className="w-full h-fit px-40 mt-8">
                    <h1 className="text-2xl font-medium">Good Morning, Sophea!!</h1>
                </div>
                <div className="grid grid-cols-2 gap-12 mt-8 w-full">
                    <div className="w-full h-full flex flex-col justify-start items-end gap-12">
                        <TotalOrdersCard orderStats={orderStats}></TotalOrdersCard>
                        
                    </div>
                    <div className="w-full h-full flex flex-col justify-start items-start gap-12">
                        <NewOrder></NewOrder>
                        <div className="flex gap-2">
                        <Earning></Earning>
                        <Rating></Rating>

                        </div>
                    </div>
                    
                </div>
                
            </div> */}
            <div className="hidden lg:flex flex-col w-full h-fit">
                <DeliveryNav></DeliveryNav>
                <div className="w-full h-fit flex">
                    <DeliverySideNav />
                    <div className="flex-1 p-12 mx-12 my-6 overflow-y-auto bg-[#F3F4F4] rounded-4xl text-[#004953]">
                        <h1 className="text-3xl font-medium mb-8">
                            Good Morning, Sophea!!
                        </h1>

                        <div className="grid grid-cols-2 gap-12">
                            <div className="flex flex-col gap-12">
                                <TotalOrdersCard orderStats={orderStats} />
                                <Map></Map>
                            </div>

                            <div className="flex flex-col gap-6">
                                <NewOrder />
                                <StatsCard title="Rating" value="4.8" icon={Star} progress={96} />     
                                <WeeklyEarningChart data={data}></WeeklyEarningChart>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}