import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'


const LoginPage = (props) => {
    
    const [user, setUser] = useState({username: '', password: ''})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleLogin(user)
        navigate('/dashboard')
        
    }

    return (
        <>
            <div className='signup-background'>
                <div className="signup-container container-fluid m-auto pt-5 d-flex align-items-center text-center row w-50 p-4 rounded">
                    <form onSubmit={handleSubmit}>
                            <h2>Login to see your trip plans!</h2>
                            <div className="m-3">
                                <label className='mx-3' htmlFor='type username'>Username: </label>
                                <input type="text" name="username" placeholder="username" onChange={handleChange}/>
                            </div>
                            <div className="m-3">
                                <label className='mx-3' htmlFor='type password'>Password: </label>
                                <input type="password" name="password" placeholder="password" onChange={handleChange} />
                            </div>
                            <div className="text-center my-5">
                                <input type="submit" className="btn btn-warning" value="Login" />
                            </div>
                            
                    </form>
                </div>
            </div>
        </>
    )
}
    
export default LoginPage;