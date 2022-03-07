import React, { Component } from "react";

function PokeTypeBadge(props) {
  function capitalize(string) {
    if (string !== undefined) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return string;
    }
  }

  const typeColour = {
    normal: "#A6A686",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#DEBD61",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B0B0CD",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#FFD016",
    psychic: "#F85888",
    ice: "#87D6D6",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
  };

  let badgeColour = "";

  switch (props.pokeType) {
    case "normal":
      badgeColour = typeColour.normal;
      break;
    case "fighting":
      badgeColour = typeColour.fighting;
      break;
    case "flying":
      badgeColour = typeColour.flying;
      break;
    case "poison":
      badgeColour = typeColour.poison;
      break;
    case "ground":
      badgeColour = typeColour.ground;
      break;
    case "rock":
      badgeColour = typeColour.rock;
      break;
    case "bug":
      badgeColour = typeColour.bug;
      break;
    case "ghost":
      badgeColour = typeColour.ghost;
      break;
    case "steel":
      badgeColour = typeColour.steel;
      break;
    case "fire":
      badgeColour = typeColour.fire;
      break;
    case "water":
      badgeColour = typeColour.water;
      break;
    case "grass":
      badgeColour = typeColour.grass;
      break;
    case "electric":
      badgeColour = typeColour.electric;
      break;
    case "psychic":
      badgeColour = typeColour.psychic;
      break;
    case "ice":
      badgeColour = typeColour.ice;
      break;
    case "dragon":
      badgeColour = typeColour.dragon;
      break;
    case "dark":
      badgeColour = typeColour.dark;
      break;
    case "fairy":
      badgeColour = typeColour.fairy;
      break;
  }

  // let tmp1 = typeColour.fairy.badge;

  return (
    <span className="badge" style={{ backgroundColor: badgeColour }}>
      {props.pokeType == null ? "" : capitalize(props.pokeType)}
    </span>
  );
}

export default PokeTypeBadge;
