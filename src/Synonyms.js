import React from "react";

export default function Synonyms({ ...definition }) {
  console.log({ ...definition.synonyms });
  debugger;
  if ({ ...definition }) {
    return (
      <div>
        {{ ...definition }.synonyms.map((word, index) => {
          return <div key={index}>{word}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
