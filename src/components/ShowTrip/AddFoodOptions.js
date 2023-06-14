import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'
 
 
 const AddFoodOptions = (props) => {
     
    const [newTripDetails, setNewTripDetails] = useState({...props.tripPlans})
    // const navigate = useNavigate();
    

    const handleChange = (e) => {
        setNewTripDetails({...newTripDetails, [e.target.name]: e.target.value})
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        props.handleAddFood(newTripDetails, props.tripId)
    }

 
 
     return (
         <>
           <div className="d-inline-block m-3">
                            <h3>Add Food to the List Options:</h3>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="option-format">
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Food Place Name'>Food Place Name</label>
                                            <input name="foodName" value={newTripDetails.foodName} onChange={handleChange} placeholder='food place name'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Date'>Date</label>
                                            <input name="date" value={newTripDetails.date} onChange={handleChange} type='date' placeholder='date' />
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Estimated Price'>Est. Price</label>
                                            <input name="price" value={newTripDetails.price} onChange={handleChange} placeholder='estimated price'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Reservation Time'>Reservation Time (hh:mm AM/PM)</label>
                                            <input name="rezTime" type='time' value={newTripDetails.rezTime} onChange={handleChange} placeholder='reservation time'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Site Link'>Site Link</label>
                                            <input name="siteLink" value={newTripDetails.siteLink} onChange={handleChange} placeholder='Site Link'/>
                                        </div>
                                    </div>
                                    <button className="btn activity-btn my-3">Add Food Options</button>
                                </form>
                            </div>
                            
                        </div>
             
         </>
     )
 }
     
 export default AddFoodOptions;
 