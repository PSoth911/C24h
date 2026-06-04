import { useState,useEffect } from 'react'
import { ArrowDownRight } from 'lucide-react'
import DeliveryLogin from './pages/deliver/DeliveryLogin.jsx'
import DeliveryDashboard from './pages/deliver/DeliveryDashboard.jsx'
import { Route, Routes } from 'react-router-dom'
import DeliveryMap from './pages/deliver/DeliveryMap.jsx'
import DeliveryEarning from './pages/deliver/DeliveryEarning.jsx'
import DeliveryProfile from './pages/deliver/DeliveryProfile.jsx'

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
    </Routes>
      
  
  )
}

export default App
