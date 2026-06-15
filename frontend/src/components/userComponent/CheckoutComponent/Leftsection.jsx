import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus,faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Leftsection = () => {
  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      name: "Truffle Avo Bliss",
      price: 14.5,
      quantity: 1,
      dsc: "Double shot specialty roast with honeycomb-infused steamed milk.",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300",
    },
    {
      id: 2,
      name: "Velvet Acai Bowl",
      price: 11.2,
      quantity: 1,
      dsc: "Double shot specialty roast with honeycomb-infused steamed milk.",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
    },
    {
      id: 4,
      name: "Buttermilk Stack",
      price: 12.8,
      quantity: 1,
      dsc: "Double shot specialty roast with honeycomb-infused steamed milk.",
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=300",
    },
    {
      id: 5,
      name: "Chef Special Steak",
      price: 24.5,
      quantity: 1,
      dsc: "Premium steak cooked to perfection.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=300",
    },
  ]);

  const increaseQuantity = (id) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const deleteItem = (id) => {
    setOrderItems((prev) =>
        prev.filter((item) => item.id !== id)
    );
    };

  return (
    <div className="col-span-3">
    <div className="bg-gray-100  rounded-3xl shadow-xl border border-gray-100 p-5 h-100 mt-5 overflow-y-auto  scroll-smooth">
      <div className="flex flex-col gap-3">
        {orderItems.map((item) => (
          <div
            key={item.id}
            className="shadow-xl p-2">
            <div className="flex justify-between items-center gap-4">
              <div className="flex gap-4 flex-1 items-center">
                <img src={item.image}
                  alt={item.name}
                  className="w-25 h-25 rounded-xl object-cover"
                />
                <div className="w-full">
                  <div>
                        <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-lg">{item.name}</h4>
                            <button onClick={()=>deleteItem(item.id)}><FontAwesomeIcon className="hover:cursor-pointer text-gray-600 hover:text-black" icon={faTrash}/></button>
                        </div>
                        <p className="text-[#004953]">{item.dsc}</p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="font-bold text-[#004953] mt-3"> ${item.price.toFixed(2)}</p>
                    <div className="flex items-center bg-gray-400 px-1 justify-center rounded-full">
                        <button onClick={() => decreaseQuantity(item.id)}
                            className="w-5 h-5 text-[#004953] hover:cursor-pointer">
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="px-4 font-semibold text-[#004953]">{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}
                            className="w-5 h-5 text-[#004953] cursor-pointer">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        <div className="mt-5 flex gap-2 text-[#004953] items-center">
            <FontAwesomeIcon className="text-md" icon={faPlus}/>
            <p>Add more items on this Rastaurant</p>
        </div>
        <div className="mt-6">
            <h2 className="text-xl font-bold">You Might also Like</h2>
            <div className="grid grid-cols-3 h-15">

            </div>
        </div>
    </div>
  );
};

export default Leftsection;