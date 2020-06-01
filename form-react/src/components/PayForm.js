import React, { useState, useEffect } from "react";
import ButtonPay from "./ButtonPay";
import { Heroku } from "../modules/Heroku";
import NumberFormat from "react-number-format";
import Dankort from "../images/dankort.png";
import MastercardIcon from "../images/mastercard.png";
import VisaIcon from "../images/visa.png";
import styles from "./PayForm.module.css";
import { useHistory } from "react-router-dom";

export default function Form(props) {
  console.log(props.orders);
  // console.log(orders[1].name);
  // const changeArr = Object.values(orders[1]); //["1", "Fairy tale"]
  // changeArr.shift();
  // console.log(changeArr);
  let history = useHistory();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const newOrders = [];
    props.orders.forEach((elm) => {
      if (elm.name !== undefined) {
        newOrders.push({ name: elm.name, amount: elm.count });
      }
    });

    // console.log(newOrders);
    setOrders(newOrders);
  }, [props.orders]);
  function submit(evt) {
    evt.preventDefault();
    Heroku.postOrder(orders);
    history.push("/end");
  }
  function limitCardDate(val, max) {
    if (val.length === 1 && val[0] > max[0]) {
      val = "0" + val;
    }

    if (val.length === 2) {
      if (Number(val) === 0) {
        val = "01";

        //this can happen when user paste number
      } else if (val > max) {
        val = max;
      }
    }

    return val;
  }

  function cardExpiry(val) {
    let month = limitCardDate(val.substring(0, 2), "12");
    let year = val.substring(2, 4);

    return month + (year.length ? "/" + year : "");
  }
  function showCardNoExample(evt) {
    document.querySelector("#cardNoExample").textContent =
      "Example: 1234 1234 1234 1234";
  }
  function showExpireExample(evt) {
    document.querySelector("#expireDateExample").textContent =
      "Example: mm / yy";
  }
  function showCVVExample(evt) {
    document.querySelector("#cvvExample").textContent = "Ex: 123";
  }
  function hideExample(evt) {
    document
      .querySelectorAll("#cardNoExample,#expireDateExample,#cvvExample")
      .forEach((elm) => {
        elm.textContent = "";
      });
  }

  return (
    <form className={styles.payForm} onSubmit={submit}>
      <div id="paymentOptionsLogo" className={styles.paymentOptionLogos}>
        <img id="dankort" src={Dankort} />
        <img id="visa" src={VisaIcon} />
        <img id="master" src={MastercardIcon} />
      </div>
      <label className={styles.cardHolderName}>
        Name on Card
        <input
          id="nameOnCard"
          type="text"
          placeholder="John Something"
          autoCapitalize="words"
          name="nameOnCard"
          required
        />
        <p id="nameError"></p>
      </label>
      <label className={styles.cardNumber}>
        Card number
        <NumberFormat
          format="#### #### #### ####"
          placeholder="1234 1234 1234 1234"
          onKeyDown={showCardNoExample}
          onBlur={hideExample}
        />
        <p id="cardNoExample"></p>
      </label>
      <fieldset className={styles.fieldsetWrapper}>
        <label className={styles.expireDateLabel}>
          Expire
          <NumberFormat
            format={cardExpiry}
            placeholder="mm/yy"
            className={styles.cardExpire}
            onKeyDown={showExpireExample}
            onBlur={hideExample}
          />
          <p id="expireDateExample"></p>
        </label>
        <label className={styles.cvvLabel}>
          CVV
          <NumberFormat
            // customInput={Input}
            format="###"
            placeholder="123"
            className={styles.cardCVV}
            onKeyDown={showCVVExample}
            onBlur={hideExample}
          />
          <p id="cvvExample"></p>
        </label>
      </fieldset>
      <ButtonPay type="submit"></ButtonPay>
    </form>
  );
}
