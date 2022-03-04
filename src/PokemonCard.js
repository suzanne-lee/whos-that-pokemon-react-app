import { useEffect, useState } from "react";
import React, { Component } from "react";

function PokemonCard(props) {
  function test() {
    let pokeName = props.pokemon[0];
    // console.log(pokeName);
  }

  test();

  return <div className="PokemonCard"></div>;
}

export default PokemonCard;
