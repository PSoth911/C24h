import { Clock3 } from "lucide-react";

const days = [
  { day: "Monday", active: true, start: "08:00", end: "18:00" },
  { day: "Tuesday", active: true, start: "08:00", end: "18:00" },
  { day: "Wednesday", active: true, start: "08:00", end: "18:00" },
  { day: "Thursday", active: true, start: "08:00", end: "18:00" },
  { day: "Friday", active: true, start: "08:00", end: "18:00" },
  { day: "Saturday", active: true, start: "10:00", end: "16:00" },
  { day: "Sunday", active: false, start: "", end: "" },
];

export default function AvailabilitySchedule() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mt-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-lg text-[#004953]">
            Availability Schedule
          </h3>
          <p className="text-sm text-gray-500">
            Manage your working hours
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-[#004953] text-white hover:bg-[#006b78] transition">
          Edit Schedule
        </button>
      </div>

      <div className="space-y-3">
        {days.map((item) => (
          <div
            key={item.day}
            className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  item.active
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              />

              <span className="font-medium">
                {item.day}
              </span>
            </div>

            {item.active ? (
              <div className="flex items-center gap-2 text-gray-600">
                <Clock3 size={16} />
                <span>
                  {item.start} - {item.end}
                </span>
              </div>
            ) : (
              <span className="text-gray-400">
                Offline
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}