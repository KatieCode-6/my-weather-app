import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);    
    
    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
       
       
    }

    if (loaded && props.city === forecast.city.name) {
        return (
        <div className="WeatherForecast row">
            {forecast.list.slice(0, 5).map(function(forecastItem) {
                return <WeatherForecastPreview data={forecastItem} />;
            })}
    </div>
);
    } else { 
    let apiKey = "9b2f4051e1ff26f23cc0eb1701d42f36";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
   }
}