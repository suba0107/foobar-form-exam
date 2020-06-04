import React from "react";
import { Button } from "muicss/react";
import styles from "./Landingpage.modules.css";
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  return (
    <main className="landingpage-main">
      <article className="wrapper-vertical">
        <h1 id="landingpage-h1">Welcome to Foobar!</h1>

        <Link
          className="orderButton"
          onClick={() => {
            props.getState("Start order");
          }}
          to="/select"
        >
          Order now
        </Link>
      </article>
    </main>
  );
}
