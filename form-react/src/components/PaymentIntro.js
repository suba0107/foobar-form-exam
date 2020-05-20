import React, { useState } from "react";
import PaymentIcons from "./PaymentIcons";
import ButtonBack from "./ButtonBack";
import styles from "./PaymentIntro.module.css";

export default function PaymentIntro(props) {
  return (
    <article className={styles.paymentIntro}>
      <h2>Almost there!</h2>
      <h2>Please choose a payment method</h2>
      <PaymentIcons></PaymentIcons>
      <ButtonBack />
    </article>
  );
}
