import React from 'react';

import './Demo.css';

import Avtar from './Avtar';


const Demo =() => {
    return(<div className="main1">
            <h1> Welcome to My Page..</h1>
                <Avtar id='1' name="AMMAR" work="Web Developer"/>
               <div className="button">
                <a href="https://main.d3q1au4ui2khq.amplifyapp.com/" className="myButton grow">Click Here</a>
                </div>
            </div>
        )
}


export default Demo;
