import { useState,useEffect } from 'react'
import { ArrowDownRight } from 'lucide-react'
import DeliveryLogin from './pages/deliver/DeliveryLogin.jsx'
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
import AdminLogin from './pages/admin/AdminLogin.jsx'

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

      <Route path={PATH.DELIVERY.LOGIN} element={<DeliveryLogin/>}/>
      <Route path={PATH.DELIVERY.DASHBOARD} element={<DeliveryDashboard/>}/>
      <Route path={PATH.DELIVERY.MAP} element={<DeliveryMap/>}/>
      <Route path={PATH.DELIVERY.EARNING} element={<DeliveryEarning/>}/>
      <Route path={PATH.DELIVERY.PROFILE} element={<DeliveryProfile/>}/>

      <Route path={PATH.ADMIN.PROFILE} element={<AdminProfile/>}/>
      <Route path={PATH.ADMIN.RESTAURANTS} element={<AdminRestaurantManagement/>}/>
      <Route path={PATH.ADMIN.USERS} element={<AdminUserManagement/>}/>
      <Route path={PATH.ADMIN.DELIVERIES} element={<AdminDeliveryManagement/>}/>
      <Route path={PATH.ADMIN.DASHBOARD} element={<AdminDashboard/>}/>
      <Route path={PATH.ADMIN.LOGIN} element={<AdminLogin/>}/>

    </Routes>
      
  
  )
}

export default App
