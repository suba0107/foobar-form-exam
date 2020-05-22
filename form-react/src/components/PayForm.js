import React, { useState } from "react";
import ButtonPay from "./ButtonPay";
import Dankort from "../images/dankort.png";
import Creditcards from "../images/master_visa.png";
import styles from "./PayForm.module.css";

export default function Form(props) {
  function submit(evt) {
    evt.preventDefault();
    console.log("submit?", evt);
  }
  return (
    <form className={styles.payForm} onSubmit={submit}>
      <div>
        <img src={Dankort} />
        <img src={Creditcards} />
      </div>
      <label>
        Name on Card
        <input type="text" placeholder="John Something" name="Name on card" />
      </label>
      <label>
        Card number
        <input
          type="text"
          placeholder="1234 1234 1234 1234"
          name="Card number"
        />
      </label>
      <fieldset>
        <label>
          Expire{" "}
          <input
            type="text"
            placeholder="mm/yy"
            name="Expire"
            maxlength="5"
            size="5"
          />
        </label>
        <label>
          CVV
          <input
            type="text"
            placeholder="123"
            name="CVV"
            maxlength="3"
            size="5"
          />
        </label>
      </fieldset>
      <ButtonPay></ButtonPay>
    </form>
  );
}
