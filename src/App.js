import "./App.css";
import "./images/pokemon-green-background.png";
import logo from "./images/Whos-that-Pokemon.png";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function App(props) {
  const pokeList = props.pokeList;
  // const [pokeList, setPokeList] = useState(props.pokeList);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isHidden, setisHidden] = useState(true);
  const [seenCount, setSeenCount] = useState(1);
  const [caughtCount, setCaughtCount] = useState(0);

  //console.log(pokeList[0]);

  // let currPokeId = pokeList.shift();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeList[0]}/`;
  // pokeName = data.name

  function onResponse(response) {
    let pokeName = response.data.name;
    let pokeId = pokeList[0];
    // console.log(response);

    let typeArr = response.data.types;

    // console.log(typeArr);

    let pokeType1 = typeArr[0].type.name;
    let pokeType2 = null;

    if (typeArr.length === 2) {
      pokeType2 = typeArr[1].type.name;
    }

    console.log(pokeType1);
    console.log(pokeType2);

    setCurrentPokemon([pokeName, pokeId, pokeType1, pokeType2]);
  }

  //axios.get(apiUrl).then(onResponse);
  useEffect(() => {
    axios.get(apiUrl).then(onResponse);
  }, [apiUrl]);

  function handleInputChange(event) {
    event.preventDefault();
    // alert("A name was submitted: " + this.state.value);
    setUserInput(event.target.value);
    console.log(event.target.value);
  }

  function getNextPokemon(e) {
    e.preventDefault();
    hidePokemon();
    setUserInput("");
    setSeenCount(seenCount + 1);
    let nextPokemonId = pokeList.shift();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nextPokemonId}/`;
    axios.get(apiUrl).then(onResponse);
  }

  useEffect(() => {
    if (userInput.toLowerCase() === currentPokemon[0]) {
      // alert("HELLO");
      revealPokemon();
      setCaughtCount(caughtCount + 1);
      // getNextPokemon();
      /*setTimeout(() => {
        getNextPokemon();
      }, 2000);*/
      // document.getElementById("input").reset();
    }
  }, [userInput]);

  function revealPokemon() {
    setisHidden(false);
    document.querySelector(".pokeImg").style.webkitFilter = "grayscale(0%)";
    document.querySelector(".pokeImg").style.webkitFilter = "contrast(100%)";
    document.querySelector(".pokeImg").style.webkitFilter = "brightness(100%)";
  }

  function hidePokemon() {
    setisHidden(true);
    document.querySelector(".pokeImg").style.webkitFilter = "grayscale(100%)";
    document.querySelector(".pokeImg").style.webkitFilter = "contrast(0%)";
    document.querySelector(".pokeImg").style.webkitFilter = "brightness(0%)";
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
      <p id="counter">
        {caughtCount} Caught / {seenCount} Seen
      </p>
      <PokemonCard pokemon={currentPokemon} />
      <form onSubmit={(e) => e.preventDefault()}>
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
        {!isHidden ? (
          <button
            type="submit"
            className="btn btn-primary"
            onClick={getNextPokemon}
          >
            Next
          </button>
        ) : undefined}
      </form>

      <button type="button" className="btn btn-link" onClick={revealPokemon}>
        I don't know!
      </button>

      <hr />
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
