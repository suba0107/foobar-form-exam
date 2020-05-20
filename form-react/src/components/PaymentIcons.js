import React, { useState } from "react";
import styles from "./PaymentIcons.module.css";

export default function PaymentIcons(props) {
  return (
    <div className={styles.iconsContainer}>
      <a href="#">
        <img src={require("../images/mobilepay_horizontal.png")} />
      </a>
      <a href="#">
        <img src={require("../images/paywireless.png")} />
      </a>
      <a href="#">
        <img src={require("../images/carddetails.png")} />
      </a>
    </div>
  );
}
