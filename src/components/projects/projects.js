import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css';
import Pcard from './pcard';

const data = [
  {
    "name": "AMUL-WEBSITE",
    "key": "1",
    "img": "../../assets/food_delivery.jpg",
    "link": "https://weather-app-l53f.onrender.com/",
    "desc": "This is an E-commerce application built using MERN stack.Tech Stack Used: ExpressJS, NodeJS, ReactJs, MongoDB, Javascript,Html,Css."
  },
  {
    "name": "AMUL-WEBSITE",
    "key": "2",
    "img": "../../assets/food_delivery.jpg",
    "link": "https://weather-app-l53f.onrender.com/",
    "desc": "This is an E-commerce application built using MERN stack.Tech Stack Used: ExpressJS, NodeJS, ReactJs, MongoDB, Javascript,Html,Css."
  },
  {
    "name": "AMUL-WEBSITE",
    "key": "3",
    "img": "../../assets/food_delivery.jpg",
    "link": "https://weather-app-l53f.onrender.com/",
    "desc": "This is an E-commerce application built using MERN stack.Tech Stack Used: ExpressJS, NodeJS, ReactJs, MongoDB, Javascript,Html,Css."
  },
  {
    "name": "AMUL-WEBSITE",
    "key": "4",
    "img": "../../assets/food_delivery.jpg",
    "link": "https://weather-app-l53f.onrender.com/",
    "desc": "This is an E-commerce application built using MERN stack.Tech Stack Used: ExpressJS, NodeJS, ReactJs, MongoDB, Javascript,Html,Css."
  },
  {
    "name": "AMUL-WEBSITE",
    "key": "5",
    "img": "../../assets/food_delivery.jpg",
    "link": "https://weather-app-l53f.onrender.com/",
    "desc": "This is an E-commerce application built using MERN stack.Tech Stack Used: ExpressJS, NodeJS, ReactJs, MongoDB, Javascript,Html,Css."
  }
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
