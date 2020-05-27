import React, { useState, useEffect } from "react";
import styles from "./EditAmount.modules.css";

export default function EditAmount(props, onClickButton) {
  const [count, setCount] = useState(0);
  // let [amount, setAmount] = useState(props.countBeers);

  let amount = props.countBeers;
  useEffect(() => {
    props.onClickButton({ count: count, name: props.countBeers.name });
  }, [count]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "80%",
          justifyContent: "space-between",
          justifySelf: "flex-end",
        }}
      >
        <div className="buttonWrapper">
          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="plusMinus"
            disabled={count + props.countBeers.count === 0}
          >
            -
          </button>

          <p className="amount">{count + props.countBeers.count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="plusMinus"
          >
            +
          </button>
        </div>
        <p className="total">{(count + props.countBeers.count) * 25} kr</p>
      </div>
    </>
  );
}
