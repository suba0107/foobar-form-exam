import React, { useState } from "react";
import MobilepayIcon from "../images/mobilepay_horizontal.png";

export default function MobilepayLink(props) {
  return (
    <a href="#" onClick={props.onMobilepayClick}>
      <img src={MobilepayIcon} />
      {props.children}
    </a>
  );
}
