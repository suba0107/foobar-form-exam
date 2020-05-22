import React, { useState, useEffect } from "react";
import styles from "./Select_beer.modules.css";
import { useHistory } from "react-router-dom";
import Amount from "./Amount.js";
import { ReactSVG } from "react-svg";
import { ReactKeg } from "./svg/keg.svg";
import Keg from "./Keg.js";

export default function EachBeer(props) {
  const [count, setCounting] = useState(0);

  function counter(count) {
    // setCounting(count);
    setCounting(count);
  }

  useEffect(() => {
    props.amount({ count: count, name: props.name });
    // setCount(count - amount);
  }, [count, props, props.name]);

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
        <Keg {...props} />
      </div>
      {/* <ReactKeg image="./images/fairytaleale.png" /> */}
      <h2>{props.name}</h2>
      <p className="price">25 kr</p>
      <Amount count={counter} name={props.name} />
    </article>
  );
}
