import React from "react";

const GetWeather = ({ weatherData }) => {
  return (
    <div>
      <h1>Weather Forecast</h1>
      <p>
        The current weather is {weatherData.data.weather[0].main} and the
        description for the weather is {weatherData.data.weather[0].description}
      </p>
      <p>
        The current temperature is {weatherData.data.main.temp}, whilst the
        minimum and maximum temperatures are {weatherData.data.main.temp_min}{" "}
        and {weatherData.data.main.temp_max}
      </p>
      <p>The temperature feels like {weatherData.data.main.feels_like}</p>
      <p>
        The wind speed and degrees is {weatherData.data.wind.speed} and{" "}
        {weatherData.data.wind.deg}, respectively
      </p>
      <p>
        The sunrise and sunset values are {weatherData.data.sys.sunrise} and{" "}
        {weatherData.data.sys.sunset}, respectively
      </p>
      <p>
        The visibility is {weatherData.data.visibility}, the humidity is{" "}
        {weatherData.data.main.humidity} and the pressure is{" "}
        {weatherData.data.main.pressure}
      </p>
      <p>
        The country code is {weatherData.data.sys.country} and the timezone is{" "}
        {weatherData.data.timezone}
      </p>
    </div>
  );
};

export default GetWeather;

//somehow use props to displayw weather from api
