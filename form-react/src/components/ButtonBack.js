import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Button from "muicss/lib/react/button";
import styles from "./ButtonBack.module.css";
import BackLogo from "../svgs/back_logo.svg";
import { useMediaPredicate } from "react-media-hook";

export default function ButtonBack(props) {
  const mobileFirst = useMediaPredicate("(min-width: 300px)");
  const ipad768px = useMediaPredicate("(min-width: 700px)");
  const ipad1024px = useMediaPredicate("(min-width:1024px)");

  function MediaQueriesBtn(props) {
    if (ipad768px) {
      return (
        <Button
          variant="fab"
          className={styles.buttonContainer}
          onClick={props.onClick}
        >
          <ReactSVG
            src={BackLogo}
            wrapper="span"
            className={styles.backIcon}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error);
                return;
              }
            }}
          />
        </Button>
      );
    } else if (ipad1024px) {
      return (
        <Button
          size="large"
          variant="fab"
          className={styles.buttonContainer}
          onClick={props.onClick}
        >
          <ReactSVG
            src={BackLogo}
            wrapper="span"
            className={styles.backIcon}
            afterInjection={(error, svg) => {
              if (error) {
                console.error(error);
                return;
              }
            }}
          />
        </Button>
      );
    }
    return (
      //default Small mobile first
      <Button
        size="small"
        variant="fab"
        className={styles.buttonContainer}
        onClick={props.onClick}
      >
        <ReactSVG
          src={BackLogo}
          wrapper="span"
          className={styles.backIcon}
          afterInjection={(error, svg) => {
            svg.setAttribute("style", "width: 10vw");
            if (error) {
              console.error(error);
              return;
            }
          }}
        />
      </Button>
    );
  }
  return <MediaQueriesBtn />;
}
