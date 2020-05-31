import React, { useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import Checkmark from "../svgs/checkmark_status.svg";
import styles from "./EndingStt.module.css";

export default function StatusChecked(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className={styles.endingSttCon}>
      <div
        id="stage"
        className={styles.endingSttRoundCon}
        onChange={props.handleChange}
      >
        <ReactSVG src={Checkmark} />
      </div>
    </div>
  );
}
