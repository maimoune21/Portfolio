import React, { useState, useEffect } from "react";

const WeatherDisplay = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const API_KEY = "fdf657307e434da6b7e61637251510";
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Casablanca&aqi=no`
        );

        const data = await response.json();
        setTemperature(Math.round(data.current.temp_c));
      } catch (error) {
        console.error("Error fetching weather:", error);
        setTemperature("--");
      }
    };

    fetchWeather();

    const interval = setInterval(fetchWeather, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className="text-xl text-white">{temperature}°</p>;
};

export default WeatherDisplay;