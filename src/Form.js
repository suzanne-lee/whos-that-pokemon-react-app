import React from "react";
import { useEffect } from "react";

function Form(props) {
  function handleInputChange(event) {
    event.preventDefault();
    props.setUserInput(event.target.value);
    // console.log(event.target.value);
  }

  function test() {}

  useEffect(() => {
    if (
      props.userInput.toLowerCase() === props.pokemon.name &&
      props.isHidden
    ) {
      console.log("userinput: " + props.userInput);
      console.log("pokename: " + props.pokemon.name);
      // revealPokemon();
      props.setIsHidden(false);
      props.setCaughtCount(props.caughtCount + 1);
    }
  }, [props.userInput]);

  function revealPokemon() {
    props.setIsHidden(false);
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
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
            onClick={props.getNextPokemon}
          >
            Next
          </button>
        ) : undefined}
      </form>
      <button type="button" className="btn btn-link" onClick={revealPokemon}>
        I don't know!
      </button>
    </>
  );
}

export default Form;
