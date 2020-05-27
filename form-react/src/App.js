import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Heroku } from "./modules/Heroku";
import Main from "./components/Main";
import { MemoryRouter, Router, Switch, Route, Link } from "react-router-dom";
import Landing_page from "./components/Landing_page";
import Select_beer from "./components/Select_beer";

export default function App() {
  // const [info, setData] = useState([]);
  // useEffect(() => {
  //   Heroku.getData(setData);
  // }, []);

  // function onSubmitOrder(info) {
  //   Heroku.postOrder(info);
  // }

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
                <Link to="/select">Select</Link>
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
              <End_page />
            </Route>
            <Route exact path="/checkOrder">
              <Select_beer />
            </Route>
            <Route exact path="/select">
              <Select_beer />
            </Route>
            <Route path="/">
              <Landing_page />
            </Route>
          </Switch>
        </div>
      </MemoryRouter>
    </div>
  );
}

function End_page() {
  return <h2>End page</h2>;
}
