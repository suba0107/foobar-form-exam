import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Heroku } from "./modules/Heroku";
import Main from "./components/Main";
import styles from "./App.css";
import { MemoryRouter, Router, Switch, Route, Link } from "react-router-dom";
import Landing_page from "./components/Landing_page";
import Select_beer from "./components/Select_beer";
import CheckOrder from "./components/CheckOrder";
import PaymentScreen from "./components/PaymentScreen";
import EndingScreen from "./components/EndingScreen";

export default function App() {
  // const [info, setData] = useState([]);
  // useEffect(() => {
  //   Heroku.getData(setData);
  // }, []);

  // function onSubmitOrder(info) {
  //   Heroku.postOrder(info);
  // }

  const [orders, setOrders] = useState([]);
  const [sentBackOrders, setSentBackOrders] = useState([]);
  const [state, setState] = useState("");

  function getState(state) {
    setState(state);
  }

  console.log(state);
  function getOrders(orders) {
    console.log(orders);
    setOrders(orders);
  }
  function sendBackOrders(orders) {
    setSentBackOrders(orders);
    console.log(orders);
  }

  useEffect(() => {
    console.log(sentBackOrders);
  }, [sentBackOrders]);

  return (
    <div>
      <MemoryRouter>
        <div>
          <nav>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                width: "200px",
                listStyle: "none",
              }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/checkorder">Check order</Link>
              </li>
              <li>
                <Link to="/select">Select</Link>
              </li>
              <li>
                <Link to="/payment">Payment</Link>
              </li>

              <li>
                <Link to="/end">End</Link>
              </li>
            </ul>
          </nav>

          {/* <Switch> looks through <Route>s and
            renders the first <Route> that matches the current URL. */}
          <Switch>
            <Route path="/end">
              <EndingScreen />
            </Route>
            <Route path="/payment">
              <div className="App">
                <PaymentScreen />
              </div>
            </Route>

            <Route path="/checkOrder">
              <CheckOrder
                orders={orders}
                sendBackOrders={sendBackOrders}
                getState={getState}
              />
            </Route>
            <Route path="/select">
              <Select_beer
                orderSentBack={sentBackOrders}
                getOrders={getOrders}
                state={state}
              />
            </Route>
            <Route path="/">
              <Landing_page getState={getState} />
            </Route>
          </Switch>
        </div>
      </MemoryRouter>
    </div>
  );
}
