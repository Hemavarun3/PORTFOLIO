import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css';
import cimg1 from "./images/food_delivery.png"
import cimg2 from "./images/weatherapp.png"
import cimg3 from "./images/portfolio.png"

const data = [
  {
    "name": "AMUL-WEBSITE",
    "key": "1",
    "img": "./images/food_delivery.jpg",
    "github": "https://github.com/Hemavarun3/TASTY_TREATS_FRONTEND",
    "demo": "https://tastytreatsecom.netlify.app",
    "desc": "This is an E-commerce application built using MERN stack.Tech Stack Used: ExpressJS, NodeJS, ReactJs, MongoDB, Javascript,Html,Css."
  },
  {
    "name": "WEATHER-APP",
    "key": "2",
    "img": "./assets/weatherapp.png",
    "github": "https://github.com/Hemavarun3/Weather-App",
    "demo": "https://weather-app-l53f.onrender.com/",
    "desc": "Designed a Weather App using HTML, CSS, and JavaScript, enabling real-time weather updates and location-based functionalities."
  },
  {
    "name": "PORTFOLIO",
    "key": "3",
    "img": "./assets/portfolio.png",
    "github": "https://github.com/Hemavarun3/PORTFOLIO",
    "demo": "https://hemavarun-portfolio.netlify.app/",
    "desc": "Designed a Portfolio website using ReactJs, HTML, CSS, and JavaScript. using various prebuilt features in reactJs like Timeline Components etc."
  },
];

export default function Project() {
  return (
    <div className="container"> 
      <div className="row">
      <div className="col-4 card rounded">
        <a href={data[0].demo} title={data[0].name}><img src={cimg1} alt={data[0].name} /></a>
          <h2>{data[0].name}</h2>
          <p>{data[0].desc}</p>
          <span><a href={data[0].github}><button className='btn'>GITHUB</button></a><a href={data[0].demo}><button className='btn'>DEMO</button></a></span>
      </div>
      <div className="card rounded col-4">
        <a href={data[1].demo} title={data[1].name}><img src={cimg2} alt={data[1].name} /></a>
          <h2>{data[1].name}</h2>
          <p>{data[1].desc}</p>
          <span><a href={data[1].github}><button className='btn'>GITHUB</button></a><a href={data[1].demo}><button className='btn'>DEMO</button></a></span>
      </div>
      <div className="card rounded col-4">
        <a href={data[2].demo} title={data[2].name}><img src={cimg3} alt={data[2].name} /></a>
          <h2>{data[2].name}</h2>
          <p>{data[2].desc}</p>
          <span><a href={data[2].github}><button className='btn'>GITHUB</button></a><a href={data[2].demo}><button className='btn'>DEMO</button></a></span>
      </div>
      </div>
    </div>
  );
}
