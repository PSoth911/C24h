export default function StatsCard({ title, value, icon: Icon, progress }) {
    return (
        <div className="bg-[#f1fff0] rounded-2xl shadow-lg p-5 text-[#004953] hover:shadow-xl transition-all">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-sm text-gray-500">{title}</h2>
                    <h1 className="text-3xl font-bold">{value}</h1>
                </div>

                <div className="bg-white p-3 rounded-xl shadow">
                    <Icon size={24} />
                </div>
            </div>

            <div className="w-full h-2 bg-white rounded-full">
                <div
                    className="h-full bg-[#004953] rounded-full"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}