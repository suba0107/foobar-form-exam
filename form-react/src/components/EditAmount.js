import React, { useState, useEffect } from "react";
import styles from "./EditAmount.modules.css";

export default function EditAmount(props, onClickButton) {
  const [count, setCount] = useState(props.startAt);
  // let [amount, setAmount] = useState(props.countBeers);

  let amount = props.countBeers;
  useEffect(() => {
    console.log(props.countBeers.count + count);
    props.onClickButton({ count: count, name: props.countBeers.name }, "counter");
  }, [count]);

  useEffect(() => {
    setCount(props.countBeers.count);
  }, [props.countBeers]);

  return (
    <>
      <div
        id="editAmount"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
          <p className="amount">{count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="plusMinus"
          >
            +
          </button>
        </div>
        <p className="total">{count * 25} kr</p>
      </div>
    </>
  );
}
