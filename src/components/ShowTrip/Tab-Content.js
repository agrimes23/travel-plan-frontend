import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'
import HotelOptions from './HotelOptions'
import TransportOptions from './TransportOptions'
import ActivityOptions from './ActivityOptions'
import FoodOptions from './FoodOptions'
import AddTransportOptions from './AddTransportOptions'
import AddActivityOptions from './AddActivityOptions'
import AddFoodOptions from './AddFoodOptions'


const TabContent = (props) => {

    const [newTripDetails, setNewTripDetails] = useState({...props.tripPlans})
    // const navigate = useNavigate();
    

    const handleChange = (e) => {
        setNewTripDetails({...newTripDetails, [e.target.name]: e.target.value})
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        props.handleAddHotel(newTripDetails, props.tripId)
    }

    return (
        <>
            <div className={ props.active === "Hotel" ? "show-tab" : "hide-tab"}>
                    <div>
                        <HotelOptions active={props.active} tripPlan={props.tripPlan}/>
                        <hr/>
                        <div className="d-inline-block m-3">
                            <h3>Add a Hotel to the List Options:</h3>
                            <div>

                                <form onSubmit={handleSubmit}>
                                    <div className='d-flex'>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='hotel-name'>ID</label>
                                            <input name="hotelId" placeholder="hotel id" value={newTripDetails.hotelId} onChange={handleChange} />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='hotel-name'>Hotel Name</label>
                                            <input name="hotelName" placeholder="hotel name" value={newTripDetails.hotelName} onChange={handleChange} />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='check-in-date'>Check-in Date</label>
                                            <input name="stayDate" type='date' placeholder="date of check-in" value={newTripDetails.stayDate} onChange={handleChange}  />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='price'>Price for the Night</label>
                                            <input name="price" placeholder="price for the night" value={newTripDetails.price} onChange={handleChange}  />
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                    <div className="flex-fill row m-2">
                                            <label htmlFor='link'>Site Link</label>
                                            <input name="siteLink" placeholder="Link" value={newTripDetails.siteLink} onChange={handleChange}  />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='checkin time'>Check-in time (hh:mm AM/PM)</label>
                                            <input type='time' name="checkIn" placeholder="check-in time" value={newTripDetails.checkIn} onChange={handleChange} />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='checkout time'>Check-out time (hh:mm AM/PM)</label>
                                            <input type='time' name="checkOut" placeholder="check-out time" value={newTripDetails.checkOut} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <button className="btn hotel-btn my-3">Add Hotel Options</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ props.active === "Transport" ? "show-tab" : "hide-tab"}>
                    <div>
                       <TransportOptions tripPlan={props.tripPlan} />

                       <AddTransportOptions tripId={props.tripId} handleAddTransport={props.handleAddTransport} tripPlan={props.tripPlan}  />

                    </div>
                </div>
                <div className={ props.active === "Activities" ? "show-tab" : "hide-tab"}>
                    <div>
                        <ActivityOptions tripPlan={props.tripPlan}/>
                        <AddActivityOptions tripPlan={props.tripPlan} tripId={props.tripId} handleAddActivity={props.handleAddActivity} />
                        
                    </div>
                </div>
                <div className={ props.active === "Food" ? "show-tab" : "hide-tab"}>
                    <div>
                        <FoodOptions tripPlan={props.tripPlan} />
                        <AddFoodOptions tripPlan={props.tripPlan} tripId={props.tripId} handleAddFood={props.handleAddFood} />
                        
                    </div>
                </div>
        </>
    )
}
    
export default TabContent;