import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Card from "./Card";
import Form from "./Form";
import Footer from "./Footer";
import EndOfGameMessage from "./EndOfGameMessage";
import "./App.css";
import "./images/pokemon-green-background.png";

function App(props) {
  const [pokeList, setPokeList] = useState(props.pokeList);
  const [currentPokemon, setCurrentPokemon] = useState({
    name: "",
    id: "",
    paddedPokeId: "",
    type1: "",
    type2: "",
    imageObjectURL: "",
  });
  const [userInput, setUserInput] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [seenCount, setSeenCount] = useState(0);
  const [caughtCount, setCaughtCount] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const pokemonCard =
    currentPokemon.name !== "" ? (
      <Card pokemon={currentPokemon} isHidden={isHidden} />
    ) : null;

  const form =
    currentPokemon.name !== "" ? (
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
    //  setSeenCount(seenCount + 1);
    let pokeName = response.data.name;
    let pokeId = response.data.id;
    let typeArr = response.data.types;
    let pokeType1 = typeArr[0].type.name;
    let pokeType2 = null;

    if (typeArr.length === 2) {
      pokeType2 = typeArr[1].type.name;
    }

    const paddedPokeId = `${pokeId}`.padStart(3, 0);
    const imageUrl = `/poke_pics/${paddedPokeId}.webp`;

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageObjectURL = URL.createObjectURL(imageBlob);

        setCurrentPokemon({
          name: pokeName,
          id: pokeId,
          paddedPokeId: paddedPokeId,
          type1: pokeType1,
          type2: pokeType2,
          imageObjectURL,
        });

        setSeenCount(seenCount + 1);
        setIsHidden(true);
      });
  }

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokeList[0]}/`;
    setPokeList(pokeList.slice(1));
    axios.get(apiUrl).then(onResponse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getNextPokemon() {
    if (pokeList.length > 0) {
      let nextPokemonId = pokeList[0];
      setPokeList(pokeList.slice(1));
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nextPokemonId}/`;
      axios.get(apiUrl).then(onResponse);
      setUserInput("");
    } else {
      setIsGameFinished(true);
    }
  }

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
