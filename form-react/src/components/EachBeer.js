import React, { useState, useEffect } from "react";
import styles from "./Select_beer.modules.css";
import { useHistory } from "react-router-dom";
import Amount from "./Amount.js";
import { ReactSVG } from "react-svg";
import { ReactKeg } from "./svg/keg.svg";
import Keg from "./Keg.js";

export default function EachBeer(props, onInfoClick) {
  const [counting, setCounting] = useState(0);
  const [beerAmount, setBeerAmount] = useState();

  function counter(count) {
    // setCounting(count);
    // setCounting(count);
    setCounting(counting + count);
  }

  useEffect(() => {
    console.log({ count: counting, name: props.name });
    if (counting !== 0) {
      props.amountOfBeer({ count: counting, name: props.name });
    }
    // // setCount(count - amount);
    // console.log({ count: count, name: props.name });
  }, [counting]);

  function onInfo(name) {}

  // }

  function something(beer) {
    console.log(beer);
  }
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
      {/* <ReactKeg image="./images/fairytaleale.png" /> */}
      <h2>{props.name}</h2>
      <p className="price">25 kr</p>
      <Amount count={counter} name={props.name} startAt={0} countBeers={0} amount={counter} onState={false} />
    </article>
  );
}
