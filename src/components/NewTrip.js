import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'


const NewTrip = (props) => {
    const newEntry = props.userPlans.tripPlans.length
    const [newTripDetails, setNewTripDetails] = useState({...props.userPlans.tripPlans[newEntry]})
    const navigate = useNavigate();
    

    const handleChange = (e) => {
        setNewTripDetails({...newTripDetails, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdate(newTripDetails)
        navigate('/dashboard')
    }

    // console.log("helloooo " + props.userPlans.tripPlans[0].estBud)

    return (
        <>
            <div className="container-fluid">
                <div className='container row m-auto mt-5 d-flex justify-content-center'>
                     
                    <div className="col d-flex justify-content-center text-center mt-5 p-2">
                        <form onSubmit={handleSubmit} className='row'>

                            <label htmlFor='id'>Please write: 0{newEntry + 1}</label>
                            <input placeholder='id' name="id" value={newTripDetails.id} onChange={handleChange} />

                            <label htmlFor='enter trip location'>Enter Trip Location </label>
                            <input placeholder='city, town, country etc' name="placeName" value={newTripDetails.placeName} onChange={handleChange} />

                            <label htmlFor='enter trip start date'>Enter Trip Start Date </label>
                            <input placeholder='the day you start your trip' name="tripStart" value={newTripDetails.tripStart} onChange={handleChange} />

                            <label htmlFor='enter trip end date'>Enter Trip End Date </label>
                            <input placeholder='the day you get back' name="tripEnd" value={newTripDetails.tripEnd} onChange={handleChange} />

                            <label htmlFor='enter estimated budget'>Enter Estimated Budget </label>
                            <input placeholder='budget for trip' name="estBud" value={newTripDetails.estBud} onChange={handleChange} />

                            <div className="d-flex justify-content-center align-items-center">
                                <input className="btn btn-info mt-5 " type="submit"/>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
    
export default NewTrip;