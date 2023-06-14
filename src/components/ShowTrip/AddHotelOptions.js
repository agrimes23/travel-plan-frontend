
import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const AddHotelOptions = (props) => {
    
    const [newTripDetails, setNewTripDetails] = useState({...props.tripPlans})
    // const navigate = useNavigate();
    

    const handleChange = (e) => {
        setNewTripDetails({...newTripDetails, [e.target.name]: e.target.value})
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        props.handleAddHotel(newTripDetails, props.tripId)
    }


    return (
        <>
            <div className="d-inline-block input-styling">
                            <h3>Add a Hotel to the List Options:</h3>
                            <div>

                                <form onSubmit={handleSubmit}>
                                    <div className='d-flex option-format'>
                                        <div className="flex-fill row m-2 input-styling">
                                            <label htmlFor='hotel-name'>Hotel Name</label>
                                            <input name="hotelName" placeholder="hotel name" value={newTripDetails.hotelName} onChange={handleChange} />
                                        </div>
                                        <div className="flex-fill row m-2 input-styling">
                                            <label htmlFor='check-in-date'>Check-in Date</label>
                                            <input name="stayDate" type='date' placeholder="date of check-in" value={newTripDetails.stayDate} onChange={handleChange}  />
                                        </div>
                                        <div className="flex-fill row m-2 input-styling">
                                            <label htmlFor='price'>Price for the Night</label>
                                            <input name="price" placeholder="price for the night" value={newTripDetails.price} onChange={handleChange}  />
                                        </div>
                                    </div>
                                    <div className='d-flex option-format '>
                                    <div className="flex-fill row m-2 input-styling">
                                            <label htmlFor='link'>Site Link</label>
                                            <input name="siteLink" placeholder="Link" value={newTripDetails.siteLink} onChange={handleChange}  />
                                        </div>
                                        <div className="flex-fill row m-2 input-styling">
                                            <label htmlFor='checkin time'>Check-in time (hh:mm AM/PM)</label>
                                            <input type='time' name="checkIn" placeholder="check-in time" value={newTripDetails.checkIn} onChange={handleChange} />
                                        </div>
                                        <div className="flex-fill row m-2 input-styling">
                                            <label htmlFor='checkout time'>Check-out time (hh:mm AM/PM)</label>
                                            <input type='time' name="checkOut" placeholder="check-out time" value={newTripDetails.checkOut} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <button className="btn hotel-btn my-3">Add Hotel Options</button>
                                </form>
                            </div>
                        </div>
        </>
    )
}
    
export default AddHotelOptions;

