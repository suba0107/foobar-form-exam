import React, { useState } from "react";
import MobilepayIcon from "../images/mobilepay_horizontal.png";

export default function MobilepayLink(props) {
  return (
    <a href="#" onClick={props.onClick}>
      <img src={MobilepayIcon} />
      {props.children}
    </a>
  );
}
