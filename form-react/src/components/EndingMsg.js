import React, { useRef } from "react";

export default function EndingMsg() {
  const status = useRef("");
  const statusMsg = setInterval(changeStatus, 4000);
  function changeStatus() {
    status.current.textContent = "A bartender has accepted your order.";
    return clearInterval(statusMsg);
  }
  const statusMsg2 = setInterval(changeStatus2, 7000);
  function changeStatus2() {
    status.current.textContent = "Pouring beer...";
    return clearInterval(statusMsg2);
  }
  const statusMsg3 = setInterval(changeStatus3, 10000);
  function changeStatus3() {
    status.current.textContent = "Enjoy your beer!";
    return clearInterval(statusMsg3);
  }

  return (
    <h3 id="status-msg" ref={status}>
      Waiting for a bartender to accept your order.
    </h3>
  );
}
