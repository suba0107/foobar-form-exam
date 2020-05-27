import React, { useState, useEffect } from "react";
import styles from "./Select_beer.modules.css";

export default function Amount(props, onClickButton) {
  let [count, setCount] = useState(0);
  const [state, setState] = useState(props.onState);

  const [amount, setAmount] = useState(props.countBeers);

  console.log(props.countBeers + "count Beers" + state);
  useEffect(() => {
    setAmount(count + props.countBeers);
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
          props.amount(count);
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
