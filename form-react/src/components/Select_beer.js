import React, { useState, useEffect } from "react";
import styles from "./Select_beer.modules.css";
import { useHistory } from "react-router-dom";
import { Heroku } from "../modules/Heroku";

import { Keg } from "./svg//keg.svg";
import EachBeer from "./EachBeer.js";
import ShoppingCart from "./ShoppingCart.js";
import Popup from "./Popup.js";

export default function Select_beer(props) {
  let history = useHistory();

  const [info, setData] = useState([]);
  const [name, setName] = useState("");
  // let [amount, setAmount] = useState(0);
  const [selected, setSelected] = useState([]);
  let beer;
  // let selectedBeer;
  const [amountEachBeer, setAmountEachBeer] = useState(0);

  const [desc, setDesc] = useState([]);
  const [toggleInfoBox, setToggleInfoBox] = useState(false);

  useEffect(() => {
    Heroku.getData(setData, "taps");
  }, []);
  useEffect(() => {
    getDesc(setDesc);
  }, []);

  function getDesc(callback) {
    fetch("https://new-foo-diverse.herokuapp.com/beertypes", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((e) => e.json())
      .then((data) => {
        callback(data);
      });
  }

  useEffect(() => {}, [amountEachBeer]);

  function selectingBeer(beers) {
    const nextState = [...selected];
    const doesBeerExist = nextState.filter((order) => order.name === beers.name);
    console.log(doesBeerExist.length);
    if (doesBeerExist.length > 0) {
      const newState = nextState.map((obj) => (obj.name === beers.name ? beers : obj));
      setSelected(newState);
    } else {
      nextState.push(beers);
      setSelected(nextState);
    }
  }

  console.log(beer);
  const beers = info.map(function (item) {
    return item.beer;
  });

  const oneOfEachBeer = beers.filter(function (item, index) {
    return beers.indexOf(item) >= index;
  });

  function onInfoClick(n) {
    console.log(n);
    if (name === n) {
      setName(undefined);
      setToggleInfoBox(false);
    } else {
      setName(n);
      setToggleInfoBox(true);
      console.log(toggleInfoBox);
    }
  }

  function onClose() {
    setName(undefined);
    setToggleInfoBox(false);
  }
  return (
    <>
      <ShoppingCart beer={selected} />
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
          <Popup desc={desc} beer={name} popUp={toggleInfoBox} onClose={onClose} />
          {oneOfEachBeer.map((data) => (
            <EachBeer key={oneOfEachBeer.indexOf(data)} name={data} popUp={onInfoClick} amountOfBeer={selectingBeer} />
          ))}
        </article>
      </main>
    </>
  );
}
