import DeliveryNav from "../../components/delivery/DeliveryNav"
import DeliverySideNav from "../../components/delivery/DeliverySideNav"
import WeeklyEarningChart from "../../components/delivery/WeeklyEarningChart"

import DeliveryHistory from "../../components/delivery/DeliveryHistory";
import EarningsOverview from "../../components/delivery/EarningsOverview";
import PerformanceCard from "../../components/delivery/PerformanceCard";

export default function DeliveryEarning(){
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

            <div className="hidden lg:flex flex-col w-full h-fit">
                <DeliveryNav></DeliveryNav>
                <div className="w-full h-fit flex">
                    <DeliverySideNav />
                    <div className="flex-1 p-12 mx-12 my-6 overflow-y-auto bg-[#F3F4F4] rounded-4xl text-[#004953]">
                        
                        <div className="grid grid-cols-2 gap-8">
                            <EarningsOverview></EarningsOverview>
                            <WeeklyEarningChart data={data}></WeeklyEarningChart>
                            <PerformanceCard></PerformanceCard>
                            <DeliveryHistory></DeliveryHistory>
                        </div>
                        
                            
                       
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}