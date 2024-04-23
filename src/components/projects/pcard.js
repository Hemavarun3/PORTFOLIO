import React from 'react';
import './pcard.css';

function PCard(props) {
  return (
    <div className="card shadow  rounded">
      <a href={props.params.link} title={props.params.name}><img src={props.params.img} alt={props.params.name} /></a>
      <h2>{props.params.name}</h2>
      <p>{props.params.desc}</p>
      <span><a href={props.params.github}><button className='btn'>GITHUB</button></a><a href={props.params.demo}><button className='btn'>DEMO</button></a></span>
    </div>
  );
}

export default PCard;
