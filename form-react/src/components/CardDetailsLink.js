import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import CardDetailsIcon from "../svgs/creditcards_icon.svg";
import styles from "./PaymentLinks.module.css";

export default function CardDetailsLink(props) {
  return (
    <a href="#" className={styles.cardDetailsLink} onClick={props.onClick}>
      <ReactSVG src={CardDetailsIcon} />
      {props.children}
    </a>
  );
}
