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

    // How to Organize data into Itinerary format in the frontend:
    // // save each item in itinerary based on arrival/start dates
    // // Should I reorganize how I saved info to the backend in itineraries? Should I have split them up into cateogries? What was the benefit of splitting them up? 
    // // // I think it makes it more difficult to organize it in the front end splitting up into hotels, transport, act, food. 
    // // // But then, I can't make notes in the itinerary based on if it's an activity, hotel, transport, etc.
    // // // Should I just make another key-value pair saying what type of category it is, like catType: "hotel". catType: "transport"...

    //////////////////////////////////////////////////////////////////////////////

    // const getAxios = useCallback( async (user) => {
    //     await axios.get('http://localhost:8080/api/v1/userplans/' + props.user.id + "/" + props.tripPlan.id)
    //     .then((res) => {

    //         // setTemp(res.data.main.temp)
    //         // setIcon(res.data.weather[0].icon)

    //     },
        
    //     (err) => console.log(err))
    // })



    return (
        <>
            
        </>
    )
}
    
export default ItineraryList;