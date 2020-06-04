import React from "react";
import { ReactSVG } from "react-svg";
import styles from "./PaymentButtons.module.css";
import WirelessIcon from "../svgs/wireless_icon2.svg";

export default function WirelessLink(props) {
  return (
    <button className={styles.chooseWireless} onClick={props.onClick}>
      <ReactSVG src={WirelessIcon} />
      {props.children}
    </button>
  );
}
