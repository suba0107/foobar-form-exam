import React from "react";
import { ReactSVG } from "react-svg";
import EndingBgSVG from "../svgs/pub-with-bartender.svg";
import { useMediaPredicate } from "react-media-hook";

export default function EndingBg() {
  function MediaQueriesBg() {
    const mobileFirst = useMediaPredicate("(max-width: 460px)");
    const ipad768px = useMediaPredicate("(max-width: 800px)");
    const ipad1024px = useMediaPredicate("(max-width: 1100px)");
    if (mobileFirst) {
      return (
        <ReactSVG
          src={EndingBgSVG}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
            // mobile viewbox
            svg.setAttribute("viewBox", "470 0 390 700");
          }}
          loading={() => <span>Loading</span>}
        ></ReactSVG>
      );
    } else if (ipad768px) {
      console.log(ipad768px);
      return (
        <ReactSVG
          src={EndingBgSVG}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
          }}
          beforeInjection={(svg) => {
            svg.setAttribute("viewBox", "500 0 500 1100");
          }}
        ></ReactSVG>
      );
    } else if (ipad1024px) {
      console.log(ipad1024px);
      return (
        <ReactSVG
          src={EndingBgSVG}
          afterInjection={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
          }}
          beforeInjection={(svg) => {
            console.log("1024px");
            svg.setAttribute("viewBox", "300 0 700 768");
          }}
        />
      );
    }
    //Return default Mobile first
    return (
      <ReactSVG
        src={EndingBgSVG}
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error);
            return;
          }
          // mobile viewbox
          svg.setAttribute("viewBox", "470 0 390 700");
        }}
        loading={() => <span>Loading</span>}
      ></ReactSVG>
    );
  }
  return <MediaQueriesBg />;
}
