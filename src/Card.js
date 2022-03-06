import React, { Component } from "react";
import "./Card.css";

function Card(props) {
  //console.log(props.pokeId);
  //console.log(`${props.pokeId}`.padStart(3, 0));
  let paddedPokeId = `${props.pokeId}`.padStart(3, 0);

  function capitalize(string) {
    if (string !== undefined) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return string;
    }
  }

  return (
    <div className="Card">
      <div className="flex-container">
        <div id="flex-item1">{capitalize(props.pokeName)}</div>
        <div id="flex-item2">#{paddedPokeId}</div>
      </div>
      <img className="pokeImg" src={`/poke_pics/${paddedPokeId}.webp`} />
      <span className="badge bg-secondary">{capitalize(props.pokeType1)}</span>
      <span className="badge bg-secondary">
        {props.pokeType2 == null ? "" : capitalize(props.pokeType2)}
      </span>
    </div>
  );
}

export default Card;
