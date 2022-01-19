import React from 'react';
import './Pokecard.css';

function Pokecard(props) {
  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;

  return (
      <div className="Pokecard">
        <div className="title">{ props.name }</div>
        <img src={imgSrc} />
        <div>Type: {props.type}</div>
        <div>EXP: {props.exp}</div>
      </div>
  );
}

export default Pokecard;