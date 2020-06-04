import React from "react";
import styles from "./ButtonPay.module.css";

export default function ButtonPay() {
  return (
    <button type="submit" className={styles.payButton}>
      Pay
    </button>
  );
}
