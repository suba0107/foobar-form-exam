import React from "react";
import MobilePayIcon from "../svgs/mobilepay_icon.svg";
import { ReactSVG } from "react-svg";
import styles from "./PaymentButtons.module.css";

export default function MobilepayLink(props) {
  return (
    <button onClick={props.onClick} className={styles.chooseMobilePay}>
      <ReactSVG src={MobilePayIcon} />
      {props.children}
    </button>
  );
}
