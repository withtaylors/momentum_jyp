import { useState, useEffect } from "react";
import styles from "./Weather.module.css";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState("");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const API_KEY = process.env.REACT_APP_Weather_API_KEY;
  //api 가져오기
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5a204da8a92b14000f77ff91db5c1f3b`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (
      weather?.weather[0].description === "shower rain" ||
      weather?.weather[0].description === "light rain" ||
      weather?.weather[0].description === "moderatet rain" ||
      weather?.weather[0].description === "Rain"
    ) {
      setWeatherIcon("🌧");
    } else if (weather?.weather[0].description === "Thunderstorm") {
      setWeatherIcon("🌩");
    } else if (weather?.weather[0].description === "mist") {
      setWeatherIcon("🌦");
    } else if (weather?.weather[0].description === "snow") {
      setWeatherIcon("🌨");
    } else if (
      weather?.weather[0].description === "Atmosphere" ||
      weather?.weather[0].description === "Haze"
    ) {
      setWeatherIcon("🌫");
    } else if (weather?.weather[0].description === "clear sky") {
      setWeatherIcon("☀");
    } else if (
      weather?.weather[0].description === "overcast clouds" ||
      weather?.weather[0].description === "few clouds" ||
      weather?.weather[0].description === "scattered clouds" ||
      weather?.weather[0].description === "broken clouds"
    ) {
      setWeatherIcon("☁");
    }
    console.log(weather?.weather[0].description);
  }, [weather]);

  return (
    <div className={styles.container}>
      <div>{weather?.name}</div>
      <h2>{(weather?.main.temp - 273.15).toFixed(2)}℃</h2>
      <span className={styles.weatherIcon}>{weatherIcon}</span>
      {/* <h3>{weather?.weather[0].description}</h3> */}
    </div>
  );
}

export default Weather;
