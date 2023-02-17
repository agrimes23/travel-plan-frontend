import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const NewTrip = () => {

    const handleSubmit = () => {


    }

    return (
        <>
            <div className="container-fluid">
                <div className='container row m-auto mt-5 d-flex justify-content-center'>
                     
                    <div className="col d-flex justify-content-center text-center mt-5 p-2">
                        <form onSubmit={handleSubmit} className='row'>
                            <label htmlFor='enter trip location'>Enter Trip Location </label>
                            <input placeholder='city, town, country etc' />

                            <label htmlFor='enter trip start date'>Enter Trip Start Date </label>
                            <input placeholder='the day you start your trip' />
                            <label htmlFor='enter trip end date'>Enter Trip End Date </label>
                            <input placeholder='the day you get back' />

                            <label htmlFor='enter estimated budget'>Enter Estimated Budget </label>
                            <input placeholder='budget for trip' />
                            <div className="d-flex justify-content-center align-items-center">
                                <input className="btn btn-info mt-5 " type="submit"/>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
    
export default NewTrip;