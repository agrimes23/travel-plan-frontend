import useState from 'react'
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

  // const [userPlans, setUserPlans] = useState([])


  // // get user info + all saved plans
  // const getUserPlans = (userId) => {
  //   axios.get('http://localhost:8080/' + userId)
  //   .then((res) => setUserPlans(res.data),
  //   (err) => console.log(err)
  //   )
  // }

  // // create new user in db
  // const handleCreate = (addUser) => {
  //   axios.post('http://localhost:8080/', addUser)
  //   .then((res) => {
  //     getUserPlans()
  //   })
  // }

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

  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/tripdetails" element={<TripShowPage />} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default App;
