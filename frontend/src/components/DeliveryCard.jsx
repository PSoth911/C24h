import {Utensils,MapPin,Check,X,Wallet,Star} from 'lucide-react'

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
                        <div className={`h-full rounded-full ${item.color}`}  style={{ width: `${item.percent}%` }} />
                    </div>
                    <h1>{item.count}</h1>
                </div>
            ))}
        </div>
    )
}

function NewOrder(){
    return (
        <div className='w-120 h-fit p-2 bg-[#f1fff0] flex flex-col justify-start items-center rounded-2xl shadow-xl text-[#004953]'>
            <div className='w-full'>
                <h1 className='font-medium'>New Order</h1>
            </div>
            <div className='w-full h-fit bg-white rounded-2xl'>
                <div className='flex justify-between items-center p-4'>
                    <div className=''>
                        <div className='flex gap-2'>
                            <MapPin />
                            <h1 className='font-medium'>Wok & Roll Express</h1>
                        </div>
                        <p className='text-sm'>2.4 miles away • Pickup in 8 mins</p>
                    </div>
                    <div className=''>
                        <h1 className='font-medium'>5.00$</h1>
                        <p className='text-sm'>Est. Payout</p>
                    </div>   
                </div>
                <div className='flex justify-center items-center p-4 gap-2'>
                    <div className='bg-[#004953] text-white w-[75%] py-1 rounded-2xl flex justify-center items-center gap-1'>
                        <button className=''>Accept</button>
                        <Check size={17} className='mt-0.5' ></Check>
                    </div>
                    <div className='bg-red-500 text-white w-[25%] py-1.5 rounded-2xl flex justify-center items-center gap-1'>
                        <button className='text-sm'>Decline</button>
                        <X size={17} className='mt-0.5'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

function Earning(){
    return (
        <div className='w-60 h-fit pl-1 bg-[#004953] flex flex-col justify-start items-center rounded-2xl shadow-xl text-[#004953]'>
           <div className='bg-[#f1fff0] w-full h-20 rounded-xl px-6 py-2 flex justify-between items-center'>
            <div className=''>
                <h1 className='text-lg font-medium'>Earning</h1>
                <h1 className='text-2xl font-bold'>82.00$</h1>
            </div>
            <Wallet />
           </div>
        </div>
    )
}
function Rating(){
    return (
        <div className='w-60 h-fit pl-1 bg-[#004953] flex flex-col justify-start items-center rounded-2xl shadow-xl text-[#004953]'>
           <div className='bg-[#f1fff0] w-full h-20 rounded-xl px-6 py-2 flex justify-between items-center'>
            <div className=''>
                <h1 className='text-lg font-medium'>Rating</h1>
                <h1 className='text-2xl font-bold'>4.5</h1>
            </div>
            <div className='flex flex-1 flex-col justify-center items-end gap-2'>
                <Star />
                <div className='bg-[#00e357] w-full h-1 rounded-full'>
                    <div className='bg-[#004953] w-[90%] h-1 rounded-full'></div>
                </div>
            </div>
            
           </div>
        </div>
    )
}   

export {TotalOrdersCard,NewOrder,Earning,Rating}