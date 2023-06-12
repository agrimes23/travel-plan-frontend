import { useState, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ImageLogo from '../images/TravelPlannerdesign.png'


const Navbar = (props) => {

    const [loginStatus, setLoginStatus] = useState("hide-tab")
    
    // Temporary solution for now, to showcase my trip page. Will revert back to login when I have set up a secure login
    const navigate = useNavigate()
    const [user, setUser] = useState({username: 'FinnTheHuman123', password: 'asdfeee'})
    const handleClick = () => {
        props.handleLogin(user)
        navigate('/dashboard')
    }

    return (
        <>
            <nav className="navbar sticky-top p-3 navbar">
                <Link to='/'><img className="logo" src={ImageLogo} alt="logo-map-planner-img"/></Link>
                <div >
                    <ul className="nav navbar-nav navbar-right text-white mx-3">
                        <Link className=" text-decoration-none dash" onClick={handleClick} to='/dashboard'><li>My Dashboard</li></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}
    
export default Navbar;