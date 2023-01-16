import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const TransportOptions = () => {

    const transportOptions = [{
        transportCompany: "British Airways",
        type: "airplane",
        deptDate: "10/3/2023",
        arrivalDate: "10/3/2023",
        price: 800.00,
        boardTime: "5:00",
        stopTime: "10:00"
    },
    {
        transportCompany: "Delta",
        type: "airplane",
        deptDate: "10/3/2023",
        arrivalDate: "10/3/2023",
        price: 1500.00,
        boardTime: "10:00",
        stopTime: "15:00"
    },
    {
        transportCompany: "Willer",
        type: "bus",
        deptDate: "10/3/2023",
        arrivalDate: "10/3/2023",
        price: 2.50,
        boardTime: "16:00",
        stopTime: "16:30"
    },
    ]


    return (
        <>
            <form className="d-flex justify-content-center row">
                <select className="m-3" size="5">
                    {transportOptions.map((transport) => {
                        return (
                            <>
                                <option className="d-block"> {transport.arrivalDate}: {transport.transportCompany} ({transport.type}) ${(transport.price).toFixed(2)}</option>
                            </>
                        )
                    })}
                </select>
                <div className="text-center">
                    <input className="btn btn-info m-3" type="submit" value="add to itinerary"/>
                </div>
            </form>
        </>
    )
}
    
export default TransportOptions;