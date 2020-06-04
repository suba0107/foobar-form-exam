import React, { useRef } from "react";

export default function EndingMsg() {
  // reference the status text/msg
  const status = useRef("");
  //change status
  //stage 1
  const statusMsg = setInterval(changeStatus, 4000);
  function changeStatus() {
    status.current.textContent = "A bartender has accepted your order.";
    return clearInterval(statusMsg);
  }
  // stage 2
  const statusMsg2 = setInterval(changeStatus2, 7000);
  function changeStatus2() {
    status.current.textContent = "Pouring beer...";
    return clearInterval(statusMsg2);
  }
  // stage 3
  const statusMsg3 = setInterval(changeStatus3, 10000);
  function changeStatus3() {
    status.current.textContent = "Enjoy your beer!";
    return clearInterval(statusMsg3);
  }

  return (
    // stage 0
    <h3 id="status-msg" ref={status}>
      Waiting for a bartender to accept your order.
    </h3>
  );
}
