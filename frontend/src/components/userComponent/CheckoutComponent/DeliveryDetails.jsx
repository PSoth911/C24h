import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBriefcase,
  faCirclePlus,
  faCheck,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import PATH from "../../../path/path";

const DeliveryDetails = () => {
  const addresses = [
    {
      id: 1,
      type: "Home",
      icon: faHouse,
      address1: "248 Queen Street, Apt 4B",
      address2: "Melbourne, VIC 3000",
    },
    {
      id: 2,
      type: "Office",
      icon: faBriefcase,
      address1: "72 Collins St, Level 12",
      address2: "Melbourne, VIC 3000",
    },
  ];

  const [selectedAddress, setSelectedAddress] = useState(1);
  const navigate = useNavigate()

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 shadow-2xl rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Delivery Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {addresses.map((address) => (
              <div
                key={address.id}
                onClick={() => setSelectedAddress(address.id)}
                className={`relative rounded-3xl p-5 bg-white cursor-pointer transition-all
                  ${
                    selectedAddress === address.id
                      ? "border-2 border-teal-700"
                      : "border-2 border-pink-200"
                  }`}
              >
                {selectedAddress === address.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-teal-700 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-white text-xs"
                    />
                  </div>
                )}

                <FontAwesomeIcon
                  icon={address.icon}
                  className={`text-lg mb-3 ${
                    selectedAddress === address.id
                      ? "text-teal-700"
                      : "text-gray-500"
                  }`}
                />

                <h3 className="font-semibold text-gray-800 mb-2">
                  {address.type}
                </h3>

                <p className="text-gray-600">
                  {address.address1}
                </p>

                <p className="text-gray-600">
                  {address.address2}
                </p>
              </div>
            ))}

            <div className="border-2 border-dashed border-pink-200 rounded-3xl p-10 flex flex-col items-center justify-center text-center hover:bg-white transition cursor-pointer">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="text-gray-500 text-2xl mb-3"
              />

              <p className="text-gray-600">
                Add Address
              </p>
            </div>
          </div>

          <button onClick={()=>navigate(PATH.USER.Payment)} className="w-full mt-12 bg-teal-800 hover:cursor-pointer text-white py-4 rounded-full shadow-lg hover:bg-teal-900 transition">
            Continue to Payment
          </button>
        </div>

        <div className="bg-white border border-pink-200 rounded-4xl p-8 h-fit">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Summary
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-gray-700">$32.50</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="text-green-500 font-semibold">
                FREE
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Tax</span>
              <span className="text-gray-700">$2.80</span>
            </div>
          </div>

          <hr className="my-6 border-pink-100" />

          <div className="flex justify-between items-center mb-10">
            <span className="text-2xl font-bold text-gray-800">
              Total
            </span>

            <span className="text-3xl font-bold text-teal-800">
              $35.30
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FontAwesomeIcon icon={faLock} />
            <span>
              Secure checkout powered by Stripe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;