import React from "react";
import EndingStatusBox from "./EndingStatusBox";
import EndingBg from "./EndingBg";
import styles from "./EndingScreen.module.css";

export default function EndingScreen() {
  return (
    <section className={styles.endingScreen}>
      <EndingBg />
      <EndingStatusBox />
    </section>
  );
}
