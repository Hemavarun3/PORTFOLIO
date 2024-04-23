import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css';
import Pcard from './pcard';

const data = [
  {
    "name": "AMUL-WEBSITE",
    "key": "1",
    "img": "src/assets/food_delivery.jpg",
    "github": "https://github.com/Hemavarun3/AMUL-WEBSITE",
    "demo": "https://github.com/Hemavarun3/AMUL-WEBSITE",
    "desc": "This is an E-commerce application built using MERN stack.Tech Stack Used: ExpressJS, NodeJS, ReactJs, MongoDB, Javascript,Html,Css."
  },
  {
    "name": "WEATHER-APP",
    "key": "2",
    "img": "src/assets/weatherapp.png",
    "github": "https://github.com/Hemavarun3/Weather-App",
    "demo": "https://weather-app-l53f.onrender.com/",
    "desc": "Designed a Weather App using HTML, CSS, and JavaScript, enabling real-time weather updates and location-based functionalities."
  },
  {
    "name": "PORTFOLIO",
    "key": "3",
    "img": "src/assets/portfolio.png",
    "github": "https://github.com/Hemavarun3/PORTFOLIO",
    "demo": "https://hemavarun-portfolio.netlify.app/",
    "desc": "Designed a Portfolio website using ReactJs, HTML, CSS, and JavaScript. using various prebuilt features in reactJs like Timeline Components etc."
  },
];

export default function Project() {
  return (
    <div className="container"> 
      <div className="row">
        {data.map(item => (
          <div className="col-4 card" key={item.key}>
            <Pcard params={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
