import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const SignupPage = () => {

    return (
        <>
        <div className='signup-background'>
            <div className="signup-container container-fluid m-auto pt-5 d-flex align-items-center text-center row w-50 p-4 rounded">
                <form>
                        <h2>Sign Up for an Account and Start Planning Trips!</h2>
                        <div className="m-3">
                            <label className='mx-3' htmlFor='create username'>Create a Username</label>
                            <input type="text" placeholder="username" />
                        </div>
                        <div className="m-3">
                            <label className='mx-3' htmlFor='create password'>Create Password</label>
                            <input type="password" placeholder="password"/>
                        </div>
                        <div className="text-center my-5">
                            <input className="mx-auto btn btn-warning" type="submit" />
                        </div>
                    
                </form>
            </div>
        </div>
        </>
    )
}
    
export default SignupPage;