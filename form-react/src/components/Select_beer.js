import React from "react";
import styles from "./Select_beer.modules.css";
import { useHistory } from "react-router-dom";
import EachBeer from "./EachBeer.js";

export default function Select_beer() {
  let history = useHistory();

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
    <main>
      <h1>Does it work?</h1>
      <EachBeer />
    </main>
  );
}
