import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import MobilePayIcon from "../svgs/mobilepay_code.svg";
import OnePaymentStyle from "./OnePayment.module.css";
import WirelessIcon from "../svgs/wireless_icon.svg";
import MobilepayBtn from "./MobilepayBtn";
import WirelessBtn from "./WirelessBtn";
import CardDetailsBtn from "./CardDetailsBtn";
import ButtonBack from "./ButtonBack";
import styles from "./PaymentScreen.module.css";
import PayForm from "./PayForm";
import { useHistory } from "react-router-dom";
import ButtonPay from "./ButtonPay";

export default function PaymentScreen(props) {
  let history = useHistory();
  let [payment, setPayment] = useState(undefined);
  const [show, setState] = useState(false);
  console.log(props);

  const Modal = ({ children, show, setState, setPayment }) => {
    const content = show && (
      <article id="popUp" className={OnePaymentStyle.methodsContainer}>
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
        <div
          onClick={() => {
            history.push("/checkorder");
          }}
          className={styles.btnPosition}
          // className={styles.bckBtn}
          className={styles.roundBckBtn}
        >
          <ButtonBack />
        </div>
      </article>
      <Modal id="popUp" show={show} setState={setState}>
        {payment === "mobilepay" && (
          <div>
            <ReactSVG
              src={MobilePayIcon}
              beforeInjection={(svg) => {
                svg.classList.add("mobilepayCode");
              }}
              className={OnePaymentStyle.showMobilePay}
            />
            <div
              onClick={() => history.push("/end")}
              className={OnePaymentStyle.pretendPayment}
            >
              <ButtonPay />
            </div>
          </div>
        )}
        {payment === "wireless" && (
          <div>
            <ReactSVG
              src={WirelessIcon}
              className={OnePaymentStyle.showWireless}
            />
            <div
              onClick={() => history.push("/end")}
              className={OnePaymentStyle.pretendPayment}
            >
              <ButtonPay />
            </div>
          </div>
        )}
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
