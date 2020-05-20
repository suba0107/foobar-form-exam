import React, { useState } from "react";
import PaymentIntro from "./PaymentIntro";
import PaymentMethods from "./PaymentMethods";
import styles from "./PaymentScreen.module.css";

export default function PaymentScreen(props) {
  return (
    <section className={styles.paymentScreen}>
      <PaymentIntro />
      <PaymentMethods />
    </section>
  );
}
