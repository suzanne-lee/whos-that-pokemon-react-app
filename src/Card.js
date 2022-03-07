import React, { Component } from "react";
import "./Card.css";
import PokeTypeBadge from "./PokeTypeBadge";

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

  const typeColour = {
    normal: {
      badge: "#A6A686",
      border: "#686859",
      background: "#EBEBEB",
    },
    fighting: {
      badge: "#C03028",
      border: "#850A03",
      background: "#FDDFDF",
    },
    flying: {
      badge: "#A890F0",
      border: "#6544C9",
      background: "#E9E4F8",
    },
    poison: {
      badge: "#A040A0",
      border: "#630963",
      background: "#FFE4FF",
    },
    ground: {
      badge: "#DEBD61",
      border: "#957F44",
      background: "#F4E7DA",
    },
    rock: {
      badge: "#B8A038",
      border: "#74610E",
      background: "#F1DEAA",
    },
    bug: {
      badge: "#A8B820",
      border: "#586207",
      background: "#F0F8B6",
    },
    ghost: {
      badge: "#705898",
      border: "#392A51",
      background: "#CDC1DF",
    },
    steel: {
      badge: "#B0B0CD",
      border: "#666683",
      background: "#DEE1ED",
    },
    fire: {
      badge: "#F08030",
      border: "#AF5617",
      background: "#FFE0CF",
    },
    water: {
      badge: "#6890F0",
      border: "#2954BA",
      background: "#D9EDFF",
    },
    grass: {
      badge: "#78C850",
      border: "#36850F",
      background: "#DEFDE0",
    },
    electric: {
      badge: "#FFD016",
      border: "#D9AE00",
      background: "#FCF7DE",
    },
    psychic: {
      badge: "#F85888",
      border: "#CE003E",
      background: "#FFCFDE",
    },
    ice: {
      badge: "#87D6D6",
      border: "#149898",
      background: "#D3FCFC",
    },
    dragon: {
      badge: "#7038F8",
      border: "#310699",
      background: "#DACBFF",
    },
    dark: {
      badge: "#705848",
      border: "#4F2A12",
      background: "#DCCEC6",
    },
    fairy: {
      badge: "#EE99AC",
      border: "#C85C74",
      background: "#FCEAFF",
    },
  };

  let cardBorderColour = "";
  let cardBackgroundColour = "";

  switch (props.pokeType1) {
    case "normal":
      cardBorderColour = typeColour.normal.border;
      cardBackgroundColour = typeColour.normal.background;
      break;
    case "fighting":
      cardBorderColour = typeColour.fighting.border;
      cardBackgroundColour = typeColour.fighting.background;
      break;
    case "flying":
      cardBorderColour = typeColour.flying.border;
      cardBackgroundColour = typeColour.flying.background;
      break;
    case "poison":
      cardBorderColour = typeColour.poison.border;
      cardBackgroundColour = typeColour.poison.background;
      break;
    case "ground":
      cardBorderColour = typeColour.ground.border;
      cardBackgroundColour = typeColour.ground.background;
      break;
    case "rock":
      cardBorderColour = typeColour.rock.border;
      cardBackgroundColour = typeColour.rock.background;
      break;
    case "bug":
      cardBorderColour = typeColour.bug.border;
      cardBackgroundColour = typeColour.bug.background;
      break;
    case "ghost":
      cardBorderColour = typeColour.ghost.border;
      cardBackgroundColour = typeColour.ghost.background;
      break;
    case "steel":
      cardBorderColour = typeColour.steel.border;
      cardBackgroundColour = typeColour.steel.background;
      break;
    case "fire":
      cardBorderColour = typeColour.fire.border;
      cardBackgroundColour = typeColour.fire.background;
      break;
    case "water":
      cardBorderColour = typeColour.water.border;
      cardBackgroundColour = typeColour.water.background;
      break;
    case "grass":
      cardBorderColour = typeColour.grass.border;
      cardBackgroundColour = typeColour.grass.background;
      break;
    case "electric":
      cardBorderColour = typeColour.electric.border;
      cardBackgroundColour = typeColour.electric.background;
      break;
    case "psychic":
      cardBorderColour = typeColour.psychic.border;
      cardBackgroundColour = typeColour.psychic.background;
      break;
    case "ice":
      cardBorderColour = typeColour.ice.border;
      cardBackgroundColour = typeColour.ice.background;
      break;
    case "dragon":
      cardBorderColour = typeColour.dragon.border;
      cardBackgroundColour = typeColour.dragon.background;
      break;
    case "dark":
      cardBorderColour = typeColour.dark.border;
      cardBackgroundColour = typeColour.dark.background;
      break;
    case "fairy":
      cardBorderColour = typeColour.fairy.border;
      cardBackgroundColour = typeColour.fairy.background;
      break;
  }

  console.log("BORDER COLOUR: " + cardBorderColour);

  return (
    <div
      className="Card"
      style={{
        backgroundColor: cardBackgroundColour,
        borderColor: cardBorderColour,
      }}
    >
      <div className="flex-container">
        <div id="flex-item1">{capitalize(props.pokeName)}</div>
        <div id="flex-item2">#{paddedPokeId}</div>
      </div>
      <img className="pokeImg" src={`/poke_pics/${paddedPokeId}.webp`} />
      {/** <span className="badge poison">{capitalize(props.pokeType1)}</span>
      <span className="badge" style={{ backgroundColor: "#EE99AC" }}>
        {capitalize(props.pokeType1)}
      </span>
      <span className="badge bg-secondary">
        {props.pokeType2 == null ? "" : capitalize(props.pokeType2)}
      </span>*/}

      <PokeTypeBadge pokeType={props.pokeType1} />
      <PokeTypeBadge pokeType={props.pokeType2} />
    </div>
  );
}

export default Card;
