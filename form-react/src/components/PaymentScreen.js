import React, { useState, Component } from "react";
import { render } from "react-dom";
import PaymentIntro from "./PaymentIntro";
import ButtonBack from "./ButtonBack";
import ChooseMobilePay from "./MobilePay";
import ChooseCardDetails from "./CardDetails";
import ChooseWireless from "./Wireless";
import styles from "./PaymentScreen.module.css";

export default function PaymentScreen(
  props,
  onClickCarddetails,
  onClickMobilepay,
  onClickWireless
) {
  return (
    <section className={styles.paymentScreen}>
      <PaymentIntro></PaymentIntro>
      <ChooseMobilePay />
      <ChooseWireless />
      <ChooseCardDetails />
    </section>
  );
}
