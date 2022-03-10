import "./App.css";
import "./images/pokemon-green-background.png";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import EndOfGameMessage from "./EndOfGameMessage";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

function App(props) {
  const pokeList = props.pokeList;
  const [currentPokemon, setCurrentPokemon] = useState({
    name: "",
    id: "",
    type1: "",
    type2: "",
  });
  const [userInput, setUserInput] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [seenCount, setSeenCount] = useState(0);
  const [caughtCount, setCaughtCount] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeList[0]}/`;

  const pokemonCard =
    currentPokemon.name != "" ? (
      <Card
        pokemon={currentPokemon}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
    ) : null;

  const form =
    currentPokemon.name != "" ? (
      <Form
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        userInput={userInput}
        setUserInput={setUserInput}
        seenCount={seenCount}
        setSeenCount={setSeenCount}
        caughtCount={caughtCount}
        setCaughtCount={setCaughtCount}
        pokemon={currentPokemon}
        getNextPokemon={getNextPokemon}
        isGameFinished={isGameFinished}
      />
    ) : null;

  function onResponse(response) {
    setSeenCount(seenCount + 1);
    setIsHidden(true);
    let pokeName = response.data.name;
    let pokeId = pokeList[0];
    let typeArr = response.data.types;
    let pokeType1 = typeArr[0].type.name;
    let pokeType2 = null;

    if (typeArr.length === 2) {
      pokeType2 = typeArr[1].type.name;
    }

    setCurrentPokemon({
      name: pokeName,
      id: pokeId,
      type1: pokeType1,
      type2: pokeType2,
    });
  }

  useEffect(() => {
    axios.get(apiUrl).then(onResponse);
  }, [apiUrl]);

  function getNextPokemon(e) {
    e.preventDefault();

    if (pokeList.length > 1) {
      let nextPokemonId = pokeList.shift();
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nextPokemonId}/`;
      axios.get(apiUrl).then(onResponse);

      setUserInput("");
    } else {
      setIsGameFinished(true);
    }
  }

  /*
  if (pokeList.length === 0) {
    // setIsGameFinished(true);
    useEffect(() => setIsGameFinished(true));
  }*/

  useEffect(() => {
    if (pokeList.length === 0) {
      setIsGameFinished(true);
    }
  });

  return (
    <div className="App">
      <Header />
      <h2>Pokédex Count:</h2>
      <p id="counter">
        {caughtCount} Caught / {seenCount} Seen
      </p>
      {!isGameFinished ? pokemonCard : undefined}
      {!isGameFinished ? form : undefined}
      {isGameFinished ? <EndOfGameMessage /> : undefined}
      <Footer />
    </div>
  );
}

export default App;
