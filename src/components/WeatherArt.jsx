import React from "react";
import { ART } from "../utils/weatherCodes";
import "./WeatherArt.css";

export default function WeatherArt({ place, weather, category }) {
  return (
    <div className="weather-card">
      <p className="weather-place">
        {place.name}
        <span>{place.region}</span>
      </p>

      {/* call the art image form the utils via category */}
      <img
        key={category}
        className="weather-art"
        src={ART[category]}
        alt={category}
      />

      <h2 className="weather-temp">{weather.temp}°F</h2>
      <p className="weather-label">{category}</p>

    <div className="weather-stats">
      <div>
        <span>Feels Like</span>
        {weather.feelslike}°F
      </div>
      <div>
        <span>Humidity</span>
        {weather.humidity}%
      </div>
      <div>
        <span>Wind</span>
        {weather.wind} mph
      </div>
    </div>
    </div>
  );
}
