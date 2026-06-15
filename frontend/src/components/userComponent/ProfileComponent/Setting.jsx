import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from '../../../assets/image copy 27.png'
import {
  faUser,
  faBell,
  faShield,
  faTriangleExclamation,
  faSliders,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Setting = () => {
  const [open, setopen] = useState([])
  const [notificationSettings, setNotificationSettings] = useState({
      orderUpdates: true,
      promotions: true,
      newRestaurants: false,
      reviewReminders: false,
      appAnnouncements: true,
    });
  const [PreferenceSettings, setPreferenceSettings] = useState({
      Darkmode: true,
      PrivateOrderHistory: true,
    });
  const sections = [
    {
      name: "My Profile",
      icon: faUser,
    },
    {
      name: "Notifications",
      icon: faBell,
    },
    {
      name: "Preferences",
      icon: faSliders,
    },
    {
      name: "Security",
      icon: faShield,
    },
    {
      name: "Danger Zone",
      icon: faTriangleExclamation,
    },
  ];
    const notifications = [
    {
      key: "orderUpdates",
      title: "Order Updates",
      dsc: "Real-time status of your food deliveries.",
    },
    {
      key: "promotions",
      title: "Promotions & deals",
      dsc: "Exclusive discounts and seasonal offers.",
    },
    {
      key: "newRestaurants",
      title: "New restaurants",
      dsc: "Be the first to know about local launches.",
    },
    {
      key: "reviewReminders",
      title: "Review reminders",
      dsc: "A gentle nudge to share your experience.",
    },
    {
      key: "appAnnouncements",
      title: "App announcements",
      dsc: "Stay informed about new features and updates.",
    },
  ];
    const Preference = [
    {
      key: "Darkmode",
      title: "Dark mode",
      dsc: "Real-time status of your food deliveries.",
    },
    {
      key: "PrivateOrderHistory",
      title: "Private Order History",
      dsc: "Exclusive discounts and seasonal offers.",
    }
  ];
  const toggleSection = (sectionName) => {
    setopen((prev) => prev.includes(sectionName)
      ? prev.filter((item) => item !== sectionName) : [...prev, sectionName]
    );
  };
  const toggleNotification = (key) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const togglePreference = (key) => {
    setPreferenceSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <div className='p-5'>
      <h1 className='font-semibold text-[#004953] text-2xl'>Account Setting</h1>
      <p className='text-[#004953]'>Manage your profile, preferences, and security settings.</p>
      <div>
        {sections.map((s) => {
          const isOpen = open.includes(s.name);

          return (
            <div
              key={s.name}
              className="bg-white rounded-xl shadow-sm mt-4 mb-4 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(s.name)}
                className={`w-full flex items-center justify-between p-4 border-l-4 ${s.name === "Danger Zone" ? "border-red-500" : "border-teal-600"}`}>
                <div
                  className={`flex items-center gap-3 ${s.name === "Danger Zone" ? "text-red-600" : "text-gray-800"}`}>
                  <FontAwesomeIcon icon={s.icon} />
                  <span className="font-medium">{s.name}</span>
                </div>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
              </button>
              {isOpen && (
                <div className="border-l-4 p-5 border-teal-600 bg-gray-50">
                  {s.name === "My Profile" && (
                    <div>
                      <div className="flex gap-4 items-start">
                        <img
                          src={Profile}
                          alt="profile"
                          className="w-20 h-20 rounded-full border"
                        />

                        <div className="flex-1 grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm text-gray-500">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="w-full border rounded-lg p-2"
                              defaultValue="Daro Chhum"
                            />
                          </div>

                          <div>
                            <label className="text-sm text-gray-500">
                              Phone Number
                            </label>
                            <input
                              type="text"
                              className="w-full border rounded-lg p-2"
                              defaultValue="+855 12345678"
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label className="text-sm text-gray-500">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="w-full border rounded-lg p-2"
                              defaultValue="daro@example.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Loyalty Points Progress</span>
                          <span>1,250 / 2,000 pts</span>
                        </div>

                        <div className="w-full bg-gray-200 h-3 rounded-full">
                          <div className="bg-teal-700 h-3 rounded-full w-[62%]"></div>
                        </div>
                      </div>
                      <div className="flex gap-8 mt-8">
                            <button className="p-2 rounded-2xl bg-[#004953] text-white hover:cursor-pointer">Save Change</button>
                            <button className="hover:cursor-pointer">Cancel</button>
                      </div>
                    </div>
                  )}

                  {s.name === "Notifications" && (
                    <div className="flex flex-col gap-4">
                      {notifications.map((i)=>(
                        <div
                        key={i.key}
                        className="flex items-center border-b border-gray-400 justify-between w-full"
                        > 
                            <div className="flex flex-col">
                                <h2>{i.title}</h2>
                                <p className="text-gray-600">{i.dsc}</p>
                            </div>
                            <button
                              onClick={() => toggleNotification(i.key)}
                              className={`w-12 h-7 rounded-full p-1 transition-all ${ notificationSettings[i.key] ? "bg-teal-700" : "bg-gray-300"}`}
                            >
                              <div
                                className={`w-5 h-5 bg-white rounded-full transition-all ${ notificationSettings[i.key] ? "translate-x-5" : ""}`}
                              />
                            </button>
                        </div>

                      ))}
                    </div>
                  )}

                  {s.name === "Preferences" && (
                    <div>
                      <h3 className="font-semibold mb-2">
                        Preferences
                      </h3>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="gap-1 flex flex-col rounded-md ">
                          <label htmlFor="">Language</label>
                          <select  className="rounded-md p-2 border" >
                              <option>English(EN)</option>
                              <option>Khmer</option>
                         </select>
                        </div>
                        <div className=" gap-1 flex flex-col">
                            <label htmlFor="Currancy">Currancy</label>
                          <select className="rounded-md border p-2" >
                              <option>USD</option>
                              <option>Reil</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col mt-2 gap-4">
                        {Preference.map((i)=>(
                          <div
                          key={i.key}
                          className="flex items-center border-b border-gray-400 justify-between w-full"
                          > 
                              <div className="flex flex-col">
                                  <h2>{i.title}</h2>
                                  <p className="text-gray-600">{i.dsc}</p>
                              </div>
                              <button
                                onClick={() => togglePreference(i.key)}
                                className={`w-12 h-7 rounded-full p-1 transition-all ${ PreferenceSettings[i.key] ? "bg-teal-700" : "bg-gray-300"}`}
                              >
                                <div
                                  className={`w-5 h-5 bg-white rounded-full transition-all ${ PreferenceSettings[i.key] ? "translate-x-5" : ""}`}
                                />
                              </button>
                          </div>

                        ))}
                      </div>
                    </div>
                  )}

                  {s.name === "Security" && (
                    <div>
                      <h3 className="font-semibold mb-2">
                        Security Settings
                      </h3>

                      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
                        Change Password
                      </button>
                    </div>
                  )}

                  {s.name === "Danger Zone" && (
                    <div>
                      <h3 className="font-semibold text-gray-600">
                        <p>
                          The following actions are permanent and cannot be undone. Please proceed with
                          extreme caution. Once confirmed, your data will be queued for removal according to our
                          privacy policy.
                        </p>
                      </h3>

                     <div className="flex gap-5 mt-4">
                         <div className="border p-3 rounded-2xl">
                            <div>
                              <h1 className="font-bold text-xl">
                                Deactivate Account
                              </h1>
                              <p className="text-gray-500">
                                Temporarily disable your profile. You can reactivate it
                                anytime by logging back in. Your content will be hidden
                                from other users.
                              </p>
                            </div>
                            <div className="mt-4">
                              <button className="text-red-600 px-4 py-2 cursor-pointer rounded-lg">
                                Delete Account
                              </button>
                            </div>
                      </div>
                      <div className=" p-3 rounded-2xl border">
                            <div>
                              <h1 className="font-bold text-red-500 text-xl">
                                Delete Account Permanently
                              </h1>
                              <p className="text-gray-500">
                                This will permanently delete your account, orders, and
                                saved data. This action is final and your information cannot
                                be recovered.
                              </p>
                            </div>
                            <div>
                              <button className="bg-red-600 text-white mt-4 px-4 py-2 hover:cursor-pointer rounded-lg">
                                Delete Account
                              </button>
                            </div>
                      </div>
                     </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Setting;
