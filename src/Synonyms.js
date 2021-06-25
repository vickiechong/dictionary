import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);

  if (props.synonyms.synonyms) {
    return (
      <div className="Synonymsblock">
        Synonyms:
        <span className="ms-2">
          {props.synonyms.synonyms.map((word, index) => {
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
