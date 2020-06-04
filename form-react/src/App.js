import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SelectBeer from "./components/SelectBeer";
import CheckOrder from "./components/CheckOrder";
import PaymentScreen from "./components/PaymentScreen";
import EndingScreen from "./components/EndingScreen";
import Logo from "./images/final-logo.png";

export default function App() {
  const [orders, setOrders] = useState([]);
  const [sentBackOrders, setSentBackOrders] = useState([]);
  const [state, setState] = useState("");
  let location = useLocation();

  function getState(state) {
    setState(state);
  }

  function getOrders(orders) {
    console.log(orders);
    setOrders(orders);
  }
  function sendBackOrders(orders) {
    setSentBackOrders(orders);
    console.log(orders);
  }

  return (
    <div>
      {location.pathname !== "/select" && location.pathname !== "/" && location.pathname !== "/end" && (
        <header className="header-other">
          <img src={Logo} className="fooBarLogo" alt="Foobar logo"></img>
        </header>
      )}

      {(location.pathname === "/end" || location.pathname === "/") && (
        <header className="landing-header">
          <img src={Logo} className="fooBarLogo" alt="Foobar logo"></img>
        </header>
      )}

      {/* <Switch> looks through <Route>s and
            renders the first <Route> that matches the current URL. */}
      <Switch>
        <Route path="/end">
          <EndingScreen />
        </Route>
        <Route path="/payment">
          <div className="App">
            <PaymentScreen sendBackOrders={sendBackOrders} orders={orders} />
          </div>
        </Route>

        <Route path="/checkOrder">
          <CheckOrder orders={orders} sendBackOrders={sendBackOrders} getState={getState} />
        </Route>
        <Route path="/select">
          <SelectBeer orderSentBack={sentBackOrders} getOrders={getOrders} state={state} />
        </Route>
        <Route path="/">
          <LandingPage getState={getState} />
        </Route>
      </Switch>
    </div>
  );
}
