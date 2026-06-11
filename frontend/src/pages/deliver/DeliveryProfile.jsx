import DeliveryNav from "../../components/delivery/DeliveryNav"
import DeliverySideNav from "../../components/delivery/DeliverySideNav"
import ProfileHeader from "../../components/delivery/ProfileHeader"
import InfoCard from "../../components/delivery/InfoCard"
import DocumentsCard from "../../components/delivery/DocumentsCard"
import PayoutCard from "../../components/delivery/PayoutCard"
import AvailabilitySchedule from "../../components/delivery/AvailabilitySchedule"
import PreferencesCard from "../../components/delivery/PreferencesCard"

export default function DeliveryProfile(){
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
                            <ProfileHeader></ProfileHeader>
                        <div className="grid grid-cols-3 gap-6 mt-6">
                            <div className="col-span-1">
                                <PayoutCard />
                            </div>
                            <InfoCard></InfoCard>
                            <DocumentsCard></DocumentsCard>
                        </div>
                        <AvailabilitySchedule></AvailabilitySchedule>
                        <PreferencesCard></PreferencesCard>
                    </div>
                </div>
                
            </div>
        </div>
    )
}