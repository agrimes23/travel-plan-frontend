import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const AddTransportOptions = (props) => {

    const [newTripDetails, setNewTripDetails] = useState({...props.tripPlans})
    
    const handleChange = (e) => {
        setNewTripDetails({...newTripDetails, [e.target.name]: e.target.value})
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        props.handleAddTransport(newTripDetails, props.tripId)
    }

    return (
        <>
            <div className="d-inline-block m-3">
                        <h3>Add Transportation to the List Options:</h3>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="option-format">
                                    <div className="d-inline-block row m-2">
                                        <label htmlFor='company name'>Transport Company</label>
                                        <input name="transportCompany" value={newTripDetails.transportCompany} onChange={handleChange} placeholder="transport company" />
                                    </div>
                                    <div className="d-inline-block row m-2">
                                        <label htmlFor='type of transport'>Type of Transport</label>
                                        <input name="type" value={newTripDetails.type} onChange={handleChange} placeholder="type of transport" />
                                    </div>
                                    <div className="d-inline-block row m-2">
                                        <label htmlFor='Site Link'>Site Link</label>
                                        <input name="siteLink"  value={newTripDetails.siteLink} onChange={handleChange}  placeholder='Site Link'/>
                                    </div>
                                    <div className="d-inline-block row m-2">
                                        <label htmlFor='departure date'>Departure Date</label>
                                        <input name="deptDate" type='date' value={newTripDetails.deptDate} onChange={handleChange} placeholder='departure date'/>
                                    </div>
                                    <div className="d-inline-block row m-2">
                                        <label htmlFor='Arrival Date'>Arrival Date</label>
                                        <input name="arrivalDate" type='date' value={newTripDetails.arrivalDate} onChange={handleChange} placeholder='arrival date' />
                                    </div>
                                    <div className="d-inline-block row m-2">
                                        <label htmlFor='price'>Price</label>
                                        <input name="price" value={newTripDetails.price} onChange={handleChange} placeholder='price'/>
                                    </div>


                                    <div className="d-inline-block row m-2">
                                        <label htmlFor='Boarding Time'>Boarding Time (hh:mm AM/PM)</label>
                                        <input name="boardTime" type='time' value={newTripDetails.boardTime} onChange={handleChange} placeholder='boarding time'/>
                                    </div>
                                    <div className="d-inline-block row m-2">
                                        <label htmlFor='Arrival Time'>Arrival Time (hh:mm AM/PM)</label>
                                        <input name="stopTime" type='time' value={newTripDetails.stopTime} onChange={handleChange} placeholder='arrival time'/>
                                    </div>
                                </div>
                                <input type="submit" className="btn transport-btn my-3" value="Add Transport Options" />
                            </form>
                        </div>
                    </div>

        </>
    )
}
    
export default AddTransportOptions;