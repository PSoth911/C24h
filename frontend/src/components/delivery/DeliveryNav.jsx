import {NavLink} from 'react-router-dom'
import {EggFried,Bell,Torus,X} from 'lucide-react'
import { PATH } from '../../path.js'

export default function DeliveryNav(){
    return(
        <div className="w-full h-20 ">
            <div className="lg:hidden flex flex-col w-full h-full">
                <div className="bg-pink-500 w-full h-full flex items-center justify-center">
                    <h1>this is Mobile layout</h1>
                </div>
            </div>

            <div className="hidden lg:flex justify-between items-center w-full h-full bg-white px-6">
                <NavLink to={PATH.DELIVERY.DASHBOARD} className='flex justify-center items-center gap-2 text-[#004953]'>
                    <EggFried size={35} />
                    <h1 className='text-2xl font-medium'>C24h</h1>
                </NavLink>

                    
                <div className='flex justify-center items-center gap-2'>
                    <div className='border border-[#62ff00] px-3 py-1 rounded-4xl text-[#004953] font-medium flex justify-center items-center gap-1'>
                        <Torus size={20} className='text-[#62ff00]'/>
                        <h1 className='text-sm'>Online</h1> 
                    </div>
                    {/* <div className='border border-[#aeaeae] px-3 py-1 rounded-4xl text-[#aeaeae] font-medium flex justify-center items-center gap-1'>
                        <X size={20} className='text-red-600'/>
                        <h1 className='text-sm'>Offline</h1>
                    </div> */}  
                    <button className='bg-[#004953] text-white p-2 rounded-full'><Bell size={20} /></button>
                </div>
                        
                
                
            </div>
        </div>
    )
}