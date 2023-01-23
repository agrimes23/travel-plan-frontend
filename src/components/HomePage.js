import { useState, useEffect, useCallback } from 'react'
import { useNavigate, redirect } from 'react-router-dom'



const HomePage = () => {
    const navigate = useNavigate()

    const signUpRedirect = () => {
        navigate("/signup")
    }

    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center m-5">A New Way of Planning for Travel</h1>

                <div className="container-fluid w-50">
                    <div id="carouselExampleControls" className="container-fluid carousel slide" data-bs-ride="carousel">
                        <div className="carl-div carousel-inner my-5">
                            <div className="carousel-item active">
                                <img className="carl-img d-block w-100" src="https://blog.oncallinternational.com/wp-content/uploads/2017/02/Woman-making-travel-plans.jpg" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="carl-img d-block w-100" src="https://pyxis.nymag.com/v1/imgs/4e0/3dc/79c3827c0b313e8d7b9949497d556636e3-vacation.rsquare.w700.jpg" alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                                <img className="carl-img d-block w-100" src="https://wttc.org/DesktopModules/MVC/NewsArticleList/images/141_20201013185512_Consumer%20Survey%20Finds%2070%20Percent%20of%20Travelers%20Plan%20to%20Holiday%20in%202021.jpg" alt="Third slide"/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="d-flex row justify-content-center">
                    <div className="m-5 text-center">
                        <h3 className="sign-up-title mb-5">Start planning your trips!</h3>
                        <button onClick={signUpRedirect} className="btn btn-info sign-up-btn">Sign up</button>
                    </div>
                    <hr className="w-50" />
                    <div className="m-5 text-center">
                        <h5 className="log-in-title">Already got an account?</h5>
                        <a href="/login" className="login-btn">Login to your Account</a>
                    </div>
                </div>
            </div>
        </>
    )
}
    
export default HomePage;