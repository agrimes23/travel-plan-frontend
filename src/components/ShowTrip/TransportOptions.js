import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const TransportOptions = (props) => {

    return (
        <>
            <form className="d-flex justify-content-center row input-styling">
                <select className="m-3 select-container" size="5">
                    { props.tripPlan.transports ? props.tripPlan.transports.map((transport) => {
                        return (
                            <>
                                <option key={transport.transportID} className="d-block"> {transport.arrivalDate}: {transport.transportCompany} ({transport.type}) ${(transport.price).toFixed(2)}</option>
                            </>
                        )
                    }) : null }
                </select>
                <div className="text-center">
                    <input className="btn btn-info m-3" type="submit" value="add to itinerary"/>
                </div>
            </form>
        </>
    )
}
    
export default TransportOptions;