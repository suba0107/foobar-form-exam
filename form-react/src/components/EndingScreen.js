import React from "react";
import styles from "./EndingScreen.module.css";
import EndingStatusBox from "./EndingStatusBox";
import EndingBg from "./EndingBg";

export default function EndingScreen() {
  return (
    <section className={styles.endingScreen}>
      <EndingBg />
      <EndingStatusBox />
    </section>
  );
}
