import user from '../../../assets/image copy 27.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt ,faHeart,faMoneyCheck,faGear,faMap,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../path';
const LeftSectionProfile = ({activeMenu,setactiveMenu}) => {
    const navigate = useNavigate()
    const Menu =[
        {id :"Orders", name : "Orders",icon: faReceipt},
        {id :"Favourite",name : "Favourite",icon: faHeart},
        {id :"Payment", name : "Payment",icon: faMoneyCheck},
        {id :"AddressBook", name : "AddressBook",icon:faMap },
        {id :"Setting", name : "Setting",icon: faGear}, 
    ]

  return (
    <div className='col-span-1 h-full bg-gray-400 px-6 py-4 gap-20 flex flex-col justify-between '>
        <div>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center justify-center relative rounded-full p-0.5 border-black border-2'>
                    <img src={user} className='w-20 rounded-full' alt="" />
                    <div className='bg-[#004953] px-3.5 bottom-0.5 right-1 text-white rounded-2xl absolute'>Pro</div>
                </div>
                <div className='font-bold text-[#004953] text-2xl'>Hi Daro</div>
                <p className='text-gray-600'>Premium Member</p>
            </div>
            <div className='flex flex-col py-2 justify-center  w-full '>
                {Menu.map((item)=>(
                    <button
                    key={item.name} onClick={()=>setactiveMenu(item.id)}
                    className={`flex items-center gap-3 text-gray-800 justify-start p-3 rounded-xl hover:cursor-pointer ${activeMenu=== item.id ? "bg-[#004953] text-white " : "bg-transparent"}`}
                    >
                     <FontAwesomeIcon
                     icon={item.icon}
                     />
                     <span>{item.name}</span>   
                    </button>
                ))}
            </div>
        </div>
        <button onClick={()=>navigate(PATH.AUTH.LOGIN)} className='flex gap-2 items-center justify-center text-white bg-[#004953] hover:cursor-pointer hover:shadow-2xl hover:scale-[1.05] hover:text-black p-3 transition-all duration-300 rounded-2xl'>
            <FontAwesomeIcon
            icon={faRightFromBracket}
            />
        Logout
        </button>
      
    </div>
  )
}

export default LeftSectionProfile
