import { useState,useEffect } from 'react'
import { ArrowDownRight } from 'lucide-react'
import DeliveryLogin from './pages/deliver/DeliveryLogin.jsx'
import { Route, Routes } from 'react-router-dom'

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
    <div>
      <div className='bg-amber-800'>
        <ArrowDownRight />
        {(typeof backendData.users === "undefined")? (
          <p>Loading...</p>
        ):(
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
      </div>
      <Routes>
        <Route path='/login' element={<DeliveryLogin/>}/>
      </Routes>
      
    </div>
  )
}

export default App
