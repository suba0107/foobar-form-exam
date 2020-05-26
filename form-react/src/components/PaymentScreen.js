import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import MobilePayIcon from "../svgs/mobilepay_code.svg";
import OnePaymentStyle from "./OnePayment.module.css";
import WirelessIcon from "../svgs/wireless_icon.svg";
import Logo from "../images/final-logo.png";
import LanguageLink from "./LanguageLink";
import PaymentIntro from "./PaymentIntro";
import MobilepayLink from "./MobilepayLink";
import WirelessLink from "./WirelessLink";
import CardDetailsLink from "./CardDetailsLink";
import ButtonBack from "./ButtonBack";
import styles from "./PaymentScreen.module.css";
import onePayment from "./OnePayment.module.css";
import PayForm from "./PayForm";

export default function PaymentScreen(props) {
  let [payment, setPayment] = useState(undefined);
  const [show, setState] = useState(false);
  // const toggle = () => setState(!show);

  const Modal = ({ children, show, setState, setPayment }) => {
    const content = show && (
      <article
        className={onePayment.methodsContainer}
        onClick={() => {
          setPayment(undefined);
          setState(false);
        }}
      >
        {children}
        <ButtonBack
          onClick={() => {
            setState(false);
            setPayment(undefined);
          }}
        ></ButtonBack>
      </article>
    );
    return content;
  };

  return (
    <section className={styles.paymentScreen}>
      {/* <img src={Logo} /> */}
      <LanguageLink />
      <PaymentIntro
        onClick={() => {
          setPayment("mobilepay");
          setState();
        }}
      >
        <MobilepayLink
          onClick={() => {
            setState(true);
            setPayment("mobilepay");
          }}
        />
        <WirelessLink
          onClick={() => {
            setState(true);
            setPayment("wireless");
          }}
        />
        <CardDetailsLink
          onClick={() => {
            setState(true);
            setPayment("carddetails");
          }}
        />
        <ButtonBack></ButtonBack>
      </PaymentIntro>
      <Modal show={show} setState={setState} setPayment={setPayment}>
        {payment === "mobilepay" && (
          <ReactSVG
            src={MobilePayIcon}
            className={OnePaymentStyle.showMobilePay}
          />
        )}
        {payment === "wireless" && (
          <ReactSVG
            src={WirelessIcon}
            className={OnePaymentStyle.showWireless}
          />
        )}
        {payment === "carddetails" && <PayForm />}
      </Modal>
    </section>
  );
}
