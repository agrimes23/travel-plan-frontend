import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'
import HotelOptions from './HotelOptions'
import TransportOptions from './TransportOptions'
import ActivityOptions from './ActivityOptions'
import FoodOptions from './FoodOptions'
import AddTransportOptions from './AddTransportOptions'


const TabContent = (props) => {
    const itineraryList = []
    // const newEntry = props.tripPlans.length
    const [newTripDetails, setNewTripDetails] = useState({...props.tripPlans})
    // const navigate = useNavigate();
    

    const handleChange = (e) => {
        setNewTripDetails({...newTripDetails, [e.target.name]: e.target.value})
    }
    const handleSubmit= () => {
        props.handleAddHotel(newTripDetails, props.tripPlans.id)
    }

    const addToItinerary = (hotel) => {
        if (props.active === "Hotel") {
            itineraryList.push(hotel)
        } else if (props.active === "Transport") {
            itineraryList.push()
        }
    }

    console.log("props.tripPlan " + props.tripPlan.transport)
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
                                            <label htmlFor='hotel-name'>Hotel Name</label>
                                            <input name="" placeholder="hotel name" value={newTripDetails.hotelName} onChange={handleChange} />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='check-in-date'>Check-in Date</label>
                                            <input name="" type='date' placeholder="date of check-in" value={newTripDetails.stayDate} onChange={handleChange}  />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='price'>Price for the Night</label>
                                            <input name="" placeholder="price for the night" value={newTripDetails.price} onChange={handleChange}  />
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                    <div className="flex-fill row m-2">
                                            <label htmlFor='link'>Site Link</label>
                                            <input name="" placeholder="Link" value={newTripDetails.siteLink} onChange={handleChange}  />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='checkin time'>Check-in time (hh:mm AM/PM)</label>
                                            <input type='time' name="" placeholder="check-in time" value={newTripDetails.checkIn} onChange={handleChange} />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='checkout time'>Check-out time (hh:mm AM/PM)</label>
                                            <input type='time' name="" placeholder="check-out time" value={newTripDetails.checkOut} onChange={handleChange} />
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
                        

                       <AddTransportOptions />




                    </div>
                </div>
                <div className={ props.active === "Activities" ? "show-tab" : "hide-tab"}>
                    <div>
                        <ActivityOptions/>
                        <div className="d-inline-block m-3">
                            <h3>Add an Activity to the List Options:</h3>
                            <div>
                                <form>
                                    <div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Activty Name'>Activty Name</label>
                                            <input name="" placeholder='activity name'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Start Date'>Start Date</label>
                                            <input name="" type='date' placeholder='start date'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Site Link'>Site Link</label>
                                            <input name="" placeholder='Site Link'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Price'>Price</label>
                                            <input name="" placeholder='price'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Start Time'>Start Time (hh:mm AM/PM)</label>
                                            <input name="" type='time' placeholder='start time'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='End Time'>End Time (hh:mm AM/PM)</label>
                                            <input name="" type='time' placeholder='End Time'/>
                                        </div>
                                    </div>
                                    <button className="btn activity-btn my-3">Add Activity Options</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={ props.active === "Food" ? "show-tab" : "hide-tab"}>
                    <div>
                        <FoodOptions />

                        <div className="d-inline-block m-3">
                            <h3>Add Food to the List Options:</h3>
                            <div>
                                <form>
                                    <div className="">
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Food Place Name'>Food Place Name</label>
                                            <input name="" placeholder='food place name'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Date'>Date</label>
                                            <input name="" type='date' placeholder='date' />
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Estimated Price'>Est. Price</label>
                                            <input name="" placeholder='estimated price'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Reservation Time'>Reservation Time (hh:mm AM/PM)</label>
                                            <input name="" type='time' placeholder='reservation time'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Site Link'>Site Link</label>
                                            <input name="" placeholder='Site Link'/>
                                        </div>
                                    </div>
                                    <button className="btn activity-btn my-3">Add Food Options</button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}
    
export default TabContent;