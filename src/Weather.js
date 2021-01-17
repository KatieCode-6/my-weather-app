import React, { useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            city: response.data.name,
            wind: Math.round(response.data.wind.speed),
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: "https://cdn3.iconfinder.com/data/icons/photography-54/64/sunny-mode-camera-photography-512.png",
            date: "Sonday 21:00",

            

        });
        
    }


    if (weatherData.ready) { 
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Type a city..." className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
         
        <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
    
        <div className="row mt-3">
            <div className="col-6">
                <img src= {weatherData.iconUrl}
                alt={weatherData.descripton} height="70px" width="70px" />
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">℃</span>
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {weatherData.wind} km/h</li>
            </ul>

        </div>

        </div>
        </div>
    );
    } else {
   const apiKey = "025dbd8bd1860456ace0cde3c332dc7f";
   let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);

    return "Loading...";


   
    }
}