import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://api.apixu.com/v1/current.json?key=42ad095b50654a8888a163551190209&q=${city}`
      )
      .then(response => {
        setWeather(response.data.current);
      });
  }, [city]);

  if (weather === "") {
    return <p>no country</p>;
  } else
    return (
      <>
        <h3>weather in {city}</h3>
        <p>{weather.temp_c}</p>
        <img alt="" src={weather.condition.icon} />
        <p>{weather.condition.text}</p>
        <p>
          wind: {weather.wind_kph} direction {weather.wind_dir}
        </p>
      </>
    );
};

export default Weather;
