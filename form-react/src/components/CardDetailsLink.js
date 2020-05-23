import React, { useState } from "react";
import CardDetailsIcon from "../images/carddetails.png";

export default function CardDetailsLink(props) {
  const imgSize = {
    height: "21vw",
  };
  const placeCenter = {
    alignSelf: "center",
    margin: "8vw 0 2vw 0",
  };
  return (
    <a href="#" style={placeCenter} onClick={props.onClick}>
      <img src={CardDetailsIcon} style={imgSize} />
      {props.children}
    </a>
  );
}
