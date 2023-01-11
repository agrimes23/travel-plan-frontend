import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const Dashboard = () => {

    return (
        <>
            {/* Dashboard Page */}
            <div className="container-fluid text-center w-100 mx-auto mt-5">
                <div>
                    <h1>Your Trip Plans</h1>
                    <button className="btn btn-warning my-5"> + Plan a New Trip</button>
                </div>

                {/* dashboard items */}
                <div className="d-flex justify-content-center">
                    <div className='card border shadow-sm rounded w-50'>
                        <img />
                        <h2>Place Name</h2>

                    </div>
                </div>

            </div>
        </>
    )
}
    
export default Dashboard;