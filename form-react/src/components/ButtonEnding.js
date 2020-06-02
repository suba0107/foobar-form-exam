import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import styles from "./ButtonEnding.module.css";
import { useHistory } from "react-router-dom";

export default function ButtonEnding(props) {
  let history = useHistory();
  return (
    <button
      onClick={props.onClick}
      className={styles.buttonEnding}
    >
      Back home
      {props.children}
    </button>
  );
}
