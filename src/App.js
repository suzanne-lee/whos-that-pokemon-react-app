import "./App.css";
import "./images/pokemon-green-background.png";
import logo from "./images/Whos-that-Pokemon.png";
import Card from "./Card";
import PokemonCard from "./PokemonCard";
import axios from "axios";

import { useEffect, useState } from "react";
import React, { Component } from "react";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const pokeList = [];

  for (let i = 1; i <= 151; i++) {
    pokeList.push(i);
  }

  //console.log(pokeList);

  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffle(pokeList);
  //console.log(pokeList);

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeList[0]}/`;
  // pokeName = data.name

  function onResponse(response) {
    //console.log(response);

    let pokeName = response.data.name;
    let pokeId = pokeList[0];
    //console.log(pokeName);
    setCurrentPokemon([pokeName, pokeId]);
  }

  axios.get(apiUrl).then(onResponse);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Who's That Pokemon?" width="40%" />
      </header>
      <h1>How to Play: </h1>
      <PokemonCard pokemon={currentPokemon} />
      <Card />
      <footer>
        Made by{" "}
        <a
          href="https://www.linkedin.com/in/suzanne-lee-4b200317a/"
          target="_blank"
          rel="noreferrer"
        >
          Suzanne Lee
        </a>
        <br />
        Open Source on{" "}
        <a
          href="https://github.com/suzanne-lee/whos-that-pokemon-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <br />
        Images from{" "}
        <a
          href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number"
          target="_blank"
          rel="noreferrer"
        >
          Bulbapedia
        </a>
      </footer>
    </div>
  );
}

export default App;
