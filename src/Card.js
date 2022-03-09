import React from "react";
import "./Card.css";
import Badge from "./Badge";
import { pokeTypeMap } from "./PokemonType";

function Card(props) {
  let paddedPokeId = `${props.pokeId}`.padStart(3, 0);

  function capitalize(string) {
    if (string !== undefined) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return string;
    }
  }

  let pokeType1 = props.pokeType1;
  let pokeType2 = props.pokeType2;

  if (pokeType1 === undefined) {
    pokeType1 = "default";
    pokeType2 = "default";
  }

  return (
    <div
      className="Card"
      style={{
        backgroundColor: pokeTypeMap.get(pokeType1).cardBackground,
        borderColor: pokeTypeMap.get(pokeType1).cardBorder,
      }}
    >
      <div className="flex-container1">
        <div id="flex-item1">{capitalize(props.pokeName)}</div>
        <div id="flex-item2">#{paddedPokeId}</div>
      </div>
      <div className="img-container">
        <img
          className="pokeImg"
          src={`/poke_pics/${paddedPokeId}.webp`}
          alt=""
        />
      </div>
      <Badge pokeType={props.pokeType1} />
      <Badge pokeType={props.pokeType2} />
    </div>
  );
}

export default Card;
