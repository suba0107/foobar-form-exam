import React, { useState } from "react";
import WirelessIcon from "../images/wireless_icon.png";

export default function WirelessLink(props) {
  const imgSize = {
    height: "21vw",
  };
  const placeCenter = {
    alignSelf: "center",
  };
  return (
    <a href="#" style={placeCenter}>
      <img src={WirelessIcon} style={imgSize} />
    </a>
  );
}
