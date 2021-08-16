import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export default function Search() {
  let [city, setCity] = useState(null);
  let [message, setMessage] = useState(null);

  function nameCity(event) {
    setCity(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "75ac3bc7bb5ea8d213f64346ce799072";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setMessage(
      <div>
        <li>Temperature: {Math.round(response.data.main.temp)}°F</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>
          Wind: {Math.round(response.data.wind.speed)}{" "}
          <span className="Wind">mph</span>
        </li>
        <li>
          <strong>
            Feels like: {Math.round(response.data.main.feels_like)}°F
          </strong>
        </li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="icon"
          />
        </li>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={nameCity}
        />
        <input type="submit" value="Search" />
      </form>
      <div>{message}</div>
    </div>
  );
}
