import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'
import HotelOptions from './HotelOptions'
import TransportOptions from './TransportOptions'
import ActivityOptions from './ActivityOptions'
import FoodOptions from './FoodOptions'
import AddTransportOptions from './AddTransportOptions'
import AddActivityOptions from './AddActivityOptions'
import AddFoodOptions from './AddFoodOptions'
import AddHotelOptions from './AddHotelOptions'


const TabContent = (props) => {

 
    return (
        <>
            <div className={ props.active === "Hotel" ? "show-tab" : "hide-tab"}>
                    <div>
                        <HotelOptions active={props.active} tripPlan={props.tripPlan}/>
                        <hr/>
                        <AddHotelOptions tripId={props.tripId} tripPlan={props.tripPlan} handleAddHotel={props.handleAddHotel} />
                    </div>
                </div>
                <div className={ props.active === "Transport" ? "show-tab" : "hide-tab"}>
                    <div>
                       <TransportOptions tripPlan={props.tripPlan} />

                       <AddTransportOptions tripId={props.tripId} handleAddTransport={props.handleAddTransport} tripPlan={props.tripPlan}  />

                    </div>
                </div>
                <div className={ props.active === "Activities" ? "show-tab" : "hide-tab"}>
                    <div>
                        <ActivityOptions tripPlan={props.tripPlan}/>
                        <AddActivityOptions tripPlan={props.tripPlan} tripId={props.tripId} handleAddActivity={props.handleAddActivity} />
                        
                    </div>
                </div>
                <div className={ props.active === "Food" ? "show-tab" : "hide-tab"}>
                    <div>
                        <FoodOptions tripPlan={props.tripPlan} />
                        <AddFoodOptions tripPlan={props.tripPlan} tripId={props.tripId} handleAddFood={props.handleAddFood} />
                        
                    </div>
                </div>
        </>
    )
}
    
export default TabContent;