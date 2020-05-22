import React, { useState } from "react";
import styles from "./OnePayment.module.css";

export default function ChooseWireless() {
  // class constructor {
  //   constructor() {
  //     super();
  //     this.state = {
  //       name: "Payment",
  //     };
  //   }
  // }
  return (
    <article className={styles.methodsContainer}>
      <img src={require("../images/wireless_icon.png")} />
    </article>
  );
}
