import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import Checkmark from "../svgs/checkmark_status.svg";
import styles from "./EndingStt.module.css";

export default function EndingStt(props) {
  return (
    <div className={styles.endingSttCon}>
      <div className={styles.endingSttRoundCon}>
        <ReactSVG src={Checkmark} />
      </div>
      <div className={styles.endingSttLine}></div>
      <div className={styles.endingSttRoundCon}>
        {/* <ReactSVG src={Checkmark} /> */}
      </div>
      <div className={styles.endingSttLine}></div>
      <div className={styles.endingSttRoundCon}>
        {/* <ReactSVG src={Checkmark} /> */}
      </div>
      <div className={styles.endingSttLine}></div>
      <div className={styles.endingSttRoundCon}>
        {/* <ReactSVG src={Checkmark} /> */}
      </div>
    </div>
  );
}
