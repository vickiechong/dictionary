import React from "react";

export default function Synonyms({ ...definition }) {
  console.log({ ...definition.synonyms });

  if ({ ...definition }.synonyms) {
    return (
      <div className="Synonyms">
        {{ ...definition }.synonyms.map((word, index) => {
          return <div key={index}>{word}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
