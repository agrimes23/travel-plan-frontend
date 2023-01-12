import Dashboard from './components/Dashboard'
import { Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import { useEffect } from 'react';

function App() {


  useEffect(() => {

  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </>
  )
}

export default App;
