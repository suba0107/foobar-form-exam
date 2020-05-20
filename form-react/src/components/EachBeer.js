import React from "react";
import styles from "./Select_beer.modules.css";
import { useHistory } from "react-router-dom";
import Amount from "./Amount.js";

export default function EachBeer() {
  //   window.addEventListener("DOMContentLoaded", start);

  //   function start() {
  //     loadSvg();
  //   }
  //   async function loadSvg() {
  //     const response = await fetch("./svg/landingpage.svg");
  //     const mySVG = await response.text();
  //     document.querySelector(".svg").innerHTML = mySVG;
  //   }

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        alignItems: "center",
      }}
    >
      <h2></h2>
      <p></p>
      <Amount />
      <button>Add</button>
    </article>
  );
}
