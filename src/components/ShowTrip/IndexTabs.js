import React, { useState, useEffect, useCallback } from 'react';
import useNavigate from 'react-router-dom';
import styled from 'styled-components';
import TabContent from './Tab-Content';

const IndexTabs = (props) => {

    const tabHeaders = ["Hotel", "Transport", "Activities", "Food"]

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

    return (
        <>
        <div className="container border px-5 py-3 d-flex row">
            <div className="tab-row d-flex col">

                    {tabHeaders.map(tab => (
                        <ButtonToggle 
                        className="btn rounded-0 flex-fill"
                        key={tab}
                        active={active === tab}
                        onClick={() => setActive(tab)}
                        >
                        {/* will need to make onClick an actual function with an if statement */}
                        {tab}
                        </ButtonToggle>
                    ))}

            </div>
            {/* Tab Content */}
            <div className=" tab-content d-inline-block mx-2 mt-5 row">
                <h5>Choose from current options to add to your Itinerary:</h5>
                    <TabContent tripPlans={props.tripPlans} active={active} />
            </div>
        </div>
        </>
    )
}
    
export default IndexTabs;