import "./App.css";
import "./images/pokemon-green-background.png";
import logo from "./images/Whos-that-Pokemon.png";
import Card from "./Card";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";
import React, { Component } from "react";

function App(props) {
  const [pokeList, setPokeList] = useState(props.pokeList);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isHidden, setisHidden] = useState(true);

  //console.log(pokeList[0]);

  // let currPokeId = pokeList.shift();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeList[0]}/`;
  // pokeName = data.name

  function onResponse(response) {
    //console.log(response);
    let pokeName = response.data.name;
    let pokeId = pokeList[0];
    //console.log(pokeName);
    //console.log(pokeId);
    setCurrentPokemon([pokeName, pokeId]);
  }

  //axios.get(apiUrl).then(onResponse);
  useEffect(() => {
    axios.get(apiUrl).then(onResponse);
  }, [apiUrl]);

  function handleInputChange(event) {
    // alert("A name was submitted: " + this.state.value);
    setUserInput(event.target.value);
    console.log(event.target.value);
  }

  useEffect(() => {
    if (userInput.toLowerCase() === currentPokemon[0]) {
      alert("HELLO");
      setisHidden(false);
      revealPokemon();
    }
  }, [userInput]);

  function revealPokemon() {
    document.querySelector(".pokeImg").style.webkitFilter = "grayscale(0%)";
    document.querySelector(".pokeImg").style.webkitFilter = "contrast(100%)";
    document.querySelector(".pokeImg").style.webkitFilter = "brightness(100%)";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="titleImg" src={logo} alt="Who's That Pokemon?" />
      </header>
      <h3>How to Play:</h3>
      <div className="instructionTextContainer">
        <p>
          Enter your guess below. When you get the answer right, the next
          Pokemon will appear.
        </p>
      </div>
      <PokemonCard pokemon={currentPokemon} />
      <form>
        <div className="form-group">
          <label htmlFor="input">Enter your guess below:</label>
          <input
            type="text"
            className="form-control"
            id="input"
            placeholder="Who's That Pokemon?"
            onChange={handleInputChange}
            value={userInput}
          />
        </div>
      </form>
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
