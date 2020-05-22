import React, { useState, Component } from "react";
import { render } from "react-dom";
import styles from "./OnePayment.module.css";

export default function ChooseMobilePay() {
  return (
    <article className={styles.methodsContainer}>
      <img src={require("../images/mobilepay_code.png")} />
    </article>
  );
}
