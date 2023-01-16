import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const FoodOptions = () => {

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
        <form className="d-flex justify-content-center row">
                <select className="m-3" size="5">
                    {foodOptions.map((food) => {
                        return (
                            <>
                                <option className="d-block">{food.date}: {food.name}, ${(food.highPrice).toFixed(2)}</option>
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
    
export default FoodOptions;