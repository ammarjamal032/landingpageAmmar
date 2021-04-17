import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo';
import Mainpage from './file/Mainpage';


ReactDOM.render(<div>
                <Demo/>
                <Mainpage/>
                </div>
                ,document.getElementById('root')
);


reportWebVitals();
