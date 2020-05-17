import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Heroku } from "./modules/Heroku";
import Main from "./components/Main";

export default function App() {
  const [info, setData] = useState([]);
  useEffect(() => {
    Heroku.getData(setData);
  }, []);

  function onSubmitOrder(info) {
    Heroku.postOrder(info);
  }
  return (
    <div className="App">
      <Main onSubmitOrder={onSubmitOrder} info={info}></Main>
    </div>
  );
}
