import React, { useState, useEffect, useCallback } from 'react';
import useNavigate from 'react-router-dom';
import styled from 'styled-components';


const IndexTabs = () => {

    const tabHeaders = ["Hotel", "Transport", "Activities", "Food"]

    const hotelOptions = [{
        hotelName: "Stay Inn",
        stayDate: "10/3/2023",
        price: 94.99,
        checkIn: "16:00",
        checkOut: "11:00"
    },
    {
        hotelName: "America Inn",
        stayDate: "10/3/2023",
        price: 150.00,
        checkIn: "17:00",
        checkOut: "12:00"
    },
    {
        hotelName: "Nice Stay Hotel",
        stayDate: "10/3/2023",
        price: 50.00,
        checkIn: "15:00",
        checkOut: "10:00"
    },
    ]

    const [active, setActive] = useState(tabHeaders[0])
    const Button = styled.button`
    /* Same as above */
  `;
  
  const ButtonToggle = styled(Button)`
    opacity: 0.6;
    background-color: lightgrey;
    border-bottom: 1px black solid;
    ${({ active }) =>
      active &&
      `
      opacity: 1;
      border-top: 1px black solid;
      border-left: 1px black solid;
      border-right: 1px black solid;
      border-bottom: 0px;
      background-color: white;
    `}
  `;
    const ButtonGroup = styled.div`
    display: flex;
    `;

    const handleClick = (tab) => {
        if (tab === "Hotel") {
            hotelOptions.map(hotel => {
                return (
                    <>
                        <h4>{hotel.hotelName}</h4>
                        <h4>{hotel.price}</h4>
                    </>
                )
            }) 
        }
        setActive(tab)
    }


    return (
        <>
        <div className="container border px-5 py-3 d-flex row">
            <div className="tab-row d-flex col">

                    {tabHeaders.map(tab => (
                        <ButtonToggle 
                        className="btn rounded-0 flex-fill"
                        key={tab}
                        active={active === tab}
                        onClick={() => handleClick(tab)}
                        >
                        {/* will need to make onClick an actual function with an if statement */}
                        {tab}
                        </ButtonToggle>
                    ))}

                    {/* Tab Content */}
                    <div>
                        
                    </div>

            </div>
            <div className=" tab-content d-inline-block mx-2 mt-5 row">
                <h5>Please choose from current options:</h5>
                <div className={ active === "Hotel" ? "show-tab" : "hide-tab"}>
                    <div>
                        {hotelOptions.map((hotel) => {
                                    return (
                                        <>
                                            <div>
                                                <h4 className="d-block">{hotel.hotelName}</h4>
                                                <h4 className="d-block">{hotel.price}</h4>
                                            </div>
                                        </>
                                    )
                                })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
    
export default IndexTabs;