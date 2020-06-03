import React, { useState, useEffect, useRef } from "react";
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
import onePayment from "./OnePayment.module.css";
import PayForm from "./PayForm";
import { useHistory } from "react-router-dom";

export default function PaymentScreen(props) {
  let history = useHistory();
  let [payment, setPayment] = useState(undefined);
  const [show, setState] = useState(false);
  console.log(props);

  const Modal = ({ children, show, setState, setPayment }) => {
    const content = show && (
      <article id="popUp" className={onePayment.methodsContainer}>
        {children}
        <div
          className={styles.hideBackBtn}
          onClick={() => {
            setState(false);
            // setPayment(undefined);
          }}
        >
          <ButtonBack />
        </div>
      </article>
    );
    return content;
  };
  function donePayment() {
    setInterval(() => {
      history.push("/end");
    }, 4000);
    return clearInterval(donePayment);
  }
  return (
    <main className={styles.paymentScreen}>
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
        <div
          onClick={() => {
            history.push("/checkorder");
          }}
        >
          <ButtonBack className={styles.btnPosition} />
        </div>
      </article>
      <Modal id="popUp" show={show} setState={setState}>
        {payment === "mobilepay" && (
          <div>
            <ReactSVG
              src={MobilePayIcon}
              className={OnePaymentStyle.showMobilePay}
            />
          </div>
        )}
        {payment === "mobilepay" ? donePayment() : null}
        {payment === "wireless" && (
          <div>
            <ReactSVG
              src={WirelessIcon}
              className={OnePaymentStyle.showWireless}
            />
            <h3>Tap your card</h3>
          </div>
        )}
        {payment === "wireless" ? donePayment() : null}
        {payment === "carddetails" && (
          <PayForm
            sendBackOrders={props.sendBackOrders}
            orders={props.orders}
          />
        )}
      </Modal>
    </main>
  );
}
