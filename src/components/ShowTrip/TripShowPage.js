import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'
import IndexTabs from './IndexTabs'
import ItineraryList from './ItineraryList'

const TripShowPage = (props) => {


    return (
        <>
            <div className="container-fluid">
                <div className='container row m-auto mt-5 d-flex justify-content-center'>
                     
                    <div className="col d-flex justify-content-center text-center mt-5 p-2">
                        <div className='row'>
                            <h1>{props.tripPlan.placeName}</h1>
                            <h3>{props.tripPlan.tripStart} - {props.tripPlan.tripEnd}</h3>
                            <h3>~${props.tripPlan.estBud.toLocaleString()}</h3>
                            <button className="btn my-2">(Edit Location & Dates)</button>
                        </div>
                    </div>
                    
                </div>
                <div className="container-fluid justify-content-center d-flex mb-5 m-auto">
                    
                    <div className="border p-5 rounded w-75">
                        <div className="">
                            <h2 className="">Est. Total: $</h2>
                        </div>
                        <div className="w-100 d-flex justify-content-center">
                        <IndexTabs tripPlan={props.tripPlan} tripId={props.tripPlan.id} handleAddHotel={props.handleAddHotel} handleAddActivity={props.handleAddActivity} handleAddFood={props.handleAddFood} handleAddTransport={props.handleAddTransport} />
                        </div>
                        <hr className="my-5"></hr>
                        
                        {/* Day 1 */}
                        <div>
                            <h2>[***Itinerary will be updated soon***]</h2>
                            <div className="justify-content-between d-flex m-3">
                                <ItineraryList tripPlan={props.tripPlan} />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
    
export default TripShowPage;