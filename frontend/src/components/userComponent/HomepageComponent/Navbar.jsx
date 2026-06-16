import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCartShopping,
  faUser,
  faLocationDot,
  faChevronDown
  
} from '@fortawesome/free-solid-svg-icons'
import logo from '../../../assets/image copy 28.png'
import { useNavigate } from 'react-router-dom'
import PATH from '../../../path/path'
const Navbar = () => {
  const navigate =useNavigate()
  return (
    <div className="navbar flex justify-between px-12 rounded-2xl py-3 items-center bg-[#FFF8EF] text-black sahadow-lg">
        <div className='flex items-center'>
          <img className='w-10' src={logo} alt="" />
          <div className="text-[#004953] text-2xl font-bold">C24h</div>
        </div>
        <div className="nav-links">
            <ul className="flex gap-6">
                <li onClick={()=>navigate(PATH.USER.HOME)} className='hover:cursor-pointer hover:underline text-gray-600'>Home</li>
                <li onClick={()=>navigate(PATH.USER.AllFood)} className='hover:cursor-pointer hover:underline text-gray-600'>All Food</li>
                <li className='hover:cursor-pointer hover:underline text-gray-600'>Restaurant</li>
            </ul>
        </div>
        <div className="list-none nav-icons flex gap-4 items-center">
          <div className='border flex gap-2 items-center border-[#004953] rounded-2xl p-1 text-sm text-[#004953]'>
            <FontAwesomeIcon icon={faLocationDot}/>
            Location
            <li className='hover:cursor-pointer'><FontAwesomeIcon icon={faChevronDown} /></li>
          </div>
            <div className='list-none nav-icons flex gap-4 items-center'>
              <li onClick={()=>navigate(PATH.USER.Checkout)} className='hover:cursor-pointer'><FontAwesomeIcon icon={faCartShopping} /></li>
              <div className='bg-[#004953] p-2 rounded-xl'>
                <li onClick={()=>navigate(PATH.USER.Profile)} className='hover:cursor-pointer text-white'><FontAwesomeIcon icon={faUser} /></li>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
