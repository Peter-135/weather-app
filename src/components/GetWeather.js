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

  // https://static.thenounproject.com/png/1057070-200.png

  return (
    <div>
      <div className="left-side">
        <div className="box-1">
          <button className="button" onClick={convert}>
            Convert to {isCelsius ? "F" : "C"}
          </button>
        </div>
        <div className="box-2">
          <img
            src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
            alt="Weather description"
          />
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
          <h1>
            {isCelsius
              ? convertToCelsius(mainData.temp)
              : convertToFahrenheit(mainData.temp)}
          </h1>
        </div>
      </div>
      <div className="right-side">
        <div className="box-6">
          <div className="practice">
            <img
              src="https://orioni.co/nmedia/png/humidity-4401.png"
              alt="Humidity-icon"
            />
          </div>
          <p>Humidity</p>
          <h1> {mainData.humidity}%</h1>
        </div>
        <div className="box-7">
          <div className="practice">
            <img
              src="https://img.icons8.com/ios/452/atmospheric-pressure.png"
              alt="air-pressure-icon"
            />
          </div>
          <p>Atmospheric Pressure</p>
          <h1>
            {temperature.pressure} {""}hPa
          </h1>
        </div>
        <div className="box-8">
          <div className="practice">
            <img
              src={`https://static.thenounproject.com/png/1057070-200.png 
              `}
              alt="Wind-icon"
            />

            {/* https://static.thenounproject.com/png/1057070-200.png */}
          </div>
          <p>Wind Speed </p>
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
