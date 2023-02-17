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
import NewTrip from './components/NewTrip';

function App() {

  const [userPlans, setUserPlans] = useState([])
  const [tripPlan, setTripPlan] = useState({})

  // get user info + all saved plans
  const getUserPlans = (data) => {
    axios.get('http://localhost:8080/api/v1/userplans/' + data.id)
    .then((res) => setUserPlans(res.data),
    (err) => console.log(err),
    
    )
  }

  // create new user in db
  const handleCreate = (addUser) => {
    axios.post('http://localhost:8080/api/v1/userplans', addUser)
    .then((res) => {
      getUserPlans(res.data)
    })
  }

  const handleLogin = (data) => {
    axios.post('http://localhost:8080/api/v1/userplans/login', data)
    .then(response => setUserPlans(response.data))
  }

  //   // might need to redo
    const handleDelete = (event) => {
      axios.delete('http://localhost:8080/api/v1/userplans/' + event)
      .then((response) => {
        getUserPlans()
      })
    }
  
    // updates notes or state in the database
    const handleUpdate = (updatePlan) => {
      axios.put('http://localhost:8080/api/v1/userplans/' + updatePlan.id, updatePlan)
      .then((response) => {
        getUserPlans()
      })
    }



  useEffect(() => {



  }, [getUserPlans])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Dashboard handleDelete={handleDelete} setTripPlan={setTripPlan} userPlans={userPlans}/>}/>
        <Route path="/tripdetails" element={<TripShowPage tripPlan={tripPlan} userPlans={userPlans} />} />
        <Route path="/signup" element={<SignupPage handleCreate={handleCreate}/>} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/newtrip" element={<NewTrip handleUpdate={handleUpdate}/>} />
      </Routes>
    </>
  )
}

export default App;
