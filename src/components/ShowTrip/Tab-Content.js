import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'
import HotelOptions from './HotelOptions'
import TransportOptions from './TransportOptions'
import ActivityOptions from './ActivityOptions'
import FoodOptions from './FoodOptions'

const TabContent = (props) => {

    
    

    const itineraryList = []

    const addToItinerary = (hotel) => {
        if (props.active === "Hotel") {
            itineraryList.push(hotel)
        } else if (props.active === "Transport") {
            itineraryList.push()
        }
    }


    return (
        <>
            <div className={ props.active === "Hotel" ? "show-tab" : "hide-tab"}>
                    <div>
                        <HotelOptions active={props.active}/>
                        <hr/>
                        <div className="d-inline-block m-3">
                            <h3>Add a Hotel to the List Options:</h3>
                            <div>
                                <form>
                                    <div className='d-flex'>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='hotel-name'>Hotel Name</label>
                                            <input name="" placeholder="hotel name"  />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='check-in-date'>Check-in Date</label>
                                            <input name="" type='date' placeholder="date of check-in" />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='price'>Price for the Night</label>
                                            <input name="" placeholder="price for the night" />
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                    <div className="flex-fill row m-2">
                                            <label htmlFor='link'>Site Link</label>
                                            <input name="" placeholder="Link" />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='checkin time'>Check-in time (hh:mm AM/PM)</label>
                                            <input type='time' name="" placeholder="check-in time" />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='checkout time'>Check-out time (hh:mm AM/PM)</label>
                                            <input type='time' name="" placeholder="check-out time" />
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
                       <TransportOptions tripPlans={props.tripPlans} />
                        
                        <div className="d-inline-block m-3">                                 
                            <h3>Add Transportation to the List Options:</h3>
                            <div>
                                <form>
                                    <div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='type of transport'>Type of Transport</label>
                                            <select className="d-inline-block row m-2 w-75">
                                                <option>Type of Transport</option>
                                                <option>Airplane</option>
                                                <option>Bus</option>
                                                <option>Boat</option>
                                                <option>Train</option>
                                                <option>Subway</option>
                                                <option>Taxi</option>
                                                <option>Bike</option>
                                                <option>Scooter</option>
                                                <option>Walking</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Site Link'>Site Link</label>
                                            <input name="" placeholder='Site Link'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='departure date'>Departure Date</label>
                                            <input name="" type='date' placeholder='departure date'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Arrival Date'>Arrival Date</label>
                                            <input name="" type='date' placeholder='arrival date' />
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='price'>Price</label>
                                            <input name="" placeholder='price'/>
                                        </div>

                                        {/* Only show boarding time input if airplane, bus, boat, train */}
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Boarding Time'>Boarding Time (hh:mm AM/PM)</label>
                                            <input name="" type='time' placeholder='boarding time'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label htmlFor='Arrival Time'>Arrival Time (hh:mm AM/PM)</label>
                                            <input name="" type='time' placeholder='arrival time'/>
                                        </div>
                                    </div>
                                    <button className="btn transport-btn my-3">Add Transport Options</button>
                                </form>
                            </div>
                        </div>
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