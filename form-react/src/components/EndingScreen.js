import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import EndingBg from "../svgs/pub-with-bartender.svg";
import EndingStatus from "./EndingStatus";
import styles from "./EndingScreen.module.css";

export default function EndingScreen() {
  return (
    <section className={styles.endingScreen}>
      <ReactSVG
        src={EndingBg}
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error);
            return;
          }
          // mobile viewbox
          svg.setAttribute("viewBox", "470 0 390 700");
        }}
      ></ReactSVG>
      <EndingStatus />
    </section>
  );
}
