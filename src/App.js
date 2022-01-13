/* Found a great tutorial for a simple weather app here:
https://www.youtube.com/watch?v=GuA0_Z1llYU&ab_channel=TylerPotts*/
import React, { useState } from 'react';
import './App.css';
import Heading from './Components/Heading'

//Set the key and host of the API
const api = {
  key: process.env.REACT_APP_API_KEY,
  host: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  //Function to call the API when the Enter key is pressed.
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.host}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(
          (result) => {
            setWeather(result);
            setQuery('');
            //Log results to console to check parameters of API
            console.log(result);
        });
    } 
  }

  //Function to display the current date with the weather results.
  const dateBuilder = (d) => {
    let months = ["January", 
                  "February", 
                  "March", 
                  "April", 
                  "May", 
                  "June", 
                  "July", 
                  "August", 
                  "September", 
                  "October", 
                  "November", 
                  "December"];

    let days = ["Sunday", 
                "Monday", 
                "Tuesday", 
                "Wednesday", 
                "Thursday", 
                "Friday", 
                "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    //Template for date to be returned
    return `${day}, ${date} ${month} ${year}`
  }

  //This creates the results each time a city is searched.
  return (
    <div className="App">

      <Heading />

      <div className='searchContainer'>
        <input
          type="text"
          className="searchBar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>

      {(typeof weather.main != "undefined") ? (
      <div>
        <div className='locationContainer'>
            <h5 className='location'>{weather.name}, {weather.sys.country}</h5>
            <p className='date pSmall'>{dateBuilder(new Date())}</p>  
        </div>

        <div className='weatherContainer'>
          <div className='temp'>
            <h2>{Math.round(weather.main.temp)}°C</h2>
          </div>
          <hr />
          <div className='weatherDetails'>
            <div className='min'>
              <p>min</p>
              <p>{Math.round(weather.main.temp_min)}°C</p>
            </div>
            <div className='max'>
              <p>max</p>
              <p>{Math.round(weather.main.temp_max)}°C</p>
            </div>
          </div>
        </div> 
      </div>
      ) : ('')}    
    </div>
  );
}

export default App;
