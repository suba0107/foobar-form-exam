import React, { useState, useEffect } from "react";
import styles from "./Select_beer.modules.css";
import { useHistory } from "react-router-dom";
import Amount from "./Amount.js";
import { ReactSVG } from "react-svg";
import { ReactKeg } from "./svg/keg.svg";
import Keg from "./Keg.js";

export default function EachBeer(props, onInfoClick) {
  const [toggleInfo, setToggleInfo] = useState(false);

  // function onInfo(name, toggle) {
  //   props.onInfoClick(name, toggle);
  // }

  // useEffect(() => {
  //   onInfo(props.name, toggleInfo);
  // }, [props.name, toggleInfo]);

  // function toggleMenu() {
  //   console.log("Toggle");
  //   document.querySelector("#menu").classList.toggle("hidden");
  //   let menuHidden = document.querySelector("#menu").classList.contains("hidden");
  //   if (menuHidden === true) {
  //     hideOverlay();
  //     menuicon.classList.remove("change");
  //     document.querySelector(".menu").textContent = "MENU";
  //   } else {
  //     addOverlay();
  //     menuicon.classList.add("change");
  //     document.querySelector(".menu").textContent = "CLOSE";
  //   }
  // }

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <div className="keg">
        <button
          onClick={(e) => {
            props.onInfoClick(props.name);
          }}
          className={`information`}
          name={props.name}
        >
          i
        </button>
        <Keg {...props} />
      </div>
      {/* <ReactKeg image="./images/fairytaleale.png" /> */}
      <h2>{props.name}</h2>
      <p className="price">25 kr</p>
      <Amount />
      <button className="add">Add</button>
    </article>
  );
}
