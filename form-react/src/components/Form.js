import React, { useState } from "react";
import Input from "muicss/lib/react/input";

import styles from "./Form.module.css";

export default function Form(props) {
  function submit(evt) {
    evt.preventDefault();
    console.log("submit?", evt);
  }
  return (
    <form className={styles.payForm} onSubmit={submit}>
      <label>Testing Font</label>
      <Input
        label="Title"
        floatingLabel={true}
        type="text"
        name="title"
      ></Input>
      <button type="submit" value="pay">
        Pay
      </button>
    </form>
  );
}
