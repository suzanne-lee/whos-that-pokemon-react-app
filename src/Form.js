import React from "react";
import { useEffect, useState } from "react";
import "./Form.css";

function Form(props) {
  const [isLoading, setIsLoading] = useState(false);
  function handleInputChange(event) {
    event.preventDefault();
    props.setUserInput(event.target.value);
  }

  function isValidInput() {
    if (props.userInput.toLowerCase() === props.pokemon.name) {
      return true;
    }

    if (props.pokemon.name === "mr-mime") {
      return ["mr mime", "mr.mime", "mr. mime"].includes(
        props.userInput.toLowerCase()
      );
    }

    if (
      props.pokemon.name === "nidoran-f" ||
      props.pokemon.name === "nidoran-m"
    ) {
      return ["nidoran"].includes(props.userInput.toLowerCase());
    }

    return false;
  }

  useEffect(() => {
    if (isValidInput() && props.isHidden) {
      props.setIsHidden(false);
      props.setCaughtCount(props.caughtCount + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userInput]);

  useEffect(() => {
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.pokemon.id]);

  function revealPokemon() {
    props.setIsHidden(false);
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <div className="form-group">
          <label htmlFor="input">Enter your guess below:</label>
          <input
            type="text"
            className="form-control"
            id="input"
            placeholder="Who's That Pokémon?"
            onChange={handleInputChange}
            value={props.userInput}
          />
        </div>
        {!props.isHidden ? (
          <button
            type="submit"
            className="btn btn-primary nextPokemonButton"
            onClick={(e) => {
              e.preventDefault();
              if (isLoading) {
                return;
              }
              setIsLoading(true);
              props.getNextPokemon();
            }}
          >
            Next
          </button>
        ) : undefined}
      </form>
      {props.isHidden ? (
        <button type="button" className="btn btn-link" onClick={revealPokemon}>
          I don't know!
        </button>
      ) : undefined}
    </>
  );
}

export default Form;
