import React from "react";
import "./Header.css";
import logo from "./images/Whos-that-Pokemon.png";

function Header() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Header;
