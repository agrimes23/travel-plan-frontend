import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const HotelOptions = (props) => {
    
    return (
        <>
            <form className="d-flex justify-content-center row input-styling">
                <select className="m-3 select-container" size="5">
                { props.tripPlan.hotels ? props.tripPlan.hotels.map((hotel) => {
                            return (
                                <>
                                    <option key={hotel.hotelId} className="d-block">{hotel.stayDate}: {hotel.hotelName}, ${(hotel.price).toFixed(2)}</option>
                                </>
                            )
                        }) : <h3>Add a hotel you found below to get started planning!</h3> }
                
                </select>
                <div className="text-center">
                    <input className="btn btn-info m-3" type="submit" value="add to itinerary"/>
                </div>
            </form>
        </>
    )
}
    
export default HotelOptions;