import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const ActivityOptions = () => {

    const actOptions = [{
        name: "Go to the market",
        startDate: "10/3/2023",
        price: 40.00,
        startTime: "17:00",
        endTime: "18:00"
    },
    {
        name: "Flower Garden",
        startDate: "10/3/2023",
        price: 10.50,
        startTime: "10:00",
        endTime: "15:00"
    },
    {
        name: "Berlin walking tour",
        startDate: "10/3/2023",
        price: 0.00,
        startTime: "16:00",
        endTime: "16:30"
    },
    ]


    return (
        <>
        <form className="d-flex justify-content-center row">
                <select className="m-3" size="5">
                    {actOptions.map((activity, key) => {
                        return (
                            <>
                                <option key={key} className="d-block">{activity.startDate}: {activity.name}, ${(activity.price).toFixed(2)}</option>
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
    
export default ActivityOptions;