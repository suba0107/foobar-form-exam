import React, { useState, useEffect } from "react";
import styles from "./Popup.modules.css";
import Keg from "./Keg.js";

export default function Popup(props) {
  console.log(props);
  let desc = props.desc.filter((desc) => desc.name === props.beer);
  let something = desc[0];
  console.log(show());

  console.log(props.popUp);
  const [toggleInfo, setToggleInfo] = useState(false);

  console.log(toggleInfo);
  function show() {
    if (desc[0] !== undefined) {
      return desc[0].alc;
    } else return "";
  }

  function deconstruct(str) {
    let words = str.split(" ", 15);
    let array = words.filter(function (elm) {
      return elm != "";
    });

    console.log(array);

    for (let i = 0; i < array.length - 1; i++) {
      array[i] += " ";
      console.log(array.join(""));
    }

    return array.join("");
  }

  console.log(props.popUp);
  function removeText(str) {
    console.log(deconstruct(str));
    const remove = deconstruct(str);
    const newString = str.replace(remove, "");
    console.log(newString);

    return newString;
  }

  function onToggling(e) {
    if (e.target.open === false) {
      document.querySelectorAll("details").forEach((elm) => {
        elm.open = false;
      });

      console.log(e.target);
      e.target.open = true;
    } else if (e.target.open === true) {
      e.target.open = false;
    }
  }

  return (
    <>
      {props.popUp && (
        <article className="popup">
          <button
            onClick={(e) => {
              props.onClose();
            }}
            className="popup-toggle"
          >
            X
          </button>
          {desc[0] !== undefined && (
            <>
              <div className="keg-popup">
                <Keg name={desc[0].name} />
              </div>
              <h2>{desc[0].name}</h2>
              <h3>Category: {desc[0].category} </h3>
              <h4>Alc. {desc[0].alc} %</h4>
              <p>{desc[0].description.overallImpression}</p>
              {/* <article className="collapse">
            <details id="aroma" onClick={onToggling}>
              <summary onClick={onToggling}>Aroma</summary>
              <p>{desc[0].description.aroma}</p>
            </details>
            <details id="flavor" onClick={onToggling}>
              <summary>Flavour</summary>
              <p>{desc[0].description.flavor}</p>
            </details>
            <details id="mouthfeel" onClick={onToggling}>
              <summary>Mouth feel</summary>
              <p>{desc[0].description.mouthfeel}</p>
            </details>
            <details id="appearance" onClick={onToggling}>
              <summary>Appearance</summary>
              <p>{desc[0].description.appearance}</p>
            </details>
          </article> */}
            </>
          )}
        </article>
      )}
    </>
  );
}
