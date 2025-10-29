import React, { useState} from "react";
import "./App.css";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");

      //use Open-meteo API (with geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError(`City not found.`);
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m,visibility,uv_index&timezone=auto`
      );

      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        country,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        humidity: weatherData.hourly.relativehumidity_2m[0],
        visibility:
        weatherData.hourly?.visibility?.[0]
          ? weatherData.hourly.visibility[0] / 1000
          : "N/A",
      uv: weatherData.hourly?.uv_index?.[0] || "N/A",
        condition: weatherData.current_weather.weathercode,
      });
    } catch (err) {
      setError(err.message || 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Weather Now</h1>
      <p>Quick weather insights for outdoor adventures</p>
      <WeatherSearch onSearch={fetchWeather} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherDisplay data={weather} />}
    </div>

  );
}

export default App;