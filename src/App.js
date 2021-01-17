import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return <div className="App"> 
  <div className="container">
  <Weather defaultCity="London"/>
  <footer>
    This project is created by
     <a href="https://www.katiekovacova.co.uk/education.html" target="_blank"> Katie Kovacova </a>
    and is {" "}   
  <a href ="https://github.com/KatieCode-6/my-weather-app"
  target="_blank" >
    open-sources on GitHub
  </a>
  </footer>
  </div>
  </div>;
}


