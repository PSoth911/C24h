import { useState,useEffect } from 'react'
import { ArrowDownRight } from 'lucide-react'
import AuthLogin from './pages/auth/AuthLogin.jsx'
import AuthSignUp from './pages/auth/AuthSignUp.jsx'


import DeliveryDashboard from './pages/deliver/DeliveryDashboard.jsx'
import { Route, Routes } from 'react-router-dom'
import DeliveryMap from './pages/deliver/DeliveryMap.jsx'
import DeliveryEarning from './pages/deliver/DeliveryEarning.jsx'
import DeliveryProfile from './pages/deliver/DeliveryProfile.jsx'

// import axios from 'axios'
import { PATH } from './path.js'
import AdminProfile from './pages/admin/AdminProfile.jsx'
import AdminRestaurantManagement from './pages/admin/AdminRestaurantManagement.jsx'
import AdminUserManagement from './pages/admin/AdminUserManagement.jsx'
import AdminDeliveryManagement from './pages/admin/AdminDeliveryManagement.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'

// import Signup from './pages/auth/SignUp.jsx';
// import Login from './pages/auth/Login.jsx';
import HomePage from './pages/user_page/HomePage.jsx';
import AllFoodPage from './pages/user_page/AllFoodPage.jsx';
import Profile from './pages/user_page/UserProfile.jsx'
import RestaurantPage from './pages/user_page/RestaurantPage.jsx';
import CheckoutPage from './pages/user_page/CheckoutPage.jsx';
import AddAdressPage from './pages/user_page/AddAdressPage.jsx';
import SucessPaymentPage from './pages/user_page/SucessPaymentPage.jsx';
import TrackOrderPage from './pages/user_page/TrackOrderPage.jsx';
import PaymentPage from './pages/user_page/Payment.jsx';

import PortalLayout from './components/Seller/PortalLayout';
import Dashboard from './pages/seller/Dashboard';
import Orders from './pages/seller/Orders';
import MenuManagement from './pages/seller/MenuManagement';
import Analytics from './pages/seller/Analytics';
import Promotions from './pages/seller/Promotions';
import Settings from './pages/seller/Settings';

import './index.css';
import ProtectedRoute from './components/ProtectedRoute.jsx';

import { Navigate } from "react-router-dom";


function App() {
  
  return (
    <Routes>

        

      <Route path={PATH.AUTH.LOGIN} element={<AuthLogin/>}/>
      <Route path={PATH.AUTH.SIGNUP} element={<AuthSignUp/>}/>
      <Route path="/" element={<Navigate to={PATH.AUTH.LOGIN} replace/>}/>
=

      <Route path={PATH.DELIVERY.DASHBOARD} element={<ProtectedRoute role="driver"> <DeliveryDashboard/> </ProtectedRoute>} />
      <Route path={PATH.DELIVERY.MAP} element={<ProtectedRoute role="driver"> <DeliveryMap/> </ProtectedRoute>}/>
      <Route path={PATH.DELIVERY.EARNING} element={<ProtectedRoute role="driver"> <DeliveryEarning/> </ProtectedRoute>}/>
      <Route path={PATH.DELIVERY.PROFILE} element={<ProtectedRoute role="driver"> <DeliveryProfile/> </ProtectedRoute>}/>

      <Route path={PATH.ADMIN.PROFILE} element={<ProtectedRoute role="admin"> <AdminProfile/> </ProtectedRoute>}/>
      <Route path={PATH.ADMIN.RESTAURANTS} element={<ProtectedRoute role="admin"> <AdminRestaurantManagement/> </ProtectedRoute>}/>
      <Route path={PATH.ADMIN.USERS} element={<ProtectedRoute role="admin"> <AdminUserManagement/> </ProtectedRoute>}/>
      <Route path={PATH.ADMIN.DELIVERIES} element={<ProtectedRoute role="admin"> <AdminDeliveryManagement/> </ProtectedRoute>}/>
      <Route path={PATH.ADMIN.DASHBOARD} element={<ProtectedRoute role="admin"> <AdminDashboard/> </ProtectedRoute>}/>


      <Route path={PATH.USER.HOME} element={<ProtectedRoute role="customer"> <HomePage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.Profile} element={<ProtectedRoute role="customer"> <Profile/> </ProtectedRoute>}/>
      <Route path={PATH.USER.AllFood} element={<ProtectedRoute role="customer"> <AllFoodPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.Restaurant} element={<ProtectedRoute role="customer"> <RestaurantPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.Checkout} element={<ProtectedRoute role="customer"> <CheckoutPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.AddAdress} element={<ProtectedRoute role="customer"> <AddAdressPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.SucessPayment} element={<ProtectedRoute role="customer"> <SucessPaymentPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.Trackorder} element={<ProtectedRoute role="customer"> <TrackOrderPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.Payment} element={<ProtectedRoute role="customer"> <PaymentPage/> </ProtectedRoute>}/>

      
      <Route element={<ProtectedRoute role="restaurant_owner" loginPath={PATH.SELLER.LOGIN}><PortalLayout /></ProtectedRoute>}>
        <Route path={PATH.SELLER.DASHBOARD} element={<Dashboard />} />
        <Route path={PATH.SELLER.ORDERS} element={<Orders />} />
        <Route path={PATH.SELLER.MENU} element={<MenuManagement />} />
        <Route path={PATH.SELLER.ANALYTICS} element={<Analytics />} />
        <Route path={PATH.SELLER.PROMOTIONS} element={<Promotions />} />
        <Route path={PATH.SELLER.SETTINGS} element={<Settings />} />
      </Route>



    </Routes>
      
  
  )
}

export default App
