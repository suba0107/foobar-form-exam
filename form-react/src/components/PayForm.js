import React, { useState, useEffect } from "react";
import ButtonPay from "./ButtonPay";
import { Heroku } from "../modules/Heroku";
import NumberFormat from "react-number-format";
import Dankort from "../images/dankort.png";
import MastercardIcon from "../images/mastercard.png";
import VisaIcon from "../images/visa.png";
import styles from "./PayForm.module.css";
import { useHistory } from "react-router-dom";
import CreditCardInput from "react-credit-card-input";

export default function Form(props) {
  console.log(props.orders);
  const [orders, setOrders] = useState([]);
  const [egname, setEgName] = useState("");
  const [egcc, setEgCC] = useState("");
  const [egexdate, setEgEx] = useState("");
  const [egcvv, setEgCVV] = useState("");
  const [text, setText] = useState({});
  const onlyText = (evt) => {
    let value = evt.target.value;
    value = value.replace(/[^A-Za-z]/gi, "");
    setText({ value });
  };
  // console.log(orders[1].name);
  // const changeArr = Object.values(orders[1]); //["1", "Fairy tale"]
  // changeArr.shift();
  // console.log(changeArr);
  let history = useHistory();

  useEffect(() => {
    const ordertest = [];
    props.orders.forEach((elm) => {
      if (elm.name !== undefined) {
        ordertest.push({ name: elm.name, amount: elm.count });
      }
    });

    console.log(ordertest);
    setOrders(ordertest);
  }, [props.orders]);

  function submit(evt) {
    evt.preventDefault();
    let cardnoInput = document.querySelector(
      "#cardnumber > input:nth-child(1)"
    );
    let value = cardnoInput.value.split(" ");
    let trueLength = value.join("");
    // let visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    // let master = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
    if (trueLength.length < 16) {
      evt.preventDefault();
      console.log(false);
      document.querySelector("#cardNoExample").textContent =
        "Invalid card number";
    } else {
      Heroku.postOrder(orders);
      history.push("/end");
    }
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
  function hideExample(evt) {
    document
      .querySelectorAll("#cardNoExample,#expireDateExample,#cvvExample")
      .forEach((elm) => {
        elm.textContent = "";
      });
  }
  function checkName(evt) {
    // let value = evt.target.value.replace(/[^A-Za-z]/, "");
    // //value = value.replace(/[^A-Za-z]/, "");
    // setState(value);
    //https://stackoverflow.com/questions/29823591/html-input-do-not-allow-numbers
    let key = evt.keyCode;
    if (
      !(
        key === 8 ||
        key === 32 ||
        key === 46 ||
        (key >= 35 && key <= 40) ||
        (key >= 65 && key <= 90)
      )
    ) {
      evt.preventDefault();
    }
  }

  // class NameCard extends React.PureComponent {
  //   state = {
  //     value: "",
  //   };
  //   render() {
  //     return (
  //       <input
  //         value={this.state.value}
  //         placeholder={"John Smith"}
  //         onChange={(e) => {
  //           let value = e.target.value;
  //           value = value.replace(/[^A-Za-z]/, "");
  //           this.setState({
  //             value,
  //           });
  //         }}
  //         required
  //       />
  //     );
  //   }
  // }
  // document.querySelector("#card-number").oninput = function () {
  //   var foo = this.value.split(" ").join("");
  //   if (foo.length > 0) {
  //     foo = foo.match(new RegExp(".{1,4}", "g")).join(" ");
  //   }
  //   this.value = foo;
  // };

  return (
    <form className={styles.payForm} onSubmit={submit}>
      <div id="paymentOptionsLogo" className={styles.paymentOptionLogos}>
        <img id="dankort" src={Dankort} />
        <img id="visa" src={VisaIcon} />
        <img id="master" src={MastercardIcon} />
      </div>
      <label id="cardName" className={styles.cardHolderName}>
        Name on Card
        {/* <NameCard /> */}
        <input
          id="nameOnCard"
          type="text"
          placeholder="John Something"
          autoCapitalize="words"
          name="nameOnCard"
          // onChange={checkName}
          onKeyDown={(evt) => {
            checkName(evt);
            setEgName("E.g. John Smith");
          }}
          pattern="[a-zA-Z]*"
          required
        ></input>
        <p id="nameError">{egname}</p>
      </label>
      <label className={styles.cardNumber} id="cardnumber">
        Card number
        {/* <input
          id="card-number"
          placeholder="1234 5678 9012 3456"
          onKeyDown={showCardNoExample}
          name="card"
          maxLength={18}
          minLength={18}
          required
        /> */}
        <NumberFormat
          id="cardNo"
          name="cardNo"
          format="#### #### #### ####"
          placeholder="1234 1234 1234 1234"
          onKeyDown={() => {
            // showCardNoExample();
            setEgCC("E.g. 1234 1234 1234 1234");
          }}
          onBlur={() => {
            hideExample();
          }}
          onInput={() => {}}
          allowEmptyFormatting={false}
          required
        />
        <p id="cardNoExample">{egcc}</p>
      </label>
      <fieldset className={styles.fieldsetWrapper}>
        <label className={styles.expireDateLabel}>
          Expire
          <NumberFormat
            id="dateYear"
            format={cardExpiry}
            placeholder="mm/yy"
            className={styles.cardExpire}
            onKeyDown={() => {
              setEgEx("E.g. MM/YY");
            }}
            onBlur={hideExample}
            required
          />
          <p id="expireDateExample">{egexdate}</p>
        </label>
        <label className={styles.cvvLabel}>
          CVV
          <NumberFormat
            // customInput={Input}
            format="###"
            minLength={3}
            placeholder="123"
            className={styles.cardCVV}
            onKeyDown={() => {
              setEgCVV("E.g. 123");
            }}
            onBlur={hideExample}
            required
          />
          <p id="cvvExample">{egcvv}</p>
        </label>
      </fieldset>
      <ButtonPay type="submit"></ButtonPay>
    </form>
  );
}
