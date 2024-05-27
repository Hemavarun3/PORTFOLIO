import React from 'react';


function PCard(props) {
  console.log(props);
  return (
    <div className="h-64 w-64" id={props.key}>
      <a href={props.demo} title={props.name}><img src={(props.img)} alt={props.name} /></a>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <span><a href={props.github}><button className=''>GITHUB</button></a><a href={props.demo}><button className=''>DEMO</button></a></span>
    </div>
  );
}

export default PCard;
