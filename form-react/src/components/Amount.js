import React, { useState, useEffect, useRef } from "react";
import styles from "./Select_beer.modules.css";

export default function Amount(props) {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(props.onState);
  const [addButton, setaddButton] = useState("Add");

  const [amount, setAmount] = useState(0);
  const color = useRef();

  console.log(props.countBeers + "count Beers" + state);
  useEffect(() => {
    setAmount(count);
  }, [count]);

  useEffect(() => {
    if (addButton === "✓") {
      color.current.classList.add("changeColor");
      setTimeout(() => {
        setaddButton("Add");
        color.current.classList.remove("changeColor");
      }, 1000);
    }
  }, [addButton]);

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
        disabled={count === 0 && addButton === "Add"}
        ref={color}
        onClick={() => {
          setaddButton("✓");
          props.amount({ count: count, name: props.name });
          setCount(0);
        }}
        className="add"
      >
        {addButton}
      </button>
    </>
  );
}
