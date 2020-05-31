import React, { useState } from "react";
import styles from "./LanguageLink.module.css";

export default function LanguageLink() {
  return (
    <div className={styles.languageLink}>
      <a href="#">EN</a> <span>|</span> <a href="#">DA</a>
    </div>
  );
}
