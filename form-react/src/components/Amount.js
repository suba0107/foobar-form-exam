import React, { useState, useEffect } from "react";
import styles from "./Select_beer.modules.css";

export default function Amount(props, onClickButton) {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(props.onState);

  const [amount, setAmount] = useState(0);

  console.log(props.countBeers + "count Beers" + state);
  useEffect(() => {
    setAmount(count);
  }, [count]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "50%",
        }}
      >
        <button
          onClick={() => {
            setState(props.onState);
            setCount(count - 1);

            if (state === true) {
              props.onClickButton(amount);
              setAmount(0);
            }
          }}
          className="plusMinus"
          disabled={!state && count === 0}
        >
          -
        </button>

        <p className="amount">{props.countBeers + count}</p>
        <button
          onClick={() => {
            setState(props.onState);
            setCount(count + 1);

            console.log(state + " " + amount);
            if (state === true) {
              props.onClickButton(amount);
              setAmount(0);
            }
          }}
          className="plusMinus"
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          // props.amount(count);
          props.amount({ count: count, name: props.name });
          console.log(count);
          console.log(state + " " + amount);
          setCount(0);
        }}
        className="add"
      >
        Add
      </button>
    </>
  );
}
