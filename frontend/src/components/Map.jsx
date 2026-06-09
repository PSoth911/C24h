import { MapPin } from "lucide-react";

export default function Map() {
    return (
        <div className="w-full bg-[#f1fff0] rounded-2xl shadow-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <div>
                    <h1 className="text-xl font-semibold text-[#004953]">
                        Delivery Area
                    </h1>
                    <p className="text-sm text-gray-500">
                        Phnom Penh, Cambodia
                    </p>
                </div>

                <div className="flex items-center gap-2 text-[#004953]">
                    <MapPin size={18} />
                    <span className="text-sm">Live Location</span>
                </div>
            </div>

            <iframe
                className="w-full h-87.5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.46367907702!2d104.72537635617992!3d11.579317639054858!2m3!1f0!2f0!3f0!0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1780819561196!5m2!1sen!2skh"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Phnom Penh Map"
            />
        </div>
    );
}