import React, { useState } from "react";
import MobilePayIcon from "../svgs/mobilepay_icon.svg";
import { ReactSVG } from "react-svg";
import styles from "./PaymentLinks.module.css";

export default function MobilepayLink(props) {
  return (
    <a href="#" onClick={props.onClick} className={styles.mobilePayLink}>
      <ReactSVG src={MobilePayIcon} />
      {props.children}
    </a>
  );
}
