import React from 'react';
import tachyons from 'tachyons';
import './Avtar.css';

const Avtar= (props) =>{
    return(
        <div className="box1">
    <div className=" imgstyle grow">
                    <img src="https://joeschmoe.io/api/v1/jamal" alt='ammarAvtar'/>
                    <h1>{props.name}</h1>
                    <p>{props.work}</p>
        
                </div>
                </div>
    )
}

export default Avtar;