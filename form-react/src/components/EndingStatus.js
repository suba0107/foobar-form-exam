import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import ButtonEnding from "./ButtonEnding";
import styles from "./EndingStatus.module.css";

export default function EndingStatus(props) {
  return (
    <article className={styles.endingStatus}>
      <div id="top">
        {" "}
        <h2>We will be handling your order very soon!</h2>
        <h2>You can keep track with your order on this screen.</h2>
      </div>
      <div id="bottom">
        <h3>Status:</h3>
        <ReactSVG></ReactSVG>
        <h3>Waiting for a bartender to handle order.</h3>
      </div>
      <ButtonEnding />
      {props.children}
    </article>
  );
}
