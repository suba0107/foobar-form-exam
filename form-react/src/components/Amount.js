import React, { useState } from "react";
import styles from "./Select_beer.modules.css";
export default function Amount() {
  //   window.addEventListener("DOMContentLoaded", start);

  //   function start() {
  //     loadSvg();
  //   }
  //   async function loadSvg() {
  //     const response = await fetch("./svg/landingpage.svg");
  //     const mySVG = await response.text();
  //     document.querySelector(".svg").innerHTML = mySVG;
  //   }

  const [count, setCount] = useState(0);
  function plus(e) {
    setCount(count + 1);
  }

  function minus(e) {
    setCount(count - 1);
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        width: "50%",
      }}
    >
      <button onClick={minus} className="plusMinus" disabled={count === 0}>
        -
      </button>

      {/* <button onClick={minus} className="plusMinus">
        -
      </button> */}
      <p className="amount">{count}</p>
      <button onClick={plus} className="plusMinus">
        +
      </button>
    </div>
  );
}
