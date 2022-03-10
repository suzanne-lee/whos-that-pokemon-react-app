import React from "react";
import Badge from "./Badge";
import { pokeTypeMap } from "./PokemonType";
import "./Card.css";

function Card(props) {
  function capitalize(string) {
    if (string !== undefined) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return string;
    }
  }

  let pokeType1 = props.pokemon.type1;
  let pokeType2 = props.pokemon.type2;

  if (pokeType1 === undefined) {
    pokeType1 = "default";
    pokeType2 = "default";
  }

  const badge1 = !props.isHidden ? (
    <Badge pokeType={props.pokemon.type1} />
  ) : null;

  const badge2 = !props.isHidden ? (
    <Badge pokeType={props.pokemon.type2} />
  ) : null;

  const pokeName = !props.isHidden ? (
    <div id="flex-item1">{capitalize(props.pokemon.name)}</div>
  ) : null;

  const pokeId = !props.isHidden ? (
    <div id="flex-item2">#{props.pokemon.paddedPokeId}</div>
  ) : null;

  return (
    <div
      className="Card"
      style={
        props.isHidden
          ? {
              backgroundColor: pokeTypeMap.get("default").cardBackground,
              borderColor: pokeTypeMap.get("default").cardBorder,
            }
          : {
              backgroundColor: pokeTypeMap.get(pokeType1).cardBackground,
              borderColor: pokeTypeMap.get(pokeType1).cardBorder,
            }
      }
    >
      <div className="flex-container1">
        {pokeName}
        {pokeId}
      </div>
      <div className="img-container">
        <img
          className={`pokeImg ${props.isHidden ? "hidden" : "visible"}`}
          src={props.pokemon.imageObjectURL}
          alt=""
        />
      </div>
      {badge1}
      {badge2}
    </div>
  );
}

export default Card;
