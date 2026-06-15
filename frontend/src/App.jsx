import { useState,useEffect } from 'react'
import { ArrowDownRight } from 'lucide-react'
import DeliveryLogin from './pages/deliver/DeliveryLogin.jsx'
import DeliveryDashboard from './pages/deliver/DeliveryDashboard.jsx'
import { Route, Routes } from 'react-router-dom'
import DeliveryMap from './pages/deliver/DeliveryMap.jsx'
import DeliveryEarning from './pages/deliver/DeliveryEarning.jsx'
import DeliveryProfile from './pages/deliver/DeliveryProfile.jsx'
import Signup from './pages/user_page/SignUp.jsx';
import Login from './pages/user_page/Login.jsx';
import HomePage from './pages/user_page/HomePage.jsx';
import AllFoodPage from './pages/user_page/AllFoodPage.jsx';
import Profile from './pages/user_page/UserProfile.jsx'
import RestaurantPage from './pages/user_page/RestaurantPage.jsx';
import CheckoutPage from './pages/user_page/CheckoutPage.jsx';
import AddAdressPage from './pages/user_page/AddAdressPage.jsx';
import SucessPaymentPage from './pages/user_page/SucessPaymentPage.jsx';
import TrackOrderPage from './pages/user_page/TrackOrderPage.jsx';
import PaymentPage from './pages/user_page/Payment.jsx';
import PATH from './path/path';
import './index.css';

function App() {
  const [backendData, setBackendData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      });
  }, []);
  return (
    <Routes>
        {/* <div className='bg-amber-800'>
          <ArrowDownRight />
          {(typeof backendData.users === "undefined")? (
            <p>Loading...</p>
          ):(
            backendData.users.map((user, i) => (
              <p key={i}>{user}</p>     
            ))
          )}
        </div> */}

      <Route path='/login' element={<DeliveryLogin/>}/>
      <Route path='/dashboard' element={<DeliveryDashboard/>}/>
      <Route path='/map' element={<DeliveryMap/>}/>
      <Route path='/earning' element={<DeliveryEarning/>}/>
      <Route path='/profile' element={<DeliveryProfile/>}/>
      <Route path={PATH.USER.HOME} element={<HomePage />}>
        </Route>
        <Route path={PATH.USER.SIGNUP} element={<Signup />}>
        </Route>
        <Route path={PATH.USER.LOGIN} element={<Login />}>
        </Route>
        <Route path={PATH.USER.AllFood} element={<AllFoodPage />}>
        </Route>
        <Route path={PATH.USER.Profile} element={<Profile />}>
        </Route>
        <Route path={PATH.USER.Restaurant} element={< RestaurantPage />}>
        </Route>
        <Route path={PATH.USER.Checkout} element={< CheckoutPage />}>
        </Route>
        <Route path={PATH.USER.AddAdress} element={< AddAdressPage />}>
        </Route>
        <Route path={PATH.USER.SucessPayment} element={< SucessPaymentPage />}>
        </Route>
        <Route path={PATH.USER.Trackorder} element={< TrackOrderPage />}>
        </Route>
        <Route path={PATH.USER.Payment} element={< PaymentPage />}>
        </Route>
    </Routes>
      
  
  )
}

export default App
