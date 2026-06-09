import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function WeeklyEarningChart({data}) {
    

    return (
        <div className="w-full bg-[#f1fff0] p-6 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-medium text-[#004953] mb-4">
                Weekly Earnings
            </h1>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 400]} ticks={[0, 100, 200, 300, 400]}/>
                    <Tooltip />
                    <Line type="monotone" dataKey="earning" stroke="#22c55e" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}