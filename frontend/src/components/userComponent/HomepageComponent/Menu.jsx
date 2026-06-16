import {useState} from 'react'
const Menu = () => {
  const [active, setactive] = useState('')
  const items = ['All Foods', 'Restaurants', 'Trending', 'Discounts', 'Top Rate', 'Fast delivery', 'New arrivals','The best']
  return (
    <div>
        <ul className="flex gap-4 py-12 px-14 text-nowrap text-sm text-black">
            {items.map((item, index) => (
                <li key={index} className={active === item ? 'active' : '' } onClick={() => setactive(item)}
                style={{ cursor: 'pointer', padding: '10px 46px',borderRadius:'20px', backgroundColor: active === item ? '#004953' : '#EFECFF' }}
                >
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Menu
