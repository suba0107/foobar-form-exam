import React from "react";
import { Button } from "muicss/react";
import styles from "./Landingpage.modules.css";
import { useHistory } from "react-router-dom";

export default function Landing_page() {
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
      <article className="wrapper-vertical">
        <h1>Welcome to Foobar!</h1>

        <button
          className="orderButton"
          onClick={() => {
            history.push("/select");
          }}
          variant="contained"
          color="primary"
        >
          Order now
        </button>
      </article>
    </main>
  );
}
