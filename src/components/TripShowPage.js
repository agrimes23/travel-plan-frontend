import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'
import IndexTabs from './IndexTabs'

const TripShowPage = () => {

    return (
        <>
            <div className="container-fluid">
                <div className='container row m-auto mt-5 d-flex justify-content-center'>
                     <div className='col d-flex justify-content-center'>
                        <img className="trip-show-img rounded-circle" src="https://cdn1.matadornetwork.com/blogs/1/2022/05/social-Expat-in-Germany-1401491837.jpeg"></img> 
                    </div>
                    <div className="col d-flex justify-content-center text-center mt-5 p-2">
                        <div className='row'>
                            <h1>Berlin, Germany</h1>
                            <h3>Oct 3 - Oct 10</h3>
                            <h3>$1,000 - $3,000</h3>
                            <button className="btn my-2">(Edit Location & Dates)</button>
                        </div>
                    </div>
                    
                </div>
                <div className="container-fluid justify-content-center d-flex m-auto">
                    <div className=" border p-5 rounded w-75">
                        <div className="w-100 d-flex justify-content-center">
                        <IndexTabs/>
                        </div>
                        <hr className="my-5"></hr>
                        
                        {/* Day 1 */}
                        <div>
                            <h2>Day 1: Oct 3</h2>
                            <div className="justify-content-between d-flex m-3">
                                <div className="d-inline-block m-3">
                                    <h3>Hotel:</h3>
                                    <p>Select from dropdown of options</p>
                                    <div>
                                        <select>
                                            <option value="0">Select from Hotel Options</option>
                                            <option value="1">wwksdflk</option>
                                        </select>
                                    </div>
                                    {/* Will go to a different page (or details...?) to let the user edit each hotel. They can edit the name, price, link, and notes(?) 
                                Then once they update the individual links, it will be added to the dropdown showing the NAME (REGION) and PRICE only. When they select it however,
                                it will populate in the hotel section */}

                                    <div className="d-inline-block m-2">
                                        <h3>Add Hotels:</h3>
                                        <button className="btn hotel-btn my-3">Add/Edit Hotel Options</button>
                                    </div>
                                    
                                    <h4>Hotel</h4>
                                    <h5>name of hotel</h5>
                                    <h4>Cost per Person on Day 1</h4>
                                </div>
                                

                                <div className="d-inline-block m-3">
                                    <h3>Method of Transport:</h3>
                                    <p>Select from dropdown of options</p>
                                    <div>
                                        <select>
                                            <option value="0">Select from Transport Options</option>
                                            <option value="1">wwksdflk</option>
                                        </select>
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <h3>Add Transportation:</h3>
                                        <button className="btn transport-btn my-3">Add/Edit Transport Options</button>
                                    </div>
                                    <h4>Method of Transport</h4>
                                    <h5>name of transport</h5>
                                    <h4>Cost per Person on Day 1</h4>
                                    <h5>amount</h5>
                                </div>

                                <div className="d-inline-block m-3">
                                    <h3>Activities:</h3>
                                    <p>Select from dropdown of options</p>
                                    <div>
                                        <select>
                                            <option value="0">Select from Activity Options</option>
                                            <option value="1">wwksdflk</option>
                                        </select>
                                    </div>
                                    <div className="d-inline-block m-2">
                                        <h3>Add Activities</h3>
                                        <button className="btn activity-btn my-3">Add/Edit Activity Options</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5"></hr>

                        
                            
                        
                    </div>
                </div>
            </div>
        </>
    )
}
    
export default TripShowPage;