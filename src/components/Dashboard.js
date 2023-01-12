import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const Dashboard = () => {

    return (
        <>
            {/* Dashboard Page */}
            <div className="container-fluid w-100 mx-auto mt-5">
                <div className="text-center">
                    <h1>Your Trip Plans</h1>
                    <button className="btn zoom btn-warning my-5"> + Plan a New Trip</button>
                </div>

                {/* dashboard list */}
                <div className="container-fluid d-flex dash-list">
                    <div className="row justify-content-center">
                    {/* dashboard items */}
                        <div className='m-3 zoom card dash-card border d-flex shadow-sm rounded'>
                            <img className="trip-image-dash" src="https://petkeen.com/wp-content/uploads/2020/06/black-chantilly-tiffany-cat-home_Anna-Krivitskaya_Shutterstock.jpg" />
                            <div className="d-flex p-3 flex-row justify-content-around py-4">
                                <div className="text-left ">
                                    <h3>Place Name</h3>
                                </div>
                                
                                <div className="text-left">
                                    <h4>Dates</h4>
                                    <h4>Estimated Budget</h4>
                                </div>
                            </div>
                        </div>

                        
                        <div className='m-3 zoom card dash-card border d-flex shadow-sm rounded'>
                            <img className="trip-image-dash" src="https://petkeen.com/wp-content/uploads/2020/06/black-chantilly-tiffany-cat-home_Anna-Krivitskaya_Shutterstock.jpg" />
                            <div className="d-flex p-3 flex-row justify-content-around py-4">
                                <div className="text-left">
                                    <h3>Place Name</h3>
                                </div>
                                
                                <div className="text-left">
                                    <h4>Dates</h4>
                                    <h4>Estimated Budget</h4>
                                </div>
                            </div>

                        </div>
                        <div className='m-3 zoom card dash-card border d-flex shadow-sm rounded'>
                            <img className="trip-image-dash" src="https://petkeen.com/wp-content/uploads/2020/06/black-chantilly-tiffany-cat-home_Anna-Krivitskaya_Shutterstock.jpg" />
                            <div className="d-flex p-3 flex-row justify-content-around py-4">
                                <div className="text-left">
                                    <h3>Place Name</h3>
                                </div>
                                
                                <div className="text-left">
                                    <h4>Dates</h4>
                                    <h4>Estimated Budget</h4>
                                </div>
                            </div>

                        </div>
                        <div className='m-3 zoom card dash-card border d-flex shadow-sm rounded'>
                            <img className="trip-image-dash thumbnail" src="https://c8.alamy.com/comp/JF0070/map-of-france-as-an-overview-map-in-pastel-green-JF0070.jpg" />
                            <div className="d-flex p-3 flex-row justify-content-around py-4">
                                <div className="text-left p-2">
                                    <h3>Paris, France</h3>
                                </div>
                                
                                <div className="text-left p-2">
                                    <h4>Nov 15 - Nov 23</h4>
                                    <h4>$2,000-$3,000</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
    
export default Dashboard;