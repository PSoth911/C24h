import { useEffect, useState } from "react";
import axios from "axios";

import DeliveryNav from "../../components/delivery/DeliveryNav";
import DeliverySideNav from "../../components/delivery/DeliverySideNav";
import ProfileHeader from "../../components/delivery/ProfileHeader";
import InfoCard from "../../components/delivery/InfoCard";
import DocumentsCard from "../../components/delivery/DocumentsCard";
import PayoutCard from "../../components/delivery/PayoutCard";
import AvailabilitySchedule from "../../components/delivery/AvailabilitySchedule";
import PreferencesCard from "../../components/delivery/PreferencesCard";

export default function DeliveryProfile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
    const fetchProfile = async () => {
        try {
            const user = JSON.parse(sessionStorage.getItem("user"));
            console.log("SESSION USER:", user);

            const response = await axios.post(
                "http://localhost:5000/api/deliver/profile",
                { user_id: user.id }
            );

            console.log("PROFILE RESPONSE:", response.data);

            setProfile(response.data);
        } catch (error) {
            console.log("ERROR:", error);
        }
    };

    fetchProfile();
}, []);

    if (!profile) return <div>Loading...</div>;

    return (
        <div className="w-full h-screen">
            <div className="lg:hidden flex flex-col w-full h-full">
                <div className="bg-pink-500 w-full h-full flex items-center justify-center">
                    <h1>this is Mobile layout</h1>
                </div>
            </div>

            <div className="hidden lg:flex flex-col w-full h-fit">
                <DeliveryNav />

                <div className="w-full h-fit flex">
                    <DeliverySideNav />

                    <div className="flex-1 p-8 m-4 overflow-y-auto bg-[#F3F4F4] rounded-4xl text-[#004953]">

                        <ProfileHeader
                            name={profile.full_name}
                            phoneNum={profile.phone}
                            email={profile.email}
                            active={profile.status}
                            totalDeliveries={profile.Driver.Deliveries.length}
                        />

                        <div className="grid grid-cols-3 gap-6 mt-6">
                            <InfoCard email={profile.email}/>
                            <DocumentsCard />
                        </div>

                        
                        <PreferencesCard />

                    </div>
                </div>
            </div>
        </div>
    );
}