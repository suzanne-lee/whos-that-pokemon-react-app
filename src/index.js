import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const pokeList = [];

for (let i = 1; i <= 3; i++) {
  pokeList.push(i);
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffle(pokeList);

ReactDOM.render(
  <React.StrictMode>
    <App pokeList={pokeList} />
  </React.StrictMode>,
  document.getElementById("root")
);
