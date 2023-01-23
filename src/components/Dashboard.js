import { useState, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Dashboard = (props) => {


    const navigate = useNavigate()

    const handleClick = (plan) => {
        props.setTripPlans(plan)
        navigate("/tripdetails/")
    }

    useEffect(() => {

    }, [])

    return (
        <>
            {/* Dashboard Page */}
            <div className="container-fluid w-100 mx-auto mt-5">
                <div className="text-center">
                    <h1>Your Trip Plans</h1>
                    <button className="btn zoom btn-warning my-5" onClick={handleClick}> + Plan a New Trip</button>
                </div>

                {/* dashboard list */}
                <div className="container-fluid d-flex dash-list">
                    <div className="row justify-content-center">
                    {/* dashboard items */}

            
                            

                                {props.userPlans.tripPlans?.map((plan) => {
                                    return(
                                        <div onClick={() => {handleClick(plan)} } className='m-3 zoom card dash-card border d-flex shadow-sm rounded'>
                                            <img className="trip-image-dash" src="https://images.freeimages.com/clg/istock/previews/9969/99696851-location-flat-icon-travel-map-and-pin-vector-illustration.jpg" />
                                            <div className="d-flex p-3 flex-row justify-content-around py-4">
                                            <div className="text-left">
                                                <h3>{plan.TripDetails.placeName}</h3>
                                            </div>
                                            
                                            <div className="text-left">
                                                <h4>{plan.TripDetails.tripStart} - {plan.TripDetails.tripEnd}</h4>
                                                <h4>{plan.TripDetails.EstBud}</h4>
                                            </div>
                                        </div>
                                    </div>

                                    )
                                })

                                }
                                

                        


                    </div>
                </div>

            </div>
        </>
    )
}
    
export default Dashboard;