import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Heroku } from "./modules/heroku";
import PaymentScreen from "./components/PaymentScreen";
import EndingScreen from "./components/EndingScreen";

export default function App() {
  const [info, setData] = useState([]);
  useEffect(() => {
    Heroku.getData(setData);
  }, []);

  return (
    <div className="App">
      <PaymentScreen />
      <EndingScreen />
    </div>
  );
}
