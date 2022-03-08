import React from "react";
import "./Header.css";
import logo from "./images/Whos-that-Pokemon.png";

function Header() {
  return (
    <header className="App-header">
      <img className="titleImg" src={logo} alt="Who's That Pokemon?" />
      <div id="instructionContainer">
        <h1>HOW TO PLAY</h1>
        <p id="instructionText">
          Enter your guess below. When you guess the Pokémon correctly, the{" "}
          <em>Next</em> button will appear. If you don't know the answer, click
          the <em>I don't know!</em> button, followed by the <em>Next</em>{" "}
          button.
        </p>
      </div>
    </header>
  );
}

export default Header;
