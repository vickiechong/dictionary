import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h1 className="worddisplay">{props.results.word}</h1>

        {props.results.phonetics.map((phonetic, index) => {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetic} />
            </div>
          );
        })}
        <br />
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
