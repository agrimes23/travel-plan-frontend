import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const TabContent = (props) => {


    const hotelOptions = [{
        hotelName: "Stay Inn",
        stayDate: "10/3/2023",
        deptDate: "10/4/2023",
        price: 94.99,
        checkIn: "16:00",
        checkOut: "11:00"
    },
    {
        hotelName: "America Inn",
        stayDate: "10/3/2023",
        deptDate: "10/4/2023",
        price: 150.00,
        checkIn: "17:00",
        checkOut: "12:00"
    },
    {
        hotelName: "Nice Stay Hotel",
        stayDate: "10/3/2023",
        deptDate: "10/4/2023",
        price: 50.00,
        checkIn: "15:00",
        checkOut: "10:00"
    },
    ]

    const transportOptions = [{
        type: "airplane",
        deptDate: "10/3/2023",
        arrivalDate: "10/3/2023",
        price: 800.00,
        boardTime: "5:00",
        stopTime: "10:00"
    },
    {
        type: "airplane",
        deptDate: "10/3/2023",
        arrivalDate: "10/3/2023",
        price: 1500.00,
        boardTime: "10:00",
        stopTime: "15:00"
    },
    {
        type: "bus",
        deptDate: "10/3/2023",
        arrivalDate: "10/3/2023",
        price: 2.50,
        boardTime: "16:00",
        stopTime: "16:30"
    },
    ]

    const actOptions = [{
        name: "Go to the market",
        startDate: "10/3/2023",
        endDate: "10/3/2023",
        price: 40.00,
        startTime: "17:00",
        endTime: "18:00"
    },
    {
        name: "Flower Garden",
        startDate: "10/3/2023",
        endDate: "10/3/2023",
        price: 10.50,
        startTime: "10:00",
        endTime: "15:00"
    },
    {
        name: "Berlin walking tour",
        startDate: "10/3/2023",
        endDate: "10/3/2023",
        price: 0.00,
        startTime: "16:00",
        endTime: "16:30"
    },
    ]

    const foodOptions = [{
        name: "restaurant le chez",
        date: "10/3/2023",
        highPrice: 40.00,
        lowPrice: 30.00,
        rezTime: "17:00",
    },
    {
        name: "bob's pizza place",
        date: "10/3/2023",
        highPrice: 15.00,
        lowPrice: 10.00,
        rezTime: "19:00",
    },
    {
        name: "cafe lily",
        date: "10/3/2023",
        highPrice: 20.00,
        lowPrice: 5.00,
        rezTime: "10:00",
    },
    ]


    return (
        <>
            <div className={ props.active === "Hotel" ? "show-tab" : "hide-tab"}>
                    <div>
                        <form className="d-flex justify-content-center row">
                            <select className="m-3" size="5">
                            {hotelOptions.map((hotel) => {
                                        return (
                                            <>
                                                <option className="d-block">{hotel.hotelName}, ${hotel.price}, {hotel.stayDate}</option>
                                            </>
                                        )
                                    })}
                            </select>
                            <div className="text-center">
                                <input className="btn btn-info m-3" type="submit" value="add to itinerary"/>
                            </div>
                        </form>
                        <hr/>
                        <div className="d-inline-block m-3">
                            <h3>Add a Hotel to the List Options:</h3>
                            <div>
                                <form>
                                    <div className='d-flex'>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='hotel-name'>Hotel Name</label>
                                            <input placeholder="write hotel name"  />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='check-in-date'>Check-in Date</label>
                                            <input placeholder="date of check-in" />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='price'>Price for the Night</label>
                                            <input placeholder="price for the night" />
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                    <div className="flex-fill row m-2">
                                            <label htmlFor='link'>Site Link</label>
                                            <input placeholder="Link" />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='checkin time'>Check-in time</label>
                                            <input placeholder="check-in time" />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label htmlFor='checkout time'>Check-out time</label>
                                            <input placeholder="check-outs time" />
                                        </div>
                                    </div>
                                    <button className="btn hotel-btn my-3">Add Hotel Options</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ props.active === "Transport" ? "show-tab" : "hide-tab"}>
                    <div>
                        {transportOptions.map((transport) => {
                                    return (
                                        <>
                                            <div>
                                                <h4 className="d-block">{transport.type}</h4>
                                                <h4 className="d-block">${transport.price}</h4>
                                            </div>
                                        </>
                                    )
                                })}
                        
                        <div className="d-inline-block m-3">                                 
                            <h3>Add Transportation to the List Options:</h3>
                            <div>
                                <form>
                                    <div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='type of transportation'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='departure date'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='arrival date' />
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='price'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='boarding time'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='arrival time'/>
                                        </div>
                                    </div>
                                    <button className="btn transport-btn my-3">Add Transport Options</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ props.active === "Activities" ? "show-tab" : "hide-tab"}>
                    <div>
                        {actOptions.map((activity) => {
                                    return (
                                        <>
                                            <div>
                                                <h4 className="d-block">{activity.name}</h4>
                                                <h4 className="d-block">${activity.price}</h4>
                                            </div>
                                        </>
                                    )
                                })}
                        <div className="d-inline-block m-3">
                            <h3>Add an Activity to the List Options:</h3>
                            <div>
                                <form>
                                    <div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='activity name'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='start date'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='end date'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='price'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='start time'/>
                                        </div>
                                        <div className="d-inline-block row m-2">
                                            <label></label>
                                            <input placeholder='end time'/>
                                        </div>
                                    </div>
                                    <button className="btn activity-btn my-3">Add Activity Options</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={ props.active === "Food" ? "show-tab" : "hide-tab"}>
                    <div>
                        {foodOptions.map((food) => {
                                    return (
                                        <>
                                            <div>
                                                <h4 className="d-block">{food.name}</h4>
                                                <h4 className="d-block">${food.highPrice}</h4>
                                            </div>
                                        </>
                                    )
                                })}

                        <div className="d-inline-block m-3">
                            <h3>Add Food to the List Options:</h3>
                            <div>
                                <form>
                                    <div className="d-flex">
                                        <div className="flex-fillrow m-2">
                                            <label></label>
                                            <input placeholder='food place name'/>
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label></label>
                                            <input placeholder='date' />
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label></label>
                                            <input placeholder='estimated price'/>
                                        </div>
                                        <div className="flex-fill row m-2">
                                            <label></label>
                                            <input placeholder='reservation time'/>
                                        </div>
                                    </div>
                                    <button className="btn activity-btn my-3">Add Food Options</button>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </>
    )
}
    
export default TabContent;