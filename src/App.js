import {useState} from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Dashboard from './components/Dashboard'
import TripShowPage from './components/ShowTrip/TripShowPage'
import HomePage from './components/HomePage';
import axios from 'axios'
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';

function App() {

  const [userPlans, setUserPlans] = useState([])
  const [tripPlans, setTripPlans] = useState({})

  // get user info + all saved plans
  const getUserPlans = (data) => {
    axios.get('https://travel-planning-backend.herokuapp.com/api/v1/userplans/' + data.id)
    .then((res) => setUserPlans(res.data),
    (err) => console.log(err),
    
    )
  }

  // create new user in db
  const handleCreate = (addUser) => {
    axios.post('https://travel-planning-backend.herokuapp.com/api/v1/userplans', addUser)
    .then((res) => {
      getUserPlans(res.data)
    })
  }

  const handleLogin = (data) => {
    axios.post('https://travel-planning-backend.herokuapp.com/api/v1/userplans/login', data)
    .then(response => setUserPlans(response.data))
  }

  //   // might need to redo
  //   const handleDelete = (event) => {
  //     axios.delete('https://weather-app-eevee.herokuapp.com/api/forecast/' + event.target.value)
  //     .then((response) => {
  //       getUserPlans()
  //     })
  //   }
  
  //   // updates notes or state in the database
  //   const handleUpdate = (editPlan) => {
  //     axios.put('https://weather-app-eevee.herokuapp.com/api/forecast/' + editPlan.id, editPlan)
  //     .then((response) => {
  //       getUserPlans()
  //     })
  //   }



  useEffect(() => {



  }, [getUserPlans])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Dashboard setTripPlans={setTripPlans} userPlans={userPlans}/>}/>
        <Route path="/tripdetails" element={<TripShowPage tripPlans={tripPlans} userPlans={userPlans} />} />
        <Route path="/signup" element={<SignupPage handleCreate={handleCreate}/>} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
      </Routes>
    </>
  )
}

export default App;
