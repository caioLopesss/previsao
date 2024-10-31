import { useState, useRef } from "react";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import axios from "axios";

import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "01be2371f43ebdeb91f5caa057b85981";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const apiInfo = await axios.get(url);
    setWeather(apiInfo.data);
  }

  return (
    <>
      <div>
        <h1>dev lub previsão do tempo</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite o nome da cidade"
        />
        <button onClick={searchCity}>Buscar</button>
        <WeatherInformations weather={weather} />
      </div>
    </>
  );
}

export default App;
