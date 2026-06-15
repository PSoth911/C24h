import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const NewMenu = () => {
    const foods = [
        {
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            name: "Dim Sum Palace",
            desc: "Authentic Cantonese flavors & artisanal craftsmanship in every bite.",
            special_offer: "35% off on your first order",
        },
        {
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            name: "Dim Sum Palace",
            desc: "Authentic Cantonese flavors & artisanal craftsmanship in every bite.",
            special_offer: "intro Offer: 20% off on your first order",
        },
        {
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            name: "Dim Sum Palace",
            desc: "Authentic Cantonese flavors & artisanal craftsmanship in every bite.",
            special_offer: "Free Side Dish with 1st order",
        }
    ]
  return (
    <div>
        <div className="px-15 mt-10 py-20 bg-gray-300 rounded-2xl">
            <div>
                <h1 className="text-black font-bold text-2xl p-4">New on Crave24H</h1>
            </div>
            <div className="flex gap-6 overflow-x-auto scrollbar-hide p-2">
                {foods.map((item) => (
                    <button key={item.name} className={`${item.name} relative w-155 shrink-0 bg-white rounded-3xl p-4 flex gap-4 items-start transition-all hover:scale-[1.03] hover:shadow-xl`}>
                        <div>
                            <img src={item.image} alt={item.name} className="w-40 h-35 object-cover rounded-3xl transition-all hover:scale-[1.01]"/>
                        <div className="absolute top-4 left-4 bg-[#004953] text-white px-3 py-0.5 font-sans rounded-br-[30px] rounded-tl-[25px]">
                            NEW
                        </div>
                        </div>
                        <div className="flex flex-col items-start">
                            <h2 className="text-lg font-bold">{item.name}</h2>
                            <p className="text-start text-sm text-gray-600">{item.desc}</p>
                            <div className="w-full flex items-center justify-between">
                                <p className="text-lg text-black-500 mt-2">{item.special_offer}</p>
                                <div className="w-10 h-10 bg-[#004953] rounded-full flex items-center hover:scale-[1.05] hover:cursor-pointer justify-center">
                                    <FontAwesomeIcon icon={faChevronRight} className="text-white" />
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default NewMenu
