import React, { useState, useEffect } from "react";
import styles from "./ShoppingCart.modules.css";
import EditAmount from "./EditAmount.js";
import { useHistory } from "react-router-dom";
import shoppingcarticon from "../svgs/shopping-cart.svg";
import Logo from "../images/final-logo.png";

export default function ShoppingCart(props) {
  let history = useHistory();
  const [state, setState] = useState(props.state);
  const [order, setOrder] = useState([]);
  const [togglePopUp, setTogglePopUp] = useState(false);

  useEffect(() => {
    setState(props.state);
    if (state === "Start order") {
      setOrder(props.beer);
    } else if (state === "Gone back") {
      setOrder(props.orderSentBack);
    }
  }, [props.state]);

  useEffect(() => {
    setOrder(props.orderSentBack);
  }, [props.orderSentBack]);

  useEffect(() => {
    setOrder(props.orderSentBack);
  }, [props.orderSentBack]);

  useEffect(() => {
    if (state === "Start order" || props.beer <= 1) {
      handleAddedBeers(props.beer);
    } else {
      setState("Start order");
    }
  }, [props.beer]);

  function totalAmount() {
    let beerCount = 0;
    order.forEach((elm) => {
      if (elm.name !== undefined) {
        beerCount = elm.count + beerCount;
      }
    });
    return beerCount;
  }

  function handleAddedBeers(beer, from) {
    const nextState = [...order];
    const doesBeerExist = nextState.filter((order) => order.name === beer.name);
    if (doesBeerExist.length > 0) {
      if (beer.count === 0 || beer === undefined) {
        const newState = nextState.filter((order) => order.name !== beer.name);
        setOrder(newState);
      } else {
        if (from === "counter") {
          const newState = nextState.map((obj) => (obj.name === beer.name ? beer : obj));
          setOrder(newState);
        } else {
          const newObj = { count: doesBeerExist[0].count + beer.count, name: beer.name };
          const newState = nextState.map((obj) => (obj.name === beer.name ? newObj : obj));
          setOrder(newState);
        }
      }
    } else {
      nextState.push(beer);
      setOrder(nextState);
    }
  }

  return (
    <header id="shopping-cart">
      <img src={Logo} className="fooBarLogo"></img>

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
          {totalAmount() !== 0 && <p id="showTotal">{totalAmount()}</p>}
          <img src={shoppingcarticon} id="shopping-cart-heading" />
        </div>
        {togglePopUp && (
          <article className="cart-popUp">
            <h2 className="title">Your Shopping cart</h2>
            {order.length <= 1 ? (
              <h3>No beers added yet</h3>
            ) : (
              <>
                {order.map((data) => {
                  if (data.name !== undefined) {
                    return (
                      <article id="amountWrapper" key={data.name}>
                        <h3>{data.name}</h3>
                        <EditAmount id="shopping-cart-amount" startAt={data.count} countBeers={data} onClickButton={handleAddedBeers} />
                      </article>
                    );
                  }
                })}

                <section id="allWrapper">
                  <h2 id="beerAmount">Total: {totalAmount()}</h2>
                  <section>
                    <h3 className="allBeers">{totalAmount() * 25} kr</h3>
                  </section>
                </section>
              </>
            )}

            <button
              className="navigationButton"
              onClick={() => {
                if (togglePopUp) {
                  setTogglePopUp(false);
                } else {
                  setTogglePopUp(true);
                }
              }}
            >
              Keep shopping
            </button>
            <button
              className="navigationButton"
              onClick={() => {
                props.getOrders(order);
                history.push("/checkOrder");
              }}
              disabled={totalAmount() === 0}
            >
              Checkout
            </button>
          </article>
        )}
      </section>
    </header>
  );
}
