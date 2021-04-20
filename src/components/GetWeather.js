import React from "react";
import { useEffect, useState } from "react";

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
      <button className="button" onClick={convert}>
        Convert to {isCelsius ? "F" : "C"}
      </button>
      {/* <img
        src="https://popuppainting.com/wp-content/uploads/2018/08/blue-sky.jpg"
        alt="Weather background"
      /> */}
      <img
        src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt="Weather description"
      />
      <div className="container-1">
        <div className="Box-1">
          <p>Weather: </p>
          <p>{actualData.weather[0].main} </p>
        </div>
        <div className="box-2">
          <p>Description:</p>
          <p> {actualData.weather[0].description}</p>{" "}
        </div>
        <div className="Box-3">
          <p>
            Current Temp:{" "}
            {isCelsius
              ? convertToCelsius(mainData.temp)
              : convertToFahrenheit(mainData.temp)}
          </p>
          <p>
            Feels Like:{" "}
            {isCelsius
              ? convertToCelsius(mainData.feels_like)
              : convertToFahrenheit(mainData.feels_like)}
          </p>
        </div>
        <div className="Box-4">
          <p>
            Min Temp:{" "}
            {isCelsius
              ? convertToCelsius(mainData.temp_min)
              : convertToFahrenheit(mainData.temp_min)}{" "}
          </p>
          <p>
            Max Temp:{" "}
            {isCelsius
              ? convertToCelsius(mainData.temp_max)
              : convertToFahrenheit(mainData.temp_max)}
          </p>
        </div>
        <div className="Box-5">
          <p>Wind Speed: </p>
          <p>{dataWind.speed}m/s</p>
        </div>
        <div className="Box-6">
          <p>Humidity:</p>
          <p> {mainData.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default GetWeather;

{
  /* <p>
The sunrise and sunset values are {dataSys.sunrise} and {dataSys.sunset}
, respectively
</p> */
}
