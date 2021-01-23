import React, { useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            city: response.data.name,
            wind: Math.round(response.data.wind.speed),
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),

            

        });
        
    }

function search() {
   const apiKey = "9b2f4051e1ff26f23cc0eb1701d42f36";
   let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);


    }

    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
        

    }


    if (weatherData.ready) { 
    return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input 
                   type="search" 
                   placeholder="Type a city..." 
                   className="form-control" 
                   autoFocus="on"
                   onChange={handleCityChange}
                   />
                </div>
                <div className="col-3">
                <input 
                   type="submit" 
                   value="Search" 
                   className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast city={weatherData.city} />
            
        </div>
    );
    } else {
        search();
   
    return "Loading...";


   
    }
}