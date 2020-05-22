import React, { useState, useEffect } from "react";
import styles from "./Select_beer.modules.css";
import { useHistory } from "react-router-dom";
import { Heroku } from "../modules/Heroku";

import { Keg } from "./svg//keg.svg";
import EachBeer from "./EachBeer.js";

export default function Select_beer() {
  let history = useHistory();

  const [info, setData] = useState([]);

  console.log(info);
  useEffect(() => {
    Heroku.getData(setData, "taps");
  }, []);

  const beers = info.map(function (item) {
    return item.beer;
  });

  const oneOfEachBeer = beers.filter(function (item, index) {
    return beers.indexOf(item) >= index;
  });

  return (
    <main id="select_beer_main">
      {info.length === 0 && (
        <h2
          style={{
            margin: "45vh auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Loading ...
        </h2>
      )}
      {info.length !== 0 && <h1 id="chooseBeer">Choose your favorite beer!</h1>}

      <article id="selection-of-beers">
        {oneOfEachBeer.map((data) => (
          <EachBeer key={oneOfEachBeer.indexOf(data)} name={data} />
        ))}
      </article>
    </main>
  );
}
