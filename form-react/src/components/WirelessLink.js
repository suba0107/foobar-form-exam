import React, { useState } from "react";
import WirelessIcon from "../images/wireless_icon.png";
import styles from "./PaymentLinks.module.css";

export default function WirelessLink(props) {
  return (
    <a href="#" className={styles.wirelessLink} onClick={props.onClick}>
      <img src={WirelessIcon} />
      {props.children}
    </a>
  );
}
