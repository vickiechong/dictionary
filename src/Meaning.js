import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h2 className="wordtype">{props.meaning.partOfSpeech}</h2>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <ol className="worddefinitionlist">
                <li className="worddefinition" value={index + 1}>
                  {definition.definition}
                </li>
              </ol>
              <p className="wordexample">
                <em>
                  <small>
                    {definition.example
                      ? `Example : ${definition.example}`
                      : ""}
                  </small>
                </em>
              </p>
              <br />
              <Synonyms synonyms={definition} />

              <hr />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
