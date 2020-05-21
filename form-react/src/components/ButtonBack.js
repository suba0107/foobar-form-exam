import React, { useState } from "react";
import { render } from "react-dom";
import { ReactSVG } from "react-svg";
import Button from "muicss/lib/react/button";
import styles from "./ButtonBack.module.css";
import BackLogo from "../svgs/back_logo.svg";

export default function ButtonBack(props) {
  return (
    <Button className={styles.roundBackBtn} size="small" variant="fab">
      <ReactSVG
        src={BackLogo}
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error);
            return;
          }
          // console.log(svg);
        }}
        beforeInjection={(svg) => {
          svg.setAttribute("style", "width: 6.5vw");
          svg.style.position = "relative";
          svg.style.left = "-2vw";
        }}
      />
    </Button>
  );
}
