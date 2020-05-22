import React, { useState, Component } from "react";
import styles from "./PaymentIntro.module.css";
import MobilepayLink from "./MobilepayLink";
import WirelessLink from "./WirelessLink";
import CardDetailsLink from "./CardDetailsLink";
import MobilePay from "./MobilePay";
import ButtonBack from "./ButtonBack";

export default function PaymentIntro(props) {
  console.log(props);
  return (
    <article className={styles.paymentIntro}>
      <h2>Almost there!</h2>
      <h2>Please choose a payment method</h2>
      <MobilepayLink />
      <WirelessLink />
      <CardDetailsLink />
      <ButtonBack></ButtonBack>
    </article>
  );
}
