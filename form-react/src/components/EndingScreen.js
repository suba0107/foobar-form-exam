import React, { useState, useEffect } from "react";
import EndingStatus from "./EndingStatus";
import EndingBg from "./EndingBg";
import styles from "./EndingScreen.module.css";

export default function EndingScreen() {
  return (
    <section className={styles.endingScreen}>
      <EndingBg />
      <EndingStatus />
    </section>
  );
}
