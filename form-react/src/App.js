import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Heroku } from "./modules/Heroku";
import PaymentScreen from "./components/PaymentScreen";

export default function App() {
  const [info, setData] = useState([]);
  useEffect(() => {
    Heroku.getData(setData);
  }, []);

  return (
    <div className="App">
      <PaymentScreen />
    </div>
  );
}
