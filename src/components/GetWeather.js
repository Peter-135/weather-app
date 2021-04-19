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

      <img
        src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt="Weather description"
      />
      <p>
        The current weather is {actualData.weather[0].main} and the description
        for the weather is {actualData.weather[0].description}
      </p>
      <p>
        The current temperature is{" "}
        {isCelsius
          ? convertToCelsius(mainData.temp)
          : convertToFahrenheit(mainData.temp)}
        , whilst the minimum and maximum temperatures are{" "}
        {isCelsius
          ? convertToCelsius(mainData.temp_min)
          : convertToFahrenheit(mainData.temp_min)}{" "}
        and{" "}
        {isCelsius
          ? convertToCelsius(mainData.temp_max)
          : convertToFahrenheit(mainData.temp_max)}
      </p>
      <p>
        The temperature feels like{" "}
        {isCelsius
          ? convertToCelsius(mainData.feels_like)
          : convertToFahrenheit(mainData.feels_like)}
      </p>
      <p>
        The wind speed and degrees is {dataWind.speed} and {dataWind.deg},
        respectively
      </p>
      <p>
        The sunrise and sunset values are {dataSys.sunrise} and {dataSys.sunset}
        , respectively
      </p>
      <p>
        The visibility is {actualData.visibility}, the humidity is{" "}
        {mainData.humidity} and the pressure is {mainData.pressure}
      </p>
      <p>
        The country code is {dataSys.country} and the timezone is{" "}
        {actualData.timezone}
      </p>
    </div>
  );
};

export default GetWeather;
