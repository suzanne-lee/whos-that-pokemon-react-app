import React from "react";
import { pokeTypeMap } from "./PokemonType";

function Badge(props) {
  function capitalize(string) {
    if (string !== undefined) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
      return string;
    }
  }

  let pokeType = props.pokeType;

  if (pokeType == null) {
    pokeType = "default";
  }

  return (
    <span
      className="badge"
      style={{
        backgroundColor: pokeTypeMap.get(pokeType).badgeBackground,
        marginLeft: "5px",
        color: "#fff",
      }}
    >
      {props.pokeType == null ? "" : capitalize(props.pokeType)}
    </span>
  );
}

export default Badge;
