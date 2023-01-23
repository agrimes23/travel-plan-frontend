import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'


const SignupPage = (props) => {

    let emptyLogin = { username: '', password: '' }
    const [addUser, setAddUser] = useState(emptyLogin)
    const navigate = useNavigate()


    const handleChange = (e) => {
        setAddUser({...addUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleCreate(addUser)
        navigate('/dashboard')
    }

    return (
        <>
        <div className='signup-background'>
            <div className="signup-container container-fluid m-auto pt-5 d-flex align-items-center text-center row w-50 p-4 rounded">
                <form onSubmit={handleSubmit}>
                        <h2>Sign Up for an Account and Start Planning Trips!</h2>
                        <div className="m-3 mt-5">
                            <label className='mx-3' htmlFor='create username'>Create a Username</label>
                            <input type="text" placeholder="username" name="username" onChange={handleChange}/>
                        </div>
                        <div className="m-3">
                            <label className='mx-3' htmlFor='create password'>Create Password</label>
                            <input type="password" placeholder="password" name="password" onChange={handleChange} />
                        </div>
                        <div className="text-center my-5">
                            <input type="submit" className="btn btn-warning" value="Create Account"/>
                        </div>
                        
                </form>
            </div>
        </div>
        </>
    )
}
    
export default SignupPage;