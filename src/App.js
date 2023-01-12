
import { Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Dashboard from './components/Dashboard'
import TripShowPage from './components/TripShowPage'

function App() {


  useEffect(() => {

  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/tripdetails" element={<TripShowPage />} />
      </Routes>
    </>
  )
}

export default App;
