// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import axios from "axios";
import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(
      "api.openweathermap.org/data/2.5/weather?q=weather&appid=b2c60a7b822f73d693cbf3545e890050"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <p>Temperature: {weather.main?.temp}°F</p>
      <p>Location: {weather.name}</p>
    </div>
  );
};

export default Weather;
