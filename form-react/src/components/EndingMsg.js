import React, { useState, useEffect, useRef } from "react";
import { ReactSVG } from "react-svg";
import Checkmark from "../svgs/checkmark_status.svg";
import styles from "./EndingStatusBox.module.css";

export default function EndingMsg(props) {
  useEffect(() => {
    const msg2 = setInterval(() => {
      document.querySelector("#status-msg").textContent =
        "A bartender has accepted your order.";
    }, 4000);
    return () => {
      clearInterval(msg2);
    };
  }, []);
  useEffect(() => {
    const msg3 = setInterval(() => {
      document.querySelector("#status-msg").textContent = "Pouring beer...";
    }, 7000);
    return () => {
      console.log("clear message 3");
      clearInterval(msg3);
    };
  }, []);
  useEffect(() => {
    const msg4 = setInterval(() => {
      document.querySelector("#status-msg").textContent = "Enjoy your beer!";
    }, 10000);
    return () => {
      console.log("clear message 4");
      clearInterval(msg4);
    };
  }, []);
  return <h3 id="status-msg">Waiting for a bartender to accept your order.</h3>;
}
