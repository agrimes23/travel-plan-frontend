import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'
import axios from 'axios'

const ItineraryList = (props) => {

    const [] = useState()
    const [] = useState()

    // need to pass the tripPlan.id back to backend so that I can find and display that trip data in the itinerary
    
    // Itinerary Ideas:
    // // Make another object called "Itinerary" whose keys are hotels, activities, transport, and food. 
    // // Hotels can only have one option per day, but we will check for this on the frontend side
    // // Activities, Transport, and Food should not have overlapping times

    // Mock Database Schema within tripPlans:
    const itineraries = [
        {
            hotels: [
                {
                    hotelID: "01",
                    hotelName: "La Quinta"
                },
                {
                    hotelID: "02",
                    hotelName: "Marriott"
                }
            ],
            transport: [
                {
                    transportID: "01",
                    transportName: "Delta"
                }
            ]
        }
    ]
    //////////////////////////////////////////////////////////////////////////////

    const getAxios = useCallback( async (user) => {
        await axios.get('http://localhost:8080/api/v1/userplans/' + user.id)
        .then((res) => {

            // setTemp(res.data.main.temp)
            // setIcon(res.data.weather[0].icon)

        },
        
        (err) => console.log(err))
    })



    return (
        <>
            
        </>
    )
}
    
export default ItineraryList;