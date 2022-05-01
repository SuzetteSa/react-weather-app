import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(false);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecastWeekday">Thu</div>
            <WeatherIcon code="01d" size={36} />
            <div className="forecastTemperature">
              <span className="forecastTemperature-max">{forecast[0].temp.max}°</span>{" "}
              <span className="forecastTemperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "3cde88569b53e442b31a872afecfd5a1";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return null;
  }
}