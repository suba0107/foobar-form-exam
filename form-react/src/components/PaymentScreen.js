import React, { useState, useEffect } from "react";
import PaymentIntro from "./PaymentIntro";
import MobilepayLink from "./MobilepayLink";
import WirelessLink from "./WirelessLink";
import CardDetailsLink from "./CardDetailsLink";
import ButtonBack from "./ButtonBack";
import styles from "./PaymentScreen.module.css";
import modalStyle from "./OnePayment.module.css";
import PayForm from "./PayForm";

export default function PaymentScreen(props) {
  let [payment, setPayment] = useState(undefined);
  const [show, setState] = useState(false);
  const toggle = () => setState(!show);
  const reset = () => setPayment();

  const Modal = ({ children, show, setState, setPayment }) => {
    const content = show && (
      <article
        className={modalStyle.methodsContainer}
        onClick={() => {
          setPayment();
          toggle();
        }}
      >
        {children}
        <ButtonBack
          onClick={() => {
            setState(false);
            setPayment(undefined);
          }}
        >
          X
        </ButtonBack>
      </article>
    );
    return content;
  };

  return (
    <section className={styles.paymentScreen}>
      <PaymentIntro
        onClick={() => {
          setPayment("mobilepay");
          toggle();
        }}
      >
        <MobilepayLink
          onClick={() => {
            toggle();
            setPayment("mobilepay");
          }}
        />
        <WirelessLink
          onClick={() => {
            toggle();
            setPayment("wireless");
          }}
        />
        <CardDetailsLink
          onClick={() => {
            toggle();
            setPayment("carddetails");
          }}
        />
        <ButtonBack></ButtonBack>
      </PaymentIntro>
      <Modal show={show} setState={setState} setPayment={setPayment}>
        {payment === "mobilepay" && (
          <img src={require("../images/mobilepay_code.png")} />
        )}
        {payment === "wireless" && (
          <img src={require("../images/wireless_icon.png")} />
        )}
        {payment === "carddetails" && <PayForm />}
      </Modal>
    </section>
  );
}
