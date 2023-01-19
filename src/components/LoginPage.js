import { useState, useEffect, useCallback } from 'react'
import useNavigate from 'react-router-dom'


const LoginPage = () => {

    return (
        <>
            <div className='signup-background'>
                <div className="signup-container container-fluid m-auto pt-5 d-flex align-items-center text-center row w-50 p-4 rounded">
                    <form>
                            <h2>Login to see your trip plans!</h2>
                            <div className="m-3">
                                <label className='mx-3' htmlFor='type username'>Username: </label>
                                <input type="text" placeholder="username" />
                            </div>
                            <div className="m-3">
                                <label className='mx-3' htmlFor='type password'>Password: </label>
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
    
export default LoginPage;