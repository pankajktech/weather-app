import { useState, useEffect } from "react";
import axios from "axios";

import ShowWeather from "./Components/ShowWeather";

const App = () => {
  const api_key = "d32406cb845b9b835a54dc54295c7efc";
  const [Inputcity, setInputCity] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    getWeatherDetails("Rajkot");
  }, []);

  const getWeatherDetails = (city) => {
    if (!city) {
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-slate-900 flex flex-col items-center min-h-screen">
      <div className=" flex flex-col my-10 ">
        <input
          type="text"
          placeholder="Enter City"
          className=" w-80 lg:w-[600px] ring-1 p-2 m-auto rounded-md"
          value={Inputcity}
          onChange={(e) => {
            setInputCity(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getWeatherDetails(Inputcity);
            }
          }}
        />
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white rounded-md  w-80 lg:w-[600px] p-2 m-auto mt-5"
          onClick={() => {
            getWeatherDetails(Inputcity);
          }}
        >
          Search
        </button>
      </div>
      <ShowWeather data={data} />
    </div>
  );
};

export default App;
