import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning({ ...meaning }) {
  if ({ ...meaning }) {
    return (
      <div className="Meaning">
        <h2 className="wordtype">{{ ...meaning }.partOfSpeech}</h2>
        {{ ...meaning }.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <ol className="worddefinitionlist">
                <li className="worddefinition" value={index + 1}>
                  {definition.definition}
                </li>
              </ol>
              <p className="wordexample">
                <em>
                  <small>Example: " {definition.example} "</small>
                </em>
              </p>
              <br />
              <Synonyms {...definition} />

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
