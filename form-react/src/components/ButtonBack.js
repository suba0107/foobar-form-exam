import React from "react";
import { ReactSVG } from "react-svg";
import Button from "muicss/lib/react/button";
import styles from "./ButtonBack.module.css";
import BackLogo from "../svgs/back_logo.svg";
import { useMediaPredicate } from "react-media-hook";

export default function ButtonBack() {
  const ipad768px = useMediaPredicate("(min-width: 700px)");
  const ipad1024px = useMediaPredicate("(min-width: 1024px)");

  //change back icon svg's viewbox
  function MediaQueriesBtn(props) {
    if (ipad768px) {
      // iPad verticle
      return (
        <div>
          <Button variant="fab" className={styles.buttonContainer} onClick={props.onClick}>
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
        </div>
      );
    } else if (ipad1024px) {
      // iPad horizontal
      return (
        <div>
          <Button size="large" variant="fab" className={styles.buttonContainer} onClick={props.onClick}>
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
        </div>
      );
    }
    return (
      //default Small mobile first
      <Button size="small" variant="fab" className={styles.buttonContainer} onClick={props.onClick}>
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
