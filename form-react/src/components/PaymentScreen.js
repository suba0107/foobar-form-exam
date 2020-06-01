import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import Logo from "../images/final-logo.png";
import MobilePayIcon from "../svgs/mobilepay_code.svg";
import OnePaymentStyle from "./OnePayment.module.css";
import WirelessIcon from "../svgs/wireless_icon.svg";
import LanguageLink from "./LanguageLink";
import MobilepayLink from "./MobilepayLink";
import WirelessLink from "./WirelessLink";
import CardDetailsLink from "./CardDetailsLink";
import ButtonBack from "./ButtonBack";
import styles from "./PaymentScreen.module.css";
import { useMediaPredicate } from "react-media-hook";
import onePayment from "./OnePayment.module.css";
import PayForm from "./PayForm";

export default function PaymentScreen(props) {
  let [payment, setPayment] = useState(undefined);
  const [show, setState] = useState(false);
  const ipad1024px = useMediaPredicate("(max-width: 1024px)");

  const Modal = ({ children, show, setState, setPayment }) => {
    const content = show && (
      <article className={onePayment.methodsContainer}>
        {children}
        <div
          className={styles.hideBackBtn}
          onClick={() => {
            setState(false);
            setPayment(undefined);
          }}
        >
          <ButtonBack />{" "}
        </div>
      </article>
    );
    return content;
  };
  // const mobileFirst = useMediaPredicate("(max-width: 500px)");
  // const ipad768px = useMediaPredicate("(min-width: 768px)");
  return (
    <section className={styles.paymentScreen}>
      <img src={Logo} className={styles.fooBarLogo} />
      <LanguageLink />
      <article className={styles.paymentIntro}>
        <h2>Almost there!</h2>
        <h2>Please choose a payment method</h2>
        <div className={styles.paymentWrapper}>
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
        </div>
        <ButtonBack className={styles.btnPosition} />
      </article>
      <Modal show={show} setState={setState} setPayment={setPayment}>
        {payment === "mobilepay" && (
          <ReactSVG
            src={MobilePayIcon}
            className={OnePaymentStyle.showMobilePay}
          />
        )}
        {payment === "wireless" && (
          <div>
            <ReactSVG
              src={WirelessIcon}
              className={OnePaymentStyle.showWireless}
            />
            <h3>Tap your card</h3>
          </div>
        )}
        {payment === "carddetails" && (
          <PayForm setState={setState} setPayment={setPayment} />
        )}
      </Modal>
    </section>
  );
}
