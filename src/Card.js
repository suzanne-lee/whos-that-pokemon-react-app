import React, { Component } from "react";
import "./Card.css";

function Card(props) {
  return <div className="Card">{props.pokeName}</div>;
}

export default Card;
