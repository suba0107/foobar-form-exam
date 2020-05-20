import React from "react";

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

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        width: "50%",
      }}
    >
      <button>-</button>
      <p></p>
      <button>+</button>
    </div>
  );
}
