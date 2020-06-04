import React from "react";
import { ReactSVG } from "react-svg";
import styles from "./PaymentButtons.module.css";
import CardDetailsIcon from "../svgs/creditcards_icon3.svg";

export default function CardDetailsLink(props) {
  return (
    <button className={styles.chooseCC} onClick={props.onClick}>
      <ReactSVG src={CardDetailsIcon} />
      {props.children}
    </button>
  );
}
