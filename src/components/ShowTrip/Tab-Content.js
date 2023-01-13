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
                        {hotelOptions.map((hotel) => {
                                    return (
                                        <>
                                            <div>
                                                <h4 className="d-block">{hotel.hotelName}</h4>
                                                <h4 className="d-block">${hotel.price}</h4>
                                            </div>
                                        </>
                                    )
                                })}
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
                    </div>
                </div>
        </>
    )
}
    
export default TabContent;