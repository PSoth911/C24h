import DeliveryNav from "../../components/DeliveryNav"
import DeliverySideNav from "../../components/DeliverySideNav"
import DeliveryTrackingCard from "../../components/DeliveryTrackingCard"

export default function DeliveryMap(){
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
                    <div className="flex-1 p-8 m-4 overflow-y-auto bg-[#F3F4F4] rounded-4xl text-[#004953]">
                        
                        <div className="flex flex-col gap-8 mx-40 pt-12">
                            <DeliveryTrackingCard></DeliveryTrackingCard>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}