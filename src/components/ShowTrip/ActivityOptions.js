import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const ActivityOptions = (props) => {

    return (
        <>
        <form className="d-flex justify-content-center row">
                <select className="m-3" size="5">
                    { props.tripPlan.activities ? props.tripPlan.activities.map((activity) => {
                        return (
                            <>
                                <option key={activity.actID} className="d-block">{activity.startDate}: {activity.actName}, ${(activity.price).toFixed(2)}</option>
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
    
export default ActivityOptions;