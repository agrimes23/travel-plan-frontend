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

    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    axios.get(`https://travel-planning-backend.herokuapp.com/api/v1/userplans/${data.id}`)
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
    const handleDelete = (event) => {
      axios.delete('https://travel-planning-backend.herokuapp.com/api/v1/userplans/' + event)
      .then((response) => {
        getUserPlans()
      })
    }
  
    // updates notes or state in the database
    const handleUpdate = (updatePlan) => {
      axios.put('https://travel-planning-backend.herokuapp.com/api/v1/userplans/addTrip/' + userPlans.id, updatePlan)
      .then((response) => {
        getUserPlans()
      })
    }

    const handleAddHotel = (addHotel, tripId) => {
      axios.put('https://travel-planning-backend.herokuapp.com/api/v1/userplans/addHotel/' + userPlans.id + "/" + tripId, addHotel)
      .then((response) => {
        getUserPlans()
      })
    }

    const handleAddActivity = (addActivity, tripId) => {
      axios.put('https://travel-planning-backend.herokuapp.com/api/v1/userplans/addActivity/' + userPlans.id + "/" + tripId, addActivity)
      .then((response) => {
        getUserPlans()
      })
    }

    const handleAddTransport = (addTransport, tripId) => {
      axios.put('https://travel-planning-backend.herokuapp.com/api/v1/userplans/addTransport/' + userPlans.id + "/" + tripId, addTransport)
      .then((response) => {
        getUserPlans()
      })
    }

    const handleAddFood = (addFood, tripId) => {
      axios.put('https://travel-planning-backend.herokuapp.com/api/v1/userplans/addFood/' + userPlans.id + "/" + tripId, addFood)
      .then((response) => {
        getUserPlans()
      })
    }
    const handleNewItinerary = (tripID, addItinerary) => {
      axios.put('https://travel-planning-backend.herokuapp.com/api/v1/userplans/createItinerary/' + userPlans.id + "/" + tripID,  addItinerary)
      .then((response) => {
        getUserPlans()
      })
    }


  useEffect(() => {



  }, [getUserPlans])

  return (
    <>
      <Navbar handleLogin={handleLogin} />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Dashboard handleDelete={handleDelete} setTripPlan={setTripPlan} userPlans={userPlans}/>}/>
        <Route path="/tripdetails" element={<TripShowPage handleNewItinerary={handleNewItinerary} tripPlan={tripPlan} userPlans={userPlans} handleAddHotel={handleAddHotel} handleAddActivity={handleAddActivity} handleAddFood={handleAddFood} handleAddTransport={handleAddTransport} />} />
        <Route path="/signup" element={<SignupPage handleCreate={handleCreate}/>} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/newtrip" element={<NewTrip handleUpdate={handleUpdate} userPlans={userPlans} />} />
      </Routes>
    </>
  )
}

export default App;
