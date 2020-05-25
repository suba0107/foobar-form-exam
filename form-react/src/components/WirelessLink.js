import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import WirelessIcon from "../svgs/wireless_icon2.svg";
import styles from "./PaymentLinks.module.css";

export default function WirelessLink(props) {
  return (
    <a href="#" className={styles.wirelessLink} onClick={props.onClick}>
      <ReactSVG src={WirelessIcon} />
      {props.children}
    </a>
  );
}
