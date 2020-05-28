import React, { useState, useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import Checkmark from "../svgs/checkmark_status.svg";
// import StatusChecked from "./StatusChecked";
import styles from "./EndingStt.module.css";

export default function EndingStt(props) {
  //   const [activeStt, setActiveStt] = useState(false);
  //   const [activeID, setID] = useState(id);
  //   const activeSttRef = useRef(null);
  //   useEffect(() => {
  //     if (activeSttRef.current) {
  //       activeSttRef.current.style({
  //         backgroundColor: "var(--pink-highlight)",
  //       });
  //     }
  //   }, [activeStt]);
  //   function activeCircle() {
  //     return (
  //       <div>
  //         {(children) => {
  //           const active = activeStt;
  //           return (
  //             <div
  //               className={`c ${active ? "active" : ""}`}
  //               ref={active ? activeSttRef : null}
  //             >
  //               {children}
  //             </div>
  //           );
  //         }}
  //       </div>
  //     );
  //   }
  //   useEffect(() => {
  //     const fakeStt = setInterval(() => {
  //       activeCircle();
  //     }, 3000);
  //     return () => {
  //       clearInterval(fakeStt);
  //     };
  //   }, []);
  useEffect(() => {
    const fakeStt = setInterval(() => {
      // document.querySelector(setActiveStt)
      document.querySelector("#stage2").style.backgroundColor =
        "var(--pink-highlight)";
    }, 4000);
    return () => {
      clearInterval(fakeStt);
    };
  }, []);
  useEffect(() => {
    const fakeStt3 = setInterval(() => {
      document.querySelector("#stage3").style.backgroundColor =
        "var(--pink-highlight)";
      return <ReactSVG src={Checkmark} />;
    }, 7000);
    return () => {
      clearInterval(fakeStt3);
    };
  }, []);
  useEffect(() => {
    const fakeStt4 = setInterval(() => {
      document.querySelector("#stage4").style.backgroundColor =
        "var(--pink-highlight)";
    }, 10000);
    return () => {
      clearInterval(fakeStt4);
    };
  }, []);
  return (
    <div className={styles.endingSttCon}>
      <div className={styles.endingSttRoundCon}>
        <ReactSVG src={Checkmark} />
      </div>
      <div className={styles.endingSttLine}></div>
      <div id="stage2" className={styles.endingSttRoundConInactive}>
        {" "}
        <ReactSVG src={Checkmark} />
      </div>
      <div className={styles.endingSttLine}></div>
      <div id="stage3" className={styles.endingSttRoundConInactive}>
        {" "}
        <ReactSVG src={Checkmark} />
      </div>
      <div className={styles.endingSttLine}></div>
      <div id="stage4" className={styles.endingSttRoundConInactive}>
        {" "}
        <ReactSVG src={Checkmark} />
      </div>
    </div>
  );
}
