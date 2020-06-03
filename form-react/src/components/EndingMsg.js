import React, { useRef, useEffect } from "react";
import { ReactSVG } from "react-svg";
import Checkmark from "../svgs/checkmark_status.svg";
import styles from "./EndingStatusBox.module.css";

export default function EndingMsg(props) {
  const statusMsg = useRef("");
  useEffect(() => {
    const msg2 = setInterval(() => {
      statusMsg.current.textContent = "A bartender has accepted your order.";
      console.log(msg2);
    }, 4000);
    return () => {
      clearInterval(msg2);
    };
  }, []);
  useEffect(() => {
    const msg3 = setInterval(() => {
      statusMsg.current.textContent = "Pouring beer...";
    }, 7000);
    return () => {
      clearInterval(msg3);
    };
  }, []);
  useEffect(() => {
    const msg4 = setInterval(() => {
      statusMsg.current.textContent = "Enjoy your beer!";
    }, 10000);
    return () => {
      clearInterval(msg4);
    };
  }, []);
  // const statusMsg = setInterval(changeStatus, 4000);
  // function changeStatus() {
  //   document.querySelector("#status-msg").textContent =
  //     "A bartender has accepted your order.";
  //   return clearInterval(statusMsg);
  // }
  // const statusMsg2 = setInterval(changeStatus2, 7000);
  // function changeStatus2() {
  //   document.querySelector("#status-msg").textContent = "Pouring beer...";
  //   return clearInterval(statusMsg2);
  // }
  // const statusMsg3 = setInterval(changeStatus3, 10000);
  // function changeStatus3() {
  //   document.querySelector("#status-msg").textContent = "Enjoy your beer!";
  //   return clearInterval(statusMsg3);
  // }

  return (
    <h3 id="status-msg" ref={statusMsg}>
      Waiting for a bartender to accept your order.
    </h3>
  );
}
