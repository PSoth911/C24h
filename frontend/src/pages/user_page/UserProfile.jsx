import { useState } from "react";
import Navbar from "../../components/userComponent/HomepageComponent/Navbar";
import LeftSectionProfile from "../../components/userComponent/ProfileComponent/LeftSectionProfile";
import Orders from "../../components/userComponent/ProfileComponent/Orders";
import Favaurite from "../../components/userComponent/ProfileComponent/Favaurite";
import Payment from "../../components/userComponent/ProfileComponent/Payment";
import AddressBook from "../../components/userComponent/ProfileComponent/AddressBook";
import Setting from "../../components/userComponent/ProfileComponent/Setting";

const UserProfile = () => {
  const [activeMenu, setactiveMenu] = useState("Orders");

  const renderMenus = () => {
    switch (activeMenu) {
      case "Orders":
        return <Orders setactiveMenu={setactiveMenu} />;

      case "Favourite":
        return <Favaurite />;

      case "Payment":
        return <Payment />;

      case "AddressBook":
        return <AddressBook />;

      case "Setting":
        return <Setting />;

      default:
        return <Orders setactiveMenu={setactiveMenu} />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 grid grid-cols-5 gap-5 overflow-hidden">
        <LeftSectionProfile
          activeMenu={activeMenu}
          setactiveMenu={setactiveMenu}
        />

        <div className="col-span-4 p-10 overflow-y-auto">
          {renderMenus()}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;