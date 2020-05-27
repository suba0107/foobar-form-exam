import React, { useState, useEffect } from "react";
import styles from "./ShoppingCart.modules.css";
import EditAmount from "./EditAmount.js";
import { useHistory as history } from "react-router-dom";

export default function ShoppingCart(props) {
  const [order, setOrder] = useState([]);
  const [togglePopUp, setTogglePopUp] = useState(false);
  const [added, setAdded] = useState(0);
  const [total, setTotal] = useState([]);
  const [totalEdited, setTotalEdited] = useState(0);
  let beers = props.beer;
  console.log(order);
  function showOrder() {
    return console.log(order);
  }

  console.log("total" + total);

  function totalAmount() {
    let beerCount = 0;
    console.log(props.beer);
    if (props.beer.length !== 0) {
      props.beer.forEach((elm) => {
        beerCount = elm.count + beerCount;
      });
      console.log(beerCount);
      return beerCount;
    } else {
      console.log(beerCount);
      return beerCount;
    }
  }
  // setTotal(props.beer.count + beer);
  // function amountOfBeer(beer) {
  //   let beers = 0;
  //   console.log(beer + beers + 1);
  // }

  useEffect(() => {
    let beerCount = 0;
    total.forEach((elm) => {
      beerCount = elm.count + beerCount;
    });
    // console.log();
    console.log(beerCount);
    setTotalEdited(beerCount);
    console.log(totalEdited);
  }, [total]);

  function hej(x) {
    console.log(x);
  }
  function amountOfBeer(beers) {
    console.log(beers);
    console.log(total);
    let beerCount = 0;
    const nextState = [...total];
    const doesBeerExist = nextState.filter((order) => order.name === beers.name);
    console.log(doesBeerExist.length);

    if (doesBeerExist.length > 0) {
      const newState = nextState.map((obj) => (obj.name === beers.name ? beers : obj));
      setTotal(newState);
    } else {
      nextState.push(beers);
      setTotal(nextState);
    }
  }

  return (
    <header id="shopping-cart">
      <section id="shopping-wrapper">
        <div
          onClick={() => {
            if (togglePopUp) {
              setTogglePopUp(false);
            } else {
              setTogglePopUp(true);
            }
          }}
          className="heading-wrapper"
        >
          {totalEdited + totalAmount() !== 0 && <p id="showTotal">{totalEdited + totalAmount()}</p>}
          <h2 id="shopping-cart-heading">🛒</h2>
        </div>
        {togglePopUp && (
          <article className="cart-popUp">
            <h2 className="title">Your Shopping cart</h2>
            {props.beer.length === 0 ? (
              <h3>No beers added yet</h3>
            ) : (
              <>
                {props.beer.map((data) => (
                  <article id="amountWrapper" key={props.beer.indexOf(data)}>
                    <h3>{data.name}</h3>
                    <EditAmount id="shopping-cart-amount" startAt={data.count} countBeers={data} onClickButton={amountOfBeer} />
                  </article>
                ))}
                <section id="allWrapper">
                  <h2>Total</h2>
                  <h3 className="allBeers">{(totalEdited + totalAmount()) * 25} kr</h3>
                </section>
              </>
            )}

            <button>Keep shopping</button>
            <button
              onClick={() => {
                history.push("/checkOrder");
              }}
            >
              Checkout
            </button>
          </article>
        )}
      </section>
    </header>
  );
}
