import React from "react";
import styles from "./ButtonEnding.module.css";

export default function ButtonEnding(props) {
  return (
    <button onClick={props.onClick} className={styles.buttonEnding}>
      Back home
      {props.children}
    </button>
  );
}
