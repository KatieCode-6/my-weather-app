import react from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
    return ( 
        <div className= "weather-info"> 
    <h1>{props.data.city}</h1>
         
        <ul>
            <li>
                <CurrentDate date={props.data.date} />
            </li>

            <li className="text-capitalize">{props.data.description}</li>
        </ul>
    
        <div className="row mt-3">
            <div className="col-6">
                <img src= {props.data.iconUrl}
                alt={props.data.descripton} height="70px" width="70px" />
                <span className="temperature">{props.data.temperature}</span>
                <span className="unit">℃</span>
        </div>
        <div className="col-6">
            <ul>
                <li>Humidity: {props.data.humidity} %</li>
                <li>Wind: {props.data.wind} km/h</li>
            </ul>

        </div>

        </div>
        </div>
    );
}