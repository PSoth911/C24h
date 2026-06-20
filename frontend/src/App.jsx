import { useState,useEffect } from 'react'
import { ArrowDownRight } from 'lucide-react'
import DeliveryLogin from './pages/auth/DeliveryLogin.jsx'
import DeliveryDashboard from './pages/deliver/DeliveryDashboard.jsx'
import { Route, Routes } from 'react-router-dom'
import DeliveryMap from './pages/deliver/DeliveryMap.jsx'
import DeliveryEarning from './pages/deliver/DeliveryEarning.jsx'
import DeliveryProfile from './pages/deliver/DeliveryProfile.jsx'

import axios from 'axios'
import { PATH } from './path.js'
import AdminProfile from './pages/admin/AdminProfile.jsx'
import AdminRestaurantManagement from './pages/admin/AdminRestaurantManagement.jsx'
import AdminUserManagement from './pages/admin/AdminUserManagement.jsx'
import AdminDeliveryManagement from './pages/admin/AdminDeliveryManagement.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminLogin from './pages/auth/AdminLogin.jsx'

import Signup from './pages/auth/SignUp.jsx';
import Login from './pages/auth/Login.jsx';
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


function App() {
  
  return (
    <Routes>
      
      <Route path={PATH.ADMIN.LOGIN} element={<AdminLogin/>}/>
      {/* <Route path={PATH.DELIVERY.LOGIN} element={<DeliveryLogin/>}/>
      <Route path={PATH.USER.LOGIN} element={<Login/>}/> */}
      {/* <Route path={PATH.USER.SIGNUP} element={<Signup/>}/> */}

      <Route path={PATH.DELIVERY.DASHBOARD} element={<ProtectedRoute role="delivery" loginPath={PATH.DELIVERY.LOGIN}> <DeliveryDashboard/> </ProtectedRoute>} />
      <Route path={PATH.DELIVERY.MAP} element={<ProtectedRoute role="delivery" loginPath={PATH.DELIVERY.LOGIN}> <DeliveryMap/> </ProtectedRoute>}/>
      <Route path={PATH.DELIVERY.EARNING} element={<ProtectedRoute role="delivery" loginPath={PATH.DELIVERY.LOGIN}> <DeliveryEarning/> </ProtectedRoute>}/>
      <Route path={PATH.DELIVERY.PROFILE} element={<ProtectedRoute role="delivery" loginPath={PATH.DELIVERY.LOGIN}> <DeliveryProfile/> </ProtectedRoute>}/>

      <Route path={PATH.ADMIN.PROFILE} element={<ProtectedRoute role="admin" loginPath={PATH.ADMIN.LOGIN}> <AdminProfile/> </ProtectedRoute>}/>
      <Route path={PATH.ADMIN.RESTAURANTS} element={<ProtectedRoute role="admin" loginPath={PATH.ADMIN.LOGIN}> <AdminRestaurantManagement/> </ProtectedRoute>}/>
      <Route path={PATH.ADMIN.USERS} element={<ProtectedRoute role="admin" loginPath={PATH.ADMIN.LOGIN}> <AdminUserManagement/> </ProtectedRoute>}/>
      <Route path={PATH.ADMIN.DELIVERIES} element={<ProtectedRoute role="admin" loginPath={PATH.ADMIN.LOGIN}> <AdminDeliveryManagement/> </ProtectedRoute>}/>
      <Route path={PATH.ADMIN.DASHBOARD} element={<ProtectedRoute role="admin" loginPath={PATH.ADMIN.LOGIN}> <AdminDashboard/> </ProtectedRoute>}/>

      
      <Route element={<ProtectedRoute role="seller" loginPath={PATH.SELLER.LOGIN}><PortalLayout /></ProtectedRoute>}>
        <Route path={PATH.SELLER.DASHBOARD} element={<Dashboard />} />
        <Route path={PATH.SELLER.ORDERS} element={<Orders />} />
        <Route path={PATH.SELLER.MENU} element={<MenuManagement />} />
        <Route path={PATH.SELLER.ANALYTICS} element={<Analytics />} />
        <Route path={PATH.SELLER.PROMOTIONS} element={<Promotions />} />
        <Route path={PATH.SELLER.SETTINGS} element={<Settings />} />
      </Route>

      <Route path={PATH.USER.HOME} element={<ProtectedRoute role="customer" loginPath={PATH.USER.LOGIN}> <HomePage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.Profile} element={<ProtectedRoute role="customer" loginPath={PATH.USER.LOGIN}> <Profile/> </ProtectedRoute>}/>
      <Route path={PATH.USER.AllFood} element={<ProtectedRoute role="customer" loginPath={PATH.USER.LOGIN}> <AllFoodPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.Restaurant} element={<ProtectedRoute role="customer" loginPath={PATH.USER.LOGIN}> <RestaurantPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.Checkout} element={<ProtectedRoute role="customer" loginPath={PATH.USER.LOGIN}> <CheckoutPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.AddAdress} element={<ProtectedRoute role="customer" loginPath={PATH.USER.LOGIN}> <AddAdressPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.SucessPayment} element={<ProtectedRoute role="customer" loginPath={PATH.USER.LOGIN}> <SucessPaymentPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.Trackorder} element={<ProtectedRoute role="customer" loginPath={PATH.USER.LOGIN}> <TrackOrderPage/> </ProtectedRoute>}/>
      <Route path={PATH.USER.Payment} element={<ProtectedRoute role="customer" loginPath={PATH.USER.LOGIN}> <PaymentPage/> </ProtectedRoute>}/>

    </Routes>
      
  
  )
}

export default App
