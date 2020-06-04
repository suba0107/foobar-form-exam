import React, { useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import Checkmark from "../svgs/checkmark_status.svg";
import styles from "./EndingStt.module.css";

export default function EndingStt() {
  const stage2 = useRef();
  const stage3 = useRef();
  const stage4 = useRef();
  // Fake the status with setInterval
  // status cirle no. 2
  useEffect(() => {
    const fakeStt = setInterval(() => {
      stage2.current.style.backgroundColor = "var(--pink-highlight)";
    }, 4000);
    return () => {
      clearInterval(fakeStt);
    };
  }, []);
  //status circle no. 3
  useEffect(() => {
    const fakeStt3 = setInterval(() => {
      stage3.current.style.backgroundColor = "var(--pink-highlight)";
    }, 7000);
    return () => {
      clearInterval(fakeStt3);
    };
  }, []);
  //status circle no. 4
  useEffect(() => {
    const fakeStt4 = setInterval(() => {
      stage4.current.style.backgroundColor = "var(--pink-highlight)";
    }, 10000);
    return () => {
      clearInterval(fakeStt4);
    };
  }, []);
  return (
    // set status circle no. 1 by default
    <div className={styles.endingSttCon}>
      <div className={styles.endingSttRoundCon}>
        <ReactSVG src={Checkmark} />
      </div>
      <div className={styles.endingSttLine}></div>
      <div ref={stage2} className={styles.endingSttRoundConInactive}>
        <ReactSVG src={Checkmark} />
      </div>
      <div className={styles.endingSttLine}></div>
      <div ref={stage3} className={styles.endingSttRoundConInactive}>
        <ReactSVG src={Checkmark} />
      </div>
      <div className={styles.endingSttLine}></div>
      <div ref={stage4} className={styles.endingSttRoundConInactive}>
        <ReactSVG src={Checkmark} />
      </div>
    </div>
  );
}
