import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const Dashboard = () => {

    return (
        <>
            {/* Dashboard Page */}
            <div className="container-fluid text-center w-100 mx-auto mt-5">
                <div>
                    <h1>Your Trip Plans</h1>
                    <button>Plan New Trip</button>
                </div>

                {/* dashboard items */}
                <div>

                </div>

            </div>
        </>
    )
}
    
export default Dashboard;