import React from "react";
import Card from "./Card";
import "./PokemonCard.css";

function PokemonCard(props) {
  /*
  const typeColour = {
    normal: {
      badge: "#A6A686",
      outline: "#686859",
      background: "#EBEBEB",
    },
    fighting: {
      badge: "#C03028",
      outline: "#850A03",
      background: "#FDDFDF",
    },
    flying: {
      badge: "#A890F0",
      outline: "#6544C9",
      background: "#E9E4F8",
    },
    poison: {
      badge: "#A040A0",
      outline: "#630963",
      background: "#F8D3F8",
    },
    ground: {
      badge: "#DEBD61",
      outline: "#957F44",
      background: "#F4E7DA",
    },
    rock: {
      badge: "#B8A038",
      outline: "#74610E",
      background: "#F1DEAA",
    },
    bug: {
      badge: "#A8B820",
      outline: "#586207",
      background: "#E3ED95",
    },
    ghost: {
      badge: "#705898",
      outline: "#392A51",
      background: "#CDC1DF",
    },
    steel: {
      badge: "#B0B0CD",
      outline: "#666683",
      background: "#DEE1ED",
    },
    fire: {
      badge: "#F08030",
      outline: "#AF5617",
      background: "#FFE0CF",
    },
    water: {
      badge: "#6890F0",
      outline: "#2954BA",
      background: "#D9EDFF",
    },
    grass: {
      badge: "#78C850",
      outline: "#36850F",
      background: "#DEFDE0",
    },
    electric: {
      badge: "#FFD016",
      outline: "#D9AE00",
      background: "#FCF7DE",
    },
    psychic: {
      badge: "#F85888",
      outline: "#CE003E",
      background: "#FFCFDE",
    },
    ice: {
      badge: "#87D6D6",
      outline: "#149898",
      background: "#D3FCFC",
    },
    dragon: {
      badge: "#7038F8",
      outline: "#310699",
      background: "#DACBFF",
    },
    dark: {
      badge: "#705848",
      outline: "#4F2A12",
      background: "#DCCEC6",
    },
    fairy: {
      badge: "#EE99AC",
      outline: "#C85C74",
      background: "#FCEAFF",
    },
  };*/

  /*
  function test() {
    let pokeName = props.pokemon[0];
    let pokeId = props.pokemon[1];
    //console.log(pokeName);
    //console.log(pokeId);
  }

  test();*/

  return (
    <div className="PokemonCard">
      <Card
        pokeName={props.pokemon[0]}
        pokeId={props.pokemon[1]}
        pokeType1={props.pokemon[2]}
        pokeType2={props.pokemon[3]}
      />
    </div>
  );
}

export default PokemonCard;
