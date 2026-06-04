import {Utensils} from 'lucide-react'

function TotalOrdersCard({orderStats}){
    return (
        <div className="w-fit h-fit bg-[#f1fff0] flex flex-col justify-center items-start p-8 rounded-2xl text-[#004953] shadow-lg">
            <h1 className="font-medium text-2xl pb-2">Ordered This Week</h1>
            <p className="text-sm pb-4">Total orders : 70</p>
            {orderStats.map((item) => (
                <div key={item.label} className={`flex items-center gap-4 pt-4 pl-4 ${item.textColor}`}>
                    <Utensils />
                    <h1 className="font-medium w-24">{item.label}</h1>
                    <div className="w-50 h-1 bg-white rounded-full">
                        <div className={`w-[${item.percent}%] h-full rounded-full ${item.color}`} />
                    </div>
                    <h1>{item.count}</h1>
                </div>
            ))}
        </div>
    )
}

export {TotalOrdersCard}