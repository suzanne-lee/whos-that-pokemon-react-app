import { useEffect, useState } from "react";
import React, { Component } from "react";
import Card from "./Card";

function PokemonCard(props) {
  function test() {
    let pokeName = props.pokemon[0];
    let pokeId = props.pokemon[1];
    console.log(pokeName);
    console.log(pokeId);
  }

  test();

  return (
    <div className="PokemonCard">
      <Card pokeName={props.pokemon[0]} pokeId={props.pokemon[1]} />
    </div>
  );
}

export default PokemonCard;
