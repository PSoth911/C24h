import {
  Check,
  Utensils,
  Bike,
  CircleCheckBig,
  Phone,
  MessageSquare,
  MapPin,
} from "lucide-react";

export default function DeliveryTrackingCard() {
  const currentStep = 1;
  // 0 = Heading
  // 1 = Picking
  // 2 = On The Way
  // 3 = Delivered

  const steps = [
    {
      icon: Check,
      label: "Heading",
    },
    {
      icon: Utensils,
      label: "Picking",
    },
    {
      icon: Bike,
      label: "On the way",
    },
    {
      icon: CircleCheckBig,
      label: "Delivered",
    },
  ];

  return (
    <div className="w-full bg-white rounded-3xl shadow-sm p-6">

      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-sm text-gray-500">
            Active Delivery
          </p>

          <h2 className="text-3xl font-bold text-[#004953]">
            Order #CR24-8821
          </h2>
        </div>

        <div className="bg-[#EFEAE2] px-4 py-2 rounded-full text-sm font-medium text-[#004953]">
          2.4 km left
        </div>
      </div>

      {/* Progress */}
      <div className="relative mb-10">

        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200" />

        <div
          className="absolute top-5 left-0 h-0.5 bg-[#004953]"
          style={{
            width: `${(currentStep / 3) * 100}%`,
          }}
        />

        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;

            const active = index <= currentStep;

            return (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    active
                      ? "bg-[#004953] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <Icon size={18} />
                </div>

                <span
                  className={`mt-2 text-sm ${
                    active
                      ? "text-[#004953] font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Customer Card */}
      <div className="bg-[#F4EFE8] rounded-2xl p-5">

        <div className="flex justify-between items-center">

          <div className="flex gap-4 items-center">

            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="customer"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="font-semibold text-lg">
                Sarah Johnson
              </h3>

              <p className="text-[#004953] text-sm">
                Leave at door
              </p>
            </div>

          </div>

          <div className="flex gap-3">

            <button className="w-11 h-11 rounded-full border border-[#004953] flex items-center justify-center text-[#004953]">
              <Phone size={18} />
            </button>

            <button className="w-11 h-11 rounded-full border border-[#004953] flex items-center justify-center text-[#004953]">
              <MessageSquare size={18} />
            </button>

          </div>

        </div>

        <div className="mt-4 bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <MapPin size={16} className="text-gray-500" />

          <span className="text-gray-600">
            221B Baker Street, North Wing Entrance, buzzer 042
          </span>
        </div>

      </div>

      {/* Action Button */}
      <button className="w-full mt-6 bg-[#004953] text-white py-4 rounded-full font-semibold shadow-lg">
        I've arrived at restaurant
      </button>

    </div>
  );
}