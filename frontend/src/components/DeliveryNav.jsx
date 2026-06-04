import {NavLink} from 'react-router-dom'
import {UserRound,EggFried} from 'lucide-react'

export default function DeliveryNav(){
    return(
        <div className="w-full h-20">
            <div className="lg:hidden flex flex-col w-full h-full">
                <div className="bg-pink-500 w-full h-full flex items-center justify-center">
                    <h1>this is Mobile layout</h1>
                </div>
            </div>

            <div className="hidden lg:flex justify-between items-center w-full h-full bg-white px-20">
                <NavLink to='/dashboard' className='flex justify-center items-center gap-2 text-[#004953]'>
                    <EggFried size={35} />
                    <h1 className='text-2xl font-medium'>C24h</h1>
                </NavLink>
                <nav className="flex justify-center items-center gap-32 text-[#aeaeae]">
                    <NavLink to='/dashboard' className={({isActive})=>isActive?"text-[#004953]":""}>Dashboard</NavLink>
                    <NavLink to='/map' className={({isActive})=>isActive?"text-[#004953]":""}>Map</NavLink>
                    <NavLink to='/earning' className={({isActive})=>isActive?"text-[#004953]":""}>Earning</NavLink>
                </nav>
                <NavLink to='/profile' className="flex justify-center items-center gap-2 bg-[#004953] text-[#ADFF2F] pl-4 pr-3 py-1 rounded-2xl shadow-lg hover:bg-white hover:text-[#004953] hover:border hover:border-[#004953]">
                    <h1>Profile</h1>
                    <UserRound size={20} />
                </NavLink>
                
            </div>
        </div>
    )
}