import React from "react";

import "./Synonyms.css";

export default function Synonyms({ ...definition }) {
  console.log({ ...definition.synonyms });

  if ({ ...definition }.synonyms) {
    return (
      <div className="Synonymsblock">
        Synonyms:
        <span className="ms-2">
          {{ ...definition }.synonyms.map((word, index) => {
            return (
              <div className="Synonymswords" key={index}>
                {(index ? " , " : "") + word + "  "}
              </div>
            );
          })}
        </span>
      </div>
    );
  } else {
    return null;
  }
}
