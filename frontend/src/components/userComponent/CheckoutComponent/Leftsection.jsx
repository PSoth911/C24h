import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import placeholderFood from "../../../assets/image copy 2.png";
import { useEffect, useState } from "react";

import {
  getCart,
  updateCartItem,
  deleteCartItem,
} from "../../../service/cartService";
import Loading from "../../../pages/user_page/LoadingPage";
import { useNavigate } from "react-router-dom";
import { getProductsByRestaurant } from "../../../service/productService";

const Leftsection = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [restaurantId, setRestaurantId] = useState(null); 
  const [suggestProducts, setSuggestProducts] = useState([]);

  const loadCart = async () => {
    try {
      const res = await getCart();

      // backend returns cart.CartItems
      const items = res.data.cart.CartItems || [];

      setOrderItems(items);

      if (items.length > 0) {
        const restaurantId = items[0].Product.restaurant_id;

        setRestaurantId(restaurantId);

        const productRes = await getProductsByRestaurant(restaurantId);

        const suggestions = productRes.data.products
          .filter(
            (p) =>
              !items.some(
                (cartItem) => cartItem.product_id === p.product_id
              )
          )
          .slice(0, 3);

        setSuggestProducts(suggestions);
      }
    } catch (err) {
      console.log(err);

      if (err.response?.status === 404) {
        setOrderItems([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  // Increase quantity
  const increaseQuantity = async (item) => {
    try {
      await updateCartItem(item.cart_item_id, {
        quantity: item.quantity + 1,
      });

      loadCart();
    } catch (err) {
      console.log(err);
    }
  };

  // Decrease quantity
  const decreaseQuantity = async (item) => {
    try {
      if (item.quantity === 1) {
        await deleteCartItem(item.cart_item_id);
      } else {
        await updateCartItem(item.cart_item_id, {
          quantity: item.quantity - 1,
        });
      }

      loadCart();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete item
  const removeItem = async (item) => {
    try {
      await deleteCartItem(item.cart_item_id);

      loadCart();
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <div> <Loading /></div>;
  }

  return (
    <div className="col-span-3">
      <div className="bg-gray-100 rounded-3xl shadow-xl border border-gray-100 p-5 h-[500px] overflow-y-auto">

        {orderItems.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            Your cart is empty.
          </div>
        ) : (
          <div className="flex flex-col gap-3">

            {orderItems.map((item) => (
              <div
                key={item.cart_item_id}
                className="shadow-xl bg-white rounded-xl p-3"
              >
                <div className="flex gap-4">
                  <img
                    src={item.Product.image ? `http://localhost:5000/uploads/${item.Product.image}` : placeholderFood}
                    alt={item.Product.product_name}
                    className="w-24 h-24 rounded-xl object-cover"
                    onError={(e) => { e.target.src = placeholderFood; }}
                  />

                  <div className="flex-1">

                    <div className="flex justify-between">

                      <h4 className="font-semibold text-lg">
                        {item.Product.product_name}
                      </h4>

                      <button
                        onClick={() => removeItem(item)}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-gray-500 hover:text-red-500"
                        />
                      </button>

                    </div>

                    <p className="text-[#004953] mt-2">
                      ${Number(item.price).toFixed(2)}
                    </p>

                    <div className="flex justify-between items-center mt-4">

                      <div className="flex items-center bg-gray-200 rounded-full px-2">

                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="w-7 h-7"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>

                        <span className="px-4 font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item)}
                          className="w-7 h-7"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>

                      </div>

                      <div className="font-bold text-[#004953]">
                        $
                        {(
                          Number(item.price) *
                          Number(item.quantity)
                        ).toFixed(2)}
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>

      <button
        onClick={() => navigate(`/restaurant/${restaurantId}`)}
        className="mt-6 w-full bg-[#004953] text-white py-3 rounded-xl hover:bg-[#00343b] transition"
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add More Items
      </button>

      <div className="mt-8">
        <div className="grid grid-cols-3 gap-4">
          {suggestProducts.map((product) => (
            <div
              key={product.product_id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
              onClick={() => navigate(`/restaurant/${restaurantId}`)}
            >
              <img
                src={product.image ? `http://localhost:5000/uploads/${product.image}` : placeholderFood}
                className="w-full h-28 object-cover rounded-t-xl"
                alt={product.product_name}
                onError={(e) => { e.target.src = placeholderFood; }}
              />

              <div className="p-3">
                <h3 className="font-semibold line-clamp-1">
                  {product.product_name}
                </h3>

                <p className="text-[#004953] font-bold mt-1">
                  ${Number(product.price).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leftsection;