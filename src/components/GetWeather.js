import React from "react";

const GetWeather = ({ weatherData }) => {
  const actualData = weatherData.data;
  const mainData = weatherData.data.main;
  const dataSys = weatherData.data.sys;
  const dataWind = weatherData.data.wind;
  const iconCode = weatherData.data.weather[0].icon;
  const temperature = weatherData.data.main;
  //const [temperature, setTemperature] = useState(weatherData.data.main);
  // C = K - 273.15

  const convertToCelsius = function (temperature) {
    return (temperature - 273.15).toFixed(2);
  };

  const convertToFahrenheit = function (temperature) {
    return ((temperature - 273.15) * (9 / 5) + 32).toFixed(2);
  };

  // {convertToCelsius(temperature.temp)}{" "}
  // {convertToFahrenheit(temperature.temp)}

  return (
    <div>
      <h1>Weather Forecast </h1>
      <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} />
      <p>
        {convertToCelsius(temperature.temp)}{" "}
        {convertToFahrenheit(temperature.temp)}
        The current weather is {actualData.weather[0].main} and the description
        for the weather is {actualData.weather[0].description}
      </p>
      <p>
        The current temperature is {mainData.temp} &deg;C , whilst the minimum
        and maximum temperatures are {mainData.temp_min} and {mainData.temp_max}
      </p>
      <p>The temperature feels like {mainData.feels_like}</p>
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
