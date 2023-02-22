import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const HotelOptions = (props) => {
    
    return (
        <>
            <form className="d-flex justify-content-center row">
                <select className="m-3" size="5">
                { props.tripPlan.hotels ? props.tripPlan.hotels.map((hotel, key) => {
                            return (
                                <>
                                    <option key={key} className="d-block">{hotel.stayDate}: {hotel.hotelName}, ${(hotel.price).toFixed(2)}</option>
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