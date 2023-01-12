import { useState, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ImageLogo from '../images/TravelPlannerdesign.png'


const Navbar = () => {

    return (
        <>
            <nav className="navbar sticky-top p-3 navbar">
                <Link to='/'><img className="logo" src={ImageLogo} alt="logo-map-planner-img"/></Link>
                <div>
                    <ul className="nav navbar-nav navbar-right text-white mx-3">
                        <Link className=" text-decoration-none dash" to='/dashboard'><li>My Dashboard</li></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}
    
export default Navbar;