import React from 'react';
import tachyons from 'tachyons';
import './Avtar.css';
import img from './Image/developer.png';

const Avtar= (props) =>{
    return(
        <div className="box1">
    <div className=" imgstyle grow">
                    <img src={img} alt='ammarAvtar'/>
                    <h1>{props.name}</h1>
                    <p>{props.work}</p>
        
                </div>
                </div>
    )
}

export default Avtar;