import React, { useState, useEffect } from "react";
import styles from "./Select_beer.modules.css";

export default function Amount(props) {
  let [count, setCount] = useState(0);
  let [amount, setAmount] = useState(0);

  useEffect(() => {
    props.count(amount);
    setCount(0);
  }, [amount, props]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "50%",
        }}
      >
        <button onClick={() => setCount(count - 1)} className="plusMinus" disabled={count === 0}>
          -
        </button>

        {/* <button onClick={minus} className="plusMinus">
        -
      </button> */}
        <p className="amount">{count}</p>
        <button onClick={() => setCount(count + 1)} className="plusMinus">
          +
        </button>
      </div>
      <button
        onClick={() => {
          setAmount(count + amount);
          setCount(0);

          console.log(amount);
        }}
        className="add"
      >
        Add
      </button>
    </>
  );
}
