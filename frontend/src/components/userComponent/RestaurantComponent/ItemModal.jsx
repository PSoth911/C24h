import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faXmark,
  faPlus,
  faMinus
} from "@fortawesome/free-solid-svg-icons"
const ItemModal = ({ isOpen, onClose, food, qauntity,setqauntity,setcartitems }) => {
    const increaseQuantity = () => {
        setqauntity((i) =>i+1
        );
    };
    const decreaseQuantity = () => {
        setqauntity((i) =>(i>1 ? i-1 : 1)
        );
    };
    if (!isOpen || !food) return null;
    const Total = qauntity * parseFloat(food.price);
    const addToCart = () => {
    setcartitems((prev) => {
        const existing = prev.find((item) => item.id === food.id);
        if (existing) {
            return prev.map((item) =>
                item.id === food.id
                    ? { ...item, quantity: item.quantity + qauntity }
                    : item
            );
        }
        return [
            ...prev,
            {
                id: food.id,
                name: food.name,
                image: food.image,
                price: parseFloat(food.price),
                quantity: qauntity,
                option: "",
            },
        ];
    });

    onClose(); 
};
    return (
        <div className="fixed inset-0 bg-black/80 h-screen flex items-center justify-center ">
            <div className="bg-white px-7 py-5 rounded-xl w-110 overflow-y-auto h-150 relative">
                <button className="absolute right-1 top-0 hover:cursor-pointer" onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
                <img src={food.image}
                    alt={food.name}
                    className="w-full h-60 object-cover rounded-lg"/>
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold mt-4">{food.name}</h2>
                    <p className="font-bold text-[#004953] mt-3">${food.price}</p>
                </div>
                <p className="text-gray-500 mt-2">{food.dsc}</p>

                <h2 className="">Specail Suggestion</h2>
                <textarea rows={4} className="border w-full mt-2 rounded-md p-2" placeholder="Enter some Suggestion that you want"></textarea>

                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center mt-2">
                        <div onClick={decreaseQuantity} className="p-0.5 hover:cursor-pointer border rounded-full"><FontAwesomeIcon icon={faMinus}/></div>
                        <div>{qauntity}</div>
                        <div onClick={increaseQuantity} className="p-0.5 hover:cursor-pointer border rounded-full"><FontAwesomeIcon icon={faPlus}/></div>
                    </div>
                    <div>
                        Total:${Total.toFixed(2)}
                    </div>
                </div>
                <button className=" mt-2 p-2 bg-white border rounded-xl hover:bg-[#004953] hover:text-white duration-200 w-full text-[#004953] hover:cursor-pointer" onClick={addToCart}>ADD To CARD</button>
            </div>
        </div>
    );
};

export default ItemModal;