import React from "react";
import styles from "./Select_beer.modules.css";
import { useHistory } from "react-router-dom";
import Amount from "./Amount.js";
import { ReactSVG } from "react-svg";
import { ReactKeg } from "./svg/keg.svg";
import Keg from "./Keg.js";

export default function EachBeer(props) {
  console.log(props);
  // start();
  // function start() {
  //   loadSvg();
  // }
  // async function loadSvg() {
  //   console.log("load");
  //   const response = await fetch("./svg/keg.svg");
  //   const mySVG = await response.text();

  //   document.querySelector(".kegs").innerHTML = mySVG;
  // }

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        alignItems: "center",
      }}
    >
      <div className="keg">
        <Keg {...props} />
      </div>
      {/* <ReactKeg image="./images/fairytaleale.png" /> */}
      <h2>{props.beer}</h2>
      <p>25 kr</p>
      <Amount />
      <button>Add</button>
    </article>
  );
}
