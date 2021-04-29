import React from "react";
import { useEffect, useState } from "react";

const GetWeather = ({ weatherData }) => {
  const actualData = weatherData.data;
  const mainData = weatherData.data.main;
  const dataSys = weatherData.data.sys;
  const dataWind = weatherData.data.wind;
  const iconCode = weatherData.data.weather[0].icon;
  const temperature = weatherData.data.main;

  const [isCelsius, setIsCelsius] = useState(false);

  const convert = () => {
    setIsCelsius(!isCelsius);
  };

  const convertToCelsius = function (temperature) {
    return (temperature - 273.15).toFixed(0);
  };
  const convertToFahrenheit = function (temperature) {
    return ((temperature - 273.15) * (9 / 5) + 32).toFixed(0);
  };

  useEffect(() => {
    const changeData = localStorage.getItem("isCelsius");
    return setIsCelsius(JSON.parse(changeData));
  }, []);

  useEffect(() => {
    localStorage.setItem("isCelsius", JSON.stringify(isCelsius));
  });

  const weatherImage = function () {
    const weatherCondition = actualData.weather[0].description;
    if (weatherCondition.includes("cloud")) {
      return "cloudyWeather";
    } else if (weatherCondition.includes("clear")) {
      return "clearWeather";
    } else if (weatherCondition.includes("rain")) {
      return "rainyWeather";
    }
  };

  const getWeatherIcon = (iconCode) => {
    let iconUrl = null;
    if (iconCode === "02d" || iconCode === "03d" || iconCode === "04d") {
      iconUrl =
        "https://cdn2.iconfinder.com/data/icons/spring-flat-11/272/spring-cloud-weather-database-network-upload-download-256.png";
    } else if (iconCode === "01d") {
      iconUrl =
        "https: //icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-clear-icon.png";
    } else if (iconCode === "09d" || iconCode === "10d") {
      iconUrl =
        "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather05-512.png";
    }

    return iconUrl;
  };

  return (
    <div className={`background ${weatherImage()}`}>
      <div className="left-side">
        <div className="box-1">
          <button className="button" onClick={convert}>
            Convert to {isCelsius ? "F" : "C"}
          </button>
        </div>
        <div className="box-2">
          <img src={`${getWeatherIcon(iconCode)}`} alt="Weather description" />
        </div>
        <div className="box-3">
          <p>Weather </p>
          <h1>{actualData.weather[0].main} </h1>
        </div>
        <div className="box-4">
          <p>Description</p>
          <h1> {actualData.weather[0].description}</h1>{" "}
        </div>
        <div className="box-5">
          <p>Current Temp </p>
          <h2>
            {isCelsius
              ? convertToCelsius(mainData.temp)
              : convertToFahrenheit(mainData.temp)}
          </h2>
        </div>
      </div>
      <div className="right-side">
        <div className="box-6">
          <p>
            <div className="practice">
              <img
                src="
              https://weather-app2.netlify.app/img/humidity.png"
                alt="Humidity-icon"
              />
            </div>
            Humidity
          </p>
          <h1> {mainData.humidity}%</h1>
        </div>
        <div className="box-7">
          <p>
            {" "}
            <div className="practice">
              <img
                src="https://weather-app2.netlify.app/img/air-pressure.png"
                alt="air-pressure-icon"
              />
            </div>
            Air Pressure
          </p>
          <h1>
            {temperature.pressure} {""}hPa
          </h1>
        </div>
        <div className="box-8">
          <p>
            {" "}
            <div className="practice">
              <img
                src={`https://image.flaticon.com/icons/png/512/191/191055.png
              `}
                alt="Wind-icon"
              />
            </div>{" "}
            Wind Speed
          </p>
          <h1>
            {dataWind.speed} {""} m/s
          </h1>
        </div>
      </div>
      <div className="clr"></div>
      <div className="bottom">
        <div className="box-9">
          <p>Current Temp </p>
          <h1>
            {isCelsius
              ? convertToCelsius(mainData.temp)
              : convertToFahrenheit(mainData.temp)}
          </h1>
        </div>
        <div className="box-10">
          <p>Feels Like </p>
          <h1>
            {isCelsius
              ? convertToCelsius(mainData.feels_like)
              : convertToFahrenheit(mainData.feels_like)}
          </h1>
        </div>
        <div className="box-11">
          <p>Min Temp </p>
          <h1>
            {isCelsius
              ? convertToCelsius(mainData.temp_min)
              : convertToFahrenheit(mainData.temp_min)}{" "}
          </h1>
        </div>
        <div className="box-12">
          <p>Max Temp </p>
          <h1>
            {isCelsius
              ? convertToCelsius(mainData.temp_max)
              : convertToFahrenheit(mainData.temp_max)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GetWeather;

{
  /* <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} */
}
