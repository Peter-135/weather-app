import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import GetWeather from "./components/GetWeather";

const App = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);

      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=5e2c1492005767da5d9504070ca2b6a7`
        )
        .then((response) => {
          setData(response);
          setLoading(false);
          console.log(response);
        });
    });
  }, []);

  return (
    <div className="App myBackground">
      {loading ? <h1>Loading...</h1> : <GetWeather weatherData={data} />}
    </div>
  );
};

export default App;
