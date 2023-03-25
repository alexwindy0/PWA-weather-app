import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import './App.css';
import Aos from "aos";

const App = () => {
  // creating and destructuring the query to useState
  const [query, SetQuery] = useState('');
  const [weather, SetWeather] = useState({});
  const func = () =>{
    Aos.init({
      duration: 1000,
      }); 
  };
  
  //create a search function
  const Search = async (e) => {
    if(e.key === 'Enter'){
      const data = await fetchWeather(query);
      SetWeather(data);
      //created a useState to get the weather object data

      SetQuery('');
      //reset search bar after clicking the enter button
    }
  }

  return (
    <div className="main-container">
    <h2 className="h2" data-aos="zoom-in">Weather App</h2>
    <input
      data-aos="flip-up"
      type="text"
      className="search"
      placeholder="Search..."
      value={query}
      onChange={(e) => SetQuery(e.target.value)}
      onKeyPress={Search}
    />

    {weather.main && (
      //if weather exists, we get the data, if it doesnt, we don't get nor receive anything.
      <div className="city" data-aos="zoom-out">
        <h2 className="city-name">
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </h2>
        <div className="city-temp">

          {Math.round(weather.main.temp)}
          <sup>&deg;C</sup>
        </div>
        <div className="info">
          <img className="city-icon" 
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
          alt={weather.weather[0].description}/>

          <p>{weather.weather[0].description}</p>
        </div>
      </div>

    )}
      {func()}
    </div>
  );
}

export default App;
