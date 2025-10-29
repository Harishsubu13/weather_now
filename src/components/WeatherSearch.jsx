import React, { useState } from "react";

function WeatherSearch({ onSearch }) {
  const [city, setcity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
        onSearch(city);
    } 
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px 0"}}>
        <input type="text" placeholder="Enter city" value={city} onChange={(e) => setcity(e.target.value)}
        style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            width: "70%",
            marginRight: "10px",
        }} />
        <button type="submit" style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#00bcd4",
            color: "white",
        }}>Search</button>
    </form>
  );
}

export default WeatherSearch;