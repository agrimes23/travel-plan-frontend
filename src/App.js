
import { Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Dashboard from './components/Dashboard'
import TripShowPage from './components/ShowTrip/TripShowPage'
import HomePage from './components/HomePage';
import axios from 'axios'

function App() {


  useEffect(() => {

  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/tripdetails" element={<TripShowPage />} />
      </Routes>
    </>
  )
}

export default App;
