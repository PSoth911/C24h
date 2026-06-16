import { useNavigate } from "react-router-dom"
import {PATH} from "../../../path.js";
const Rightsection = () => {
const navigate = useNavigate()
  const Subtotal = 46.90
  const DeliveryFee = 46.90
  const SeviceFee = 46.90
  const Total = Subtotal+DeliveryFee+SeviceFee
    return (
    <div className="p-5 flex col-span-2 h-130 flex-col gap-8 bg-gray-100 shadow-2xl rounded-2xl">
        <h2 className="text-2xl font-bold">Order Summury</h2>
        <div className='flex flex-col gap-1 text-[#004953]'>
            <div className="flex justify-between">
                <p>SubTotal: </p>
                ${Subtotal}
            </div>
            <div className="flex justify-between">
                <p>Delevery Fee: </p>
                ${DeliveryFee}
            </div>
            <div className="flex justify-between">
                <p>Service Fee: </p>
                <p>${SeviceFee}</p>
            </div>
        </div>
        <div className="text-[#004953]">
            <label htmlFor="">Promo Code</label>
            <div className="p-2 w-full flex justify-between gap-8">
                <input className="w-full p-2 border rounded-2xl" type="text" placeholder='Enter The Code ' />
                <button className="px-4 hover:cursor-pointer bg-[#004953] text-white rounded-xl">Apply</button>
            </div>
        </div>
        <div className="flex justify-between">
            <h2>Total</h2>
            <h2>${Total}</h2>
        </div>
        <p className="p-1 bg-gray-400 shadow-2xl text-center rounded-2xl">Arriving Time in 25-20mn</p>
        <button onClick={()=>navigate(PATH.USER.AddAdress)} className="p-2 bg-[#004953] rounded-2xl text-white hover:bg-gray-800 hover:cursor-pointer">Go to Checkout</button>
    </div>
  )
}

export default Rightsection
