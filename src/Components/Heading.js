import React from 'react';
import '../App.css';


function Heading(){
    return(
        <div className='header'>
        <h1 style={{marginTop: "80px"}}>Weather Forecast</h1>
        <p className='pLarge' style={{marginTop: "16px"}}>
          Search a city to see the current weather.
        </p>
      </div>
    );
}

export default Heading