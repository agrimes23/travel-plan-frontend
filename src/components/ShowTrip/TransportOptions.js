import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const TransportOptions = (props) => {

    return (
        <>
            <form className="d-flex justify-content-center row">
                <select className="m-3" size="5">
                    { props.tripPlan.transports ? props.tripPlan.transports.map((transport, key) => {
                        return (
                            <>
                                <option key={key} className="d-block"> {transport.arrivalDate}: {transport.transportCompany} ({transport.type}) ${(transport.price).toFixed(2)}</option>
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