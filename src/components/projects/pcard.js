import React from 'react';
import './pcard.css';
import cimg from '../../assets/food_delivery.jpg'

function PCard(props) {
  return (
    <div className="card shadow  rounded">
      <a href={props.params.link} title={props.params.name}><img src={cimg} alt={props.params.name} /></a>
      <h2>{props.params.name}</h2>
      <p>{props.params.desc}</p>
      <span><a href={props.params.link}><button className='btn'>GITHUB</button></a><a href={props.params.link}><button className='btn'>DEMO</button></a></span>
    </div>
  );
}

export default PCard;
