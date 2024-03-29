import { useState, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'


const Dashboard = (props) => {

    const [showModel, setShowModel] = useState("hide-tab")
    const navigate = useNavigate()

    const handleNewClick = () => {
        navigate("/newtrip")
    }

    const handleTripClick = (plan) => {
        props.setTripPlan(plan)
        navigate("/tripdetails")
    }

    const handleDeleteClick = () => {
        setShowModel("show-tab arrange-Model")
    }

    const yesClick = () => {
        props.handleDelete(props.userPlans.id)
        navigate("/")
    }

    const noClick = () => {
        setShowModel("hide-tab")
    }


    return (
        <>
            {/* Dashboard Page */}
            <div className="container-fluid w-100 mx-auto mt-5">
                <div className="text-center">
                    <h1>Your Trip Plans</h1>
                    <button className="btn zoom btn-warning my-5" onClick={handleNewClick}> + Plan a New Trip</button>
                </div>


                <div className="container-fluid d-flex dash-list">
                    <div className="row justify-content-center">
                    {/* dashboard items */}

                                {props.userPlans.tripPlans ? props.userPlans.tripPlans.map((plan) => {
                                    return(
                                        <div key={plan.id} onClick={() => {handleTripClick(plan)} } className='m-3 zoom card dash-card border d-flex shadow-sm rounded'>
                                            <img className="trip-image-dash" src="https://images.freeimages.com/clg/istock/previews/9969/99696851-location-flat-icon-travel-map-and-pin-vector-illustration.jpg" />
                                            <div className="d-flex p-3 flex-row justify-content-around py-4">
                                            <div className="dash-items text-left">
                                                <h3>{plan.placeName}</h3>
                                            </div>
                                            
                                            <div className="dash-items text-left">
                                                <h4>{plan.tripStart} - {plan.tripEnd}</h4>
                                                <h4>${plan.estBud}</h4>
                                            </div>
                                        </div>
                                    </div>

                                    )
                                }) : null }
                                

                        

                    </div>
                    
                </div>
                <div className="m-auto text-center">
                    <button className="btn btn-danger m-5" onClick={handleDeleteClick}>Delete Account</button>
                </div>
                
                    <div className={showModel}>
                        <div className="text-center bg-white border p-5 w-75 m-auto">
                            <h3>Are you sure you want to delete your account?</h3>
                            <div className="d-inline-block m-3">
                                <button className="btn btn-danger" onClick={yesClick}>Yes, please delete</button>
                            </div>
                            <div className="d-inline-block m-3">
                                <button className="btn btn-warning" onClick={noClick}>No, I want to keep this account</button>
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}
    
export default Dashboard;