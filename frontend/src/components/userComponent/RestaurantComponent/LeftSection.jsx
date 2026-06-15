import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faStar,
  faBurger,
  faMartiniGlass,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import Card from '../../userComponent/RestaurantComponent/Card'

const LeftSection = ({ activeCategory,cartitems,setcartitems  }) => {
  const categories = [
    {
      name: "Popular Items",
      icon: faFire,
    },
    {
      name: "Signatures",
      icon: faStar,
    },
    {
      name: "Side",
      icon: faBurger,
    },
    {
      name: "Drink",
      icon: faMartiniGlass,
    },
    {
      name: "Vegan",
      icon: faLeaf,
    },
  ];

  const handleScroll = (category) => {
  const element = document.getElementById(category);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <div className="w-full sticky top-3 flex flex-col gap-6">
      <div className="bg-white rounded-xl shadow-lg p-2">
        <h2 className="text-xl font-bold mb-5">
          Categories
        </h2>

        <div className="space-y-1.5">
          {categories.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg duration-200
                ${
                  activeCategory === item.name
                    ? "bg-[#004953] text-white"
                    : "bg-gray-100 hover:bg-[#004953] hover:text-white"
                }
              `}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <Card setcartitems={setcartitems} cartitems={cartitems}/>
      </div>
      
    </div>
  );
};

export default LeftSection;