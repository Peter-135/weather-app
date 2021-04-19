import React from "react";
import { useEffect, useState } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const GetWeather = ({ weatherData }) => {
  const actualData = weatherData.data;
  const mainData = weatherData.data.main;
  const dataSys = weatherData.data.sys;
  const dataWind = weatherData.data.wind;
  const iconCode = weatherData.data.weather[0].icon;
  const temperature = weatherData.data.main;
  // const [temperature, setTemperature] = useState(weatherData.data.main);
  // C = K - 273.15

  const [isCelsius, setIsCelsius] = useState(false);

  const convert = () => {
    setIsCelsius(!isCelsius);
  };

  const convertToCelsius = function (temperature) {
    return (temperature - 273.15).toFixed(2);
  };
  const convertToFahrenheit = function (temperature) {
    return ((temperature - 273.15) * (9 / 5) + 32).toFixed(2);
  };

  // localStorage.setItem("changeCelsius", isCelsius);

  // {convertToCelsius(temperature.temp)}{" "}
  // {convertToFahrenheit(temperature.temp)}

  // useEffect(() => {
  //   const changeData = localStorage.getItem("convert-degress-fahrenheit");
  //   if (changeData) {
  //     setIsCelsius(changeData);
  //   }
  // }, []);

  useEffect(() => {
    const changeData = localStorage.getItem("isCelsius");
    return setIsCelsius(JSON.parse(changeData));
  }, []);

  useEffect(() => {
    localStorage.setItem("isCelsius", JSON.stringify(isCelsius));
  });

  return (
    <div>
      <h1>Weather Forecast </h1>
      <button onClick={convert}>Convert to {isCelsius ? "F" : "C"}</button>
      {/* <img
        src="https://popuppainting.com/wp-content/uploads/2018/08/blue-sky.jpg"
        alt="Weather background"
      /> */}
      <img
        src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt="Weather description"
      />
      <p>Current weather: {actualData.weather[0].main}</p>{" "}
      <p>Weather Description: {actualData.weather[0].description}</p>
      <p>
        Current Temperature:{" "}
        {isCelsius
          ? convertToCelsius(mainData.temp)
          : convertToFahrenheit(mainData.temp)}
        , Minimum Temperature{" "}
        {isCelsius
          ? convertToCelsius(mainData.temp_min)
          : convertToFahrenheit(mainData.temp_min)}
        , Maximum Temperature:{" "}
        {isCelsius
          ? convertToCelsius(mainData.temp_max)
          : convertToFahrenheit(mainData.temp_max)}
      </p>
      <p>
        Temperature Feels Like{" "}
        {isCelsius
          ? convertToCelsius(mainData.feels_like)
          : convertToFahrenheit(mainData.feels_like)}
      </p>
      <p>
        Wind Speed and Degrees is {dataWind.speed} and {dataWind.deg}
      </p>
      <p>
        The sunrise and sunset values are {dataSys.sunrise} and {dataSys.sunset}
        , respectively
      </p>
      <p>
        Visibility: {actualData.visibility}, Humidity: {mainData.humidity} and
        the pressure is {mainData.pressure}
      </p>
      <p>
        The country code is {dataSys.country} and the timezone is{" "}
        {actualData.timezone}
      </p>
    </div>
  );
};

export default GetWeather;
