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

      <h2>{weather.temp}</h2>
      <p>{category}</p>
    </div>
  );
}
