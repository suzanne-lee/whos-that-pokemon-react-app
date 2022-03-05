import React, { Component } from "react";
import "./Card.css";

function Card(props) {
  //console.log(props.pokeId);
  //console.log(`${props.pokeId}`.padStart(3, 0));
  let paddedPokeId = `${props.pokeId}`.padStart(3, 0);
  return (
    <div className="Card">
      {props.pokeName}
      <img className="pokeImg" src={`/poke_pics/${paddedPokeId}.webp`} />
    </div>
  );
}

export default Card;
