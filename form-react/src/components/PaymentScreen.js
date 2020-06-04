import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import styles from "./PaymentScreen.module.css";
import OnePaymentStyle from "./OnePayment.module.css";
import MobilepayBtn from "./MobilepayBtn";
import WirelessBtn from "./WirelessBtn";
import ButtonBack from "./ButtonBack";
import PayForm from "./PayForm";
import ButtonPay from "./ButtonPay";
import CardDetailsBtn from "./CardDetailsBtn";
import MobilePayIcon from "../svgs/mobilepay_code.svg";
import WirelessIcon from "../svgs/wireless_icon.svg";

export default function PaymentScreen(props) {
  // set chosen payment is unknown at the start
  let [payment, setPayment] = useState(undefined);

  // modal is not shown when user start the payment process
  const [show, setState] = useState(false);

  //Modal for the chosen payment
  const Modal = ({ children, show, setState }) => {
    const content = show && (
      <article id="popUp" className={OnePaymentStyle.methodsContainer}>
        {children}
        <div
          className={styles.hideBackBtn}
          onClick={() => {
            setState(false);
          }}
        >
          <ButtonBack />
        </div>
      </article>
    );
    return content;
  };
  return (
    <main className={styles.paymentScreen}>
      <article className={styles.paymentIntro}>
        <h2>Almost there!</h2>
        <h2>Please choose a payment method</h2>
        <div className={styles.paymentWrapper}>
          <MobilepayBtn
            onClick={() => {
              setState(true);
              setPayment("mobilepay");
            }}
          />
          <WirelessBtn
            onClick={() => {
              setState(true);
              setPayment("wireless");
            }}
          />
          <CardDetailsBtn
            onClick={() => {
              setState(true);
              setPayment("carddetails");
            }}
          />
        </div>
        <Link
          to="/checkorder"
          className={styles.btnPosition}
          className={styles.roundBckBtn}
        >
          <ButtonBack />
        </Link>
      </article>
      <Modal id="popUp" show={show} setState={setState}>
        {/* change payment image according to the chosen payment method */}
        {/* if MobilePay is chosen */}
        {payment === "mobilepay" && (
          <div>
            <ReactSVG
              src={MobilePayIcon}
              beforeInjection={(svg) => {
                svg.classList.add("mobilepayCode");
              }}
              className={OnePaymentStyle.showMobilePay}
            />
            <Link to="/end" className={OnePaymentStyle.pretendPayment}>
              <ButtonPay />
            </Link>
          </div>
        )}
        {/* if Wireless is chosen */}
        {payment === "wireless" && (
          <div>
            <ReactSVG
              src={WirelessIcon}
              className={OnePaymentStyle.showWireless}
            />
            <Link className={OnePaymentStyle.pretendPayment} to="/end">
              <ButtonPay />
            </Link>
          </div>
        )}
        {/* if Credit card payment is chosen */}
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
