import React, { useState, useEffect } from "react";
import styles from "./Select_beer.modules.css";
import Amount from "./Amount.js";
import Keg from "./Keg.js";

export default function EachBeer(props) {
  const [counting, setCounting] = useState();

  function counter(count) {
    console.log(count);
    setCounting(count);
  }

  useEffect(() => {
    if (counting !== undefined) {
      props.amountOfBeer(counting);
    }
  }, [counting]);

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        alignItems: "center",
        marginBottom: "1rem",
      }}
    >
      <div className="keg">
        <button
          onClick={(e) => {
            props.popUp(props.name);
          }}
          className={`information`}
          name={props.name}
        >
          i
        </button>
        <Keg {...props} />
      </div>
      <h2>{props.name}</h2>
      <p className="price">25 kr</p>
      <Amount
        count={counter}
        name={props.name}
        startAt={0}
        countBeers={0}
        amount={counter}
        onState={false}
      />
    </article>
  );
}
