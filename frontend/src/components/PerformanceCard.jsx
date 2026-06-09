import { Star } from "lucide-react";

export default function PerformanceCard() {
  return (
    <div className="w-full bg-white rounded-3xl p-6 shadow-sm">

      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg">
          Performance
        </h2>

        <div className="flex items-center gap-1 bg-[#F4EFE8] px-3 py-1 rounded-full">
          <Star size={14} fill="currentColor" />
          <span>4.9</span>
        </div>
      </div>

      <div className="space-y-5 text-sm">

        <div className="bg-[#f1fff0] p-2 rounded-xl">
          <p className="italic text-gray-500">
            "Always on time and very professional."
          </p>

          <p className="text-[#004953] mt-1">
            — Sarah • Yesterday
          </p>
        </div>

        <hr />

        <div className="bg-[#f1fff0] p-2 rounded-xl">
          <p className="italic text-gray-500">
            "Very polite and handled the order with care."
          </p>

          <p className="text-[#004953] mt-1">
            — Mike • 2 days ago
          </p>
        </div>

      </div>

    </div>
  );
}