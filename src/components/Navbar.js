import { useState, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ImageLogo from '../images/TravelPlannerdesign.png'


const Navbar = () => {

    return (
        <>
            <nav className="navbar sticky-top p-3 navbar">
                <img className="logo" src={ImageLogo} alt="logo-map-planner-img"/>
                <div>
                    <ul className="nav navbar-nav navbar-right text-white mx-3">
                        <Link className=" text-decoration-none dash" to='/mydashboard'><li>My Dashboard</li></Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}
    
export default Navbar;