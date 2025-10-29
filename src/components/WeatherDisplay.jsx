// src/components/WeatherDisplay.jsx
import React from "react";

function WeatherDisplay({ data }) {
  const weatherConditions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    61: "Slight rain showers",
    63: "Moderate rain",
    71: "Snow fall",
    80: "Rain showers",
    95: "Thunderstorm",
  };

  // Map weather condition codes to icon URLs or SVGs
  const weatherIcons = {
    0: "☀️", // Clear sky
    1: "🌤️", // Mainly clear
    2: "⛅", // Partly cloudy
    3: "☁️", // Overcast
    45: "🌫️", // Fog
    48: "🌫️", // Depositing rime fog
    51: "🌦️", // Light drizzle
    61: "🌧️", // Slight rain showers
    63: "🌧️", // Moderate rain
    71: "❄️", // Snow fall
    80: "🌦️", // Rain showers
    95: "⛈️", // Thunderstorm
  };

  const icon = weatherIcons[data.condition] || "🌈";

  return (
    <div className="weather-card">
      <h2>
        {icon} {data.city} • {data.country}
      </h2>
      <p>
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <h1>{data.temp}°C</h1>
      <p>{weatherConditions[data.condition] || "Weather info"}</p>

      <div className="weather-info">
        <div>
          <strong>{data.wind} km/h</strong>
          <p>💨Wind Speed</p>
        </div>
        <div>
          <strong>{data.humidity}%</strong>
          <p>💧Humidity</p>
        </div>
        <div>
          <strong>{data.uv || "NA"}</strong>
          <p>☀️UV Index</p>
        </div>
        <div>
          <strong>{data.visibility} km</strong>
          <p>👁️Visibility</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;