import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning({ ...meaning }) {
  if ({ ...meaning }) {
    return (
      <div>
        <h3 className="wordtype">{{ ...meaning }.partOfSpeech}</h3>
        {{ ...meaning }.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <p className="worddefinition">{definition.definition}</p>
              <p>
                <em>Example: {definition.example}</em>
              </p>
              <br />
              <Synonyms {...definition} />
              <br />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
