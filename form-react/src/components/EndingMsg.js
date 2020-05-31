import React, { useState, useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import Checkmark from "../svgs/checkmark_status.svg";
import styles from "./EndingStatusBox.module.css";

export default function EndingMsg(props) {
  //useState(() => {
  //  const msg2 = setInterval(() => {
  //    document.querySelector("#status-msg").textContent =
  //      "A bartender has accepted your order.";
  //    console.log(msg2);
  //  }, 4000);
  //  return () => {
  //    clearInterval(msg2);
  //  };
  //}, []);
  //useState(() => {
  //  const msg3 = setInterval(() => {
  //    document.querySelector("#status-msg").textContent = "Pouring beer...";
  //  }, 7000);
  //  return () => {
  //    clearInterval(msg3);
  //  };
  //}, []);
  //useState(() => {
  //  const msg4 = setInterval(() => {
  //    document.querySelector("#status-msg").textContent = "Enjoy your beer!";
  //  }, 10000);
  //  return () => {
  //   console.log("clear message 4");
  //   clearInterval(msg4);
  //  };
  //}, []);
  const statusMsg = setInterval(changeStatus, 4000);
  function changeStatus() {
    document.querySelector("#status-msg").textContent =
      "A bartender has accepted your order.";
    clearInterval(statusMsg);
  }
  const statusMsg2 = setInterval(changeStatus2, 7000);
  function changeStatus2() {
    document.querySelector("#status-msg").textContent = "Pouring beer...";
    clearInterval(statusMsg2);
  }
  const statusMsg3 = setInterval(changeStatus3, 10000);
  function changeStatus3() {
    document.querySelector("#status-msg").textContent = "Enjoy your beer!";
    clearInterval(statusMsg3);
  }

  return <h3 id="status-msg">Waiting for a bartender to accept your order.</h3>;
}
