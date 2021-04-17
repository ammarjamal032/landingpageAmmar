import React from "react";
import './Mainpage.css';
import img1 from '../Image/patient.png';
import img2 from '../Image/social-distancing.png';
import img3 from '../Image/wash-your-hands.png';
import img4 from '../Image/home.png';




const  Mainpage =() =>{
    return(
            <div>
            <div className="alrt">
                <a className="tc" href='https://www.mygov.in/covid-19/'>Covid-19</a>
                <p>Protect yourself and others around you by knowing the facts and taking appropriate precautions.
                    Follow advice provided by your local health authority.</p>
            </div>
       <div className="mainpage1">
           
            <div className="subpage grow">
                <img src={img1} alt='mask'/>
                <h1>Always Wear Mask</h1>
                </div>
                <div className="subpage grow">
                <img src={img2} alt='mask'/>
                <h1>Maintain Social Distancing</h1>
                </div>
                <div className="subpage grow">
                <img src={img3} alt='mask'/>
                <h1>Wash Your Hand Frequently</h1>
                </div>
                <div className="subpage grow">
                <img src={img4} alt='mask'/>
                <h1>Stay Home! Stay Safe!</h1>
                </div>

        </div>
        </div>
    )

}
export default Mainpage;


