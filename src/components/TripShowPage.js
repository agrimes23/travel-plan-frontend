import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const TripShowPage = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="text-center m-5 p-2">
                    <h1>Berlin, Germany</h1>
                    <h3>Oct 3 - Oct 10</h3>
                    <h3>$1,000 - $3,000</h3>
                </div>
                <div className="container-fluid justify-content-center d-flex m-auto">
                    <div className=" border p-5 rounded w-75">
                        <img src=""></img>
                        <h3>Hotel Options:</h3>
                        <p>Select from dropdown of options</p>
                        
                        
                        
                        
                        
                        <h3>Day 1: Oct 3</h3>
                        <h4>Hotel</h4>
                        <h5>name of hotel</h5>
                        <h4>Cost per Person on Day 1</h4>
                        <h5>cost calculated by what was entered in quiz, or whatever update it to be</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
    
export default TripShowPage;