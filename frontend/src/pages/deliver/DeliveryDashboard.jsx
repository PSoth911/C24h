import DeliveryNav from "../../components/DeliveryNav"
import DeliverySideNav from "../../components/DeliverySideNav";
import {TotalOrdersCard,NewOrder,Earning,Rating} from "../../components/DeliveryCard"

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
            <div className="hidden lg:flex w-full h-screen">
                
                <DeliverySideNav />

               
                <div className="flex-1 p-8 overflow-y-auto">
                    <h1 className="text-2xl font-medium mb-8">
                        Good Morning, Sophea!!
                    </h1>

                    <div className="grid grid-cols-2 gap-12">
                        <div className="flex flex-col gap-12">
                            <TotalOrdersCard orderStats={orderStats} />
                        </div>

                        <div className="flex flex-col gap-12">
                            <NewOrder />

                            <div className="flex gap-4">
                                <Earning />
                                <Rating />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}