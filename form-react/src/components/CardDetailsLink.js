import React, { useState } from "react";
import CardDetailsIcon from "../images/carddetails.png";
import styles from "./PaymentLinks.module.css";

export default function CardDetailsLink(props) {
  return (
    <a href="#" className={styles.cardDetailsLink} onClick={props.onClick}>
      <img src={CardDetailsIcon} />
      {props.children}
    </a>
  );
}
