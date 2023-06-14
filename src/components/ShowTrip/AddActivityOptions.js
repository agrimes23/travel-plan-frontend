import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'
 
 
 const AddActivityOptions = (props) => {
     
    const [newTripDetails, setNewTripDetails] = useState({...props.tripPlan})
    // const navigate = useNavigate();
    

    const handleChange = (e) => {
        setNewTripDetails({...newTripDetails, [e.target.name]: e.target.value})
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        props.handleAddActivity(newTripDetails, props.tripId)
    }

 
 
     return (
         <>
            <div className="d-inline-block m-3">
                <h3>Add an Activity to the List Options:</h3>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="option-format">
                            <div className="d-inline-block row m-2">
                                <label htmlFor='Activty Name'>Activty Name</label>
                                <input name="actName" placeholder='activity name' value={newTripDetails.actName} onChange={handleChange}/>
                            </div>
                            <div className="d-inline-block row m-2">
                                <label htmlFor='Start Date'>Start Date</label>
                                <input name="startDate" type='date' placeholder='start date' value={newTripDetails.startDate} onChange={handleChange}/>
                            </div>
                            <div className="d-inline-block row m-2">
                                <label htmlFor='Site Link'>Site Link</label>
                                <input name="siteLink" placeholder='Site Link' value={newTripDetails.siteLink} onChange={handleChange}/>
                            </div>
                            <div className="d-inline-block row m-2">
                                <label htmlFor='Price'>Price</label>
                                <input name="price" placeholder='price' value={newTripDetails.price} onChange={handleChange}/>
                            </div>
                            <div className="d-inline-block row m-2">
                                <label htmlFor='Start Time'>Start Time (hh:mm AM/PM)</label>
                                <input name="startTime" type='time' placeholder='start time' value={newTripDetails.startTime} onChange={handleChange}/>
                            </div>
                            <div className="d-inline-block row m-2">
                                <label htmlFor='End Time'>End Time (hh:mm AM/PM)</label>
                                <input name="endTime" type='time' placeholder='End Time' value={newTripDetails.endTime} onChange={handleChange}/>
                            </div>
                        </div>
                        <button className="btn activity-btn my-3">Add Activity Options</button>
                    </form>
                </div>
            </div>
             
         </>
     )
 }
     
 export default AddActivityOptions;
 
 
 