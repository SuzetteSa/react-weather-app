import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastWeekday">Thu</div>
          <WeatherIcon code="01d" size={36}/>
          <div className="forecastTemperature">
            <span className="forecastTemperature-max">19°</span>{" "}
            <span className="forecastTemperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
