import React, {useState} from "react";
import axios from "axios"
import FormattedDate from "./FormattedDate"
import "./Weather.css";

export default function Weather(props) {
    const [ready, setReady]= useState(false)
    const [weatherData, setWeatherData] = useState({ready: false})
    function handleResponse(response){
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        iconURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        date:new Date(response.data.dt *1000),
      });
      
      
    }

    if (weatherData.ready) {
        return (
          <div className="Weather">
            <form>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city....."
                    className="form-control"
                    autoFocus="on"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
              <li><FormattedDate date={weatherData.date}/></li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
              <div className="col-6">
                <div className="clearfix">
                  <img
                    src={weatherData.iconURL}
                    alt="partly cloudy icon"
                    className="float-left"
                  />

                  <span className="temperature float-left">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit float-left">°F</span>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {Math.round(weatherData.wind)} mph</li>
                </ul>
              </div>
            </div>
          </div>
        );
    } else{
        
  let apiKey= "3cde88569b53e442b31a872afecfd5a1";
  let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiURL).then(handleResponse);

  return"Loading...."
    }

    
}
