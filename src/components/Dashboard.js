import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const Dashboard = () => {

    return (
        <>
            {/* Dashboard Page */}
            <div className="container-fluid w-100 mx-auto mt-5">
                <div className="text-center">
                    <h1>Your Trip Plans</h1>
                    <button className="btn btn-warning my-5"> + Plan a New Trip</button>
                </div>

                {/* dashboard list */}
                <div className="d-flex justify-content-center dash-list">
                    {/* dashboard items */}
                    <div className='col-md-6 m-3 card dash-card border d-flex shadow-sm rounded'>
                        <img className="trip-image-dash" src="https://petkeen.com/wp-content/uploads/2020/06/black-chantilly-tiffany-cat-home_Anna-Krivitskaya_Shutterstock.jpg" />
                        <div className="d-flex flex-row justify-content-around py-4">
                            <div className="">
                                <h3>Place Name</h3>
                            </div>
                            
                            <div className="text-left">
                                <h4>Dates</h4>
                                <h4>Estimated Budget</h4>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6 m-3 card dash-card border d-flex shadow-sm rounded'>
                        <img className="trip-image-dash" src="https://petkeen.com/wp-content/uploads/2020/06/black-chantilly-tiffany-cat-home_Anna-Krivitskaya_Shutterstock.jpg" />
                        <div className="d-flex flex-row justify-content-around py-4">
                            <div className="">
                                <h3>Place Name</h3>
                            </div>
                            
                            <div className="text-left">
                                <h4>Dates</h4>
                                <h4>Estimated Budget</h4>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6 m-3 card dash-card border d-flex shadow-sm rounded'>
                        <img className="trip-image-dash" src="https://petkeen.com/wp-content/uploads/2020/06/black-chantilly-tiffany-cat-home_Anna-Krivitskaya_Shutterstock.jpg" />
                        <div className="d-flex flex-row justify-content-around py-4">
                            <div className="">
                                <h3>Place Name</h3>
                            </div>
                            
                            <div className="text-left">
                                <h4>Dates</h4>
                                <h4>Estimated Budget</h4>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6 m-3 card dash-card border d-flex shadow-sm rounded'>
                        <img className="trip-image-dash" src="https://petkeen.com/wp-content/uploads/2020/06/black-chantilly-tiffany-cat-home_Anna-Krivitskaya_Shutterstock.jpg" />
                        <div className="d-flex flex-row justify-content-around py-4">
                            <div className="">
                                <h3>Place Name</h3>
                            </div>
                            
                            <div className="text-left">
                                <h4>Dates</h4>
                                <h4>Estimated Budget</h4>
                            </div>
                        </div>

                    </div>

                    
                </div>

            </div>
        </>
    )
}
    
export default Dashboard;