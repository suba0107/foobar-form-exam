import React, { useState } from "react";
import styles from "./PaymentIcons.module.css";

export default function PaymentIcons(props) {
  return (
    <div className={styles.iconsContainer}>
      <img src={require("../images/mobilepay_horizontal.png")} />
      <img src={require("../images/paywireless.png")} />
      <img src={require("../images/carddetails.png")} />
    </div>
  );
}
