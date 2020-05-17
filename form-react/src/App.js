import React, { useState, useEffect } from "react";
import { Heroku } from "./modules/heroku";
// import logo from "./logo.svg";
// import "./App.css";

export default function App() {
  const [info, setData] = useState([]);
  useEffect(() => {
    Heroku.getData();
  }, []);

  function onSubmitOrder(data) {
    Heroku.postOrder(data);
  }
  return <div className="App"></div>;
}
