import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'
import IndexTabs from './IndexTabs'

const TripShowPage = (props) => {

    console.log(props.tripPlans.TripDetails.EstBud)
    return (
        <>
            <div className="container-fluid">
                <div className='container row m-auto mt-5 d-flex justify-content-center'>
                     
                    <div className="col d-flex justify-content-center text-center mt-5 p-2">
                        <div className='row'>
                            <h1>{props.tripPlans.TripDetails.placeName}</h1>
                            <h3>{props.tripPlans.TripDetails.tripStart} - {props.tripPlans.TripDetails.tripEnd}</h3>
                            <h3>$1,000 - $3,000</h3>
                            <button className="btn my-2">(Edit Location & Dates)</button>
                        </div>
                    </div>
                    
                </div>
                <div className="container-fluid justify-content-center d-flex mb-5 m-auto">
                    
                    <div className="border p-5 rounded w-75">
                        <div className="">
                            <h2 className="">Est. Total: ${props.tripPlans.TripDetails.EstBud}</h2>
                        </div>
                        <div className="w-100 d-flex justify-content-center">
                        <IndexTabs/>
                        </div>
                        <hr className="my-5"></hr>
                        
                        {/* Day 1 */}
                        <div>
                            <h2>Day 1: Oct 3</h2>
                            <div className="justify-content-between d-flex m-3">
                                {/* Will go to a different page (or details...?) to let the user edit each hotel. They can edit the name, price, link, and notes(?) 
                                Then once they update the individual links, it will be added to the dropdown showing the NAME (REGION) and PRICE only. When they select it however,
                                it will populate in the hotel section */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
    
export default TripShowPage;