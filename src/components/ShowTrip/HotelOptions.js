import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const HotelOptions = (props) => {
    

    // const hotelOptions = [{
    //     hotelName: "Stay Inn",
    //     stayDate: "10/3/2023",
    //     price: 94.99,
    //     checkIn: "16:00",
    //     checkOut: "11:00"
    // },
    // {
    //     hotelName: "Americ Inn",
    //     stayDate: "10/3/2023",
    //     price: 150.00,
    //     checkIn: "17:00",
    //     checkOut: "12:00"
    // },
    // {
    //     hotelName: "Nice Stay Hotel",
    //     stayDate: "10/3/2023",
    //     price: 50.00,
    //     checkIn: "15:00",
    //     checkOut: "10:00"
    // },
    // ]

    const itineraryList = []

    const addToItinerary = (hotel) => {
        
    }



    return (
        <>
            <form onSubmit={addToItinerary} className="d-flex justify-content-center row">
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