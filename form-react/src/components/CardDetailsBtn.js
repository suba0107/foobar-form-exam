import React from "react";
import { ReactSVG } from "react-svg";
import CardDetailsIcon from "../svgs/creditcards_icon3.svg";
import styles from "./PaymentButtons.module.css";

export default function CardDetailsLink(props) {
  return (
    <button className={styles.chooseCC} onClick={props.onClick}>
      <ReactSVG src={CardDetailsIcon} />
      {props.children}
    </button>
  );
}
