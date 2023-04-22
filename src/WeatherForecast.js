import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  // if the coordinates change
  // set loaded to false (code below)
  // use useEffect & change [input] to when coordinates are changing "props.coordinates"
  // this is needed because the 5-day forecast didnt change coordinates depending on city searched

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "37a2a46b333cct4ffebf207fd51o0167";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
