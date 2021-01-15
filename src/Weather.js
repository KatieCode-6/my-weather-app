import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Type a city..." className="form-control" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary" />
                </div>
                </div>
            </form>
            <h1>London</h1>
        <ul>
            <li>Friday 21:00</li>
            <li>Mostly Sunny</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://cdn3.iconfinder.com/data/icons/photography-54/64/sunny-mode-camera-photography-512.png"
                alt="Mostly Sunny" height="70px" width="70px" />
                10 ℃
        </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: 80%</li>
                <li>Wind: 30 km/h</li>
            </ul>

        </div>

        </div>
        </div>
    );
}