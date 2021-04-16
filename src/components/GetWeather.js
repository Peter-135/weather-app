import React from "react";

const GetWeather = ({ weatherData }) => {
  const data = weatherData.data;
  const mainData = weatherData.data.main;
  const dataSys = data.sys;
  const dataWind = data.wind;

  return (
    <div>
      <h1>Weather Forecast</h1>
      <p>
        The current weather is {data.weather[0].main} and the description for
        the weather is {data.weather[0].description}
      </p>
      <p>
        The current temperature is {mainData.temp}, whilst the minimum and
        maximum temperatures are {mainData.temp_min} and {mainData.temp_max}
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
        The visibility is {data.visibility}, the humidity is {mainData.humidity}{" "}
        and the pressure is {mainData.pressure}
      </p>
      <p>
        The country code is {dataSys.country} and the timezone is{" "}
        {data.timezone}
      </p>
    </div>
  );
};

export default GetWeather;

//somehow use props to displayw weather from api
