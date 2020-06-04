import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Landing_page from "./components/Landing_page";
import Select_beer from "./components/Select_beer";
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
      {/* <Switch> looks through <Route>s and
            renders the first <Route> that matches the current URL. */}
      {location.pathname !== "/select" && location.pathname !== "/" && location.pathname !== "/end" && (
        <header className="header-other">
          <img src={Logo} className="fooBarLogo"></img>
        </header>
      )}

      {(location.pathname == "/end" || location.pathname === "/") && (
        <header className="landing-header">
          <img src={Logo} className="fooBarLogo"></img>
        </header>
      )}

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
          <Select_beer orderSentBack={sentBackOrders} getOrders={getOrders} state={state} />
        </Route>
        <Route path="/">
          <Landing_page getState={getState} />
        </Route>
      </Switch>
    </div>
  );
}
