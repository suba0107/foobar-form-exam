import React, { useState } from "react";
import PayForm from "./PayForm";
import styles from "./OnePayment.module.css";

export default function ChooseCardDetails() {
  return (
    <article className={styles.methodsContainer}>
      <PayForm></PayForm>
    </article>
  );
}
