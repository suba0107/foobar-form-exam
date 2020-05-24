import React, { useState } from "react";
import MobilepayIcon from "../images/mobilepay_horizontal.png";
import styles from "./PaymentLinks.module.css";

export default function MobilepayLink(props) {
  return (
    <a href="#" onClick={props.onClick} className={styles.mobilePayLink}>
      <img src={MobilepayIcon} />
      {props.children}
    </a>
  );
}
