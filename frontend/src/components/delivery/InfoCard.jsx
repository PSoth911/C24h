import ProfileCard from "./ProfileCard";
import { Mail, MapPin } from "lucide-react";

export default function InfoCard() {
  return (
    <ProfileCard title="Personal Information">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <Mail className="text-[#004953]" />
          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>
            <p>m.sterling@c24h.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-[#004953]" />
          <div>
            <p className="text-sm text-gray-500">
              Residence
            </p>
            <p>Brooklyn, NY</p>
          </div>
        </div>
      </div>
    </ProfileCard>
  );
}