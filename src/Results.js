import React from "react";
import Meaning from "./Meaning";

export default function Results({ ...results }) {
  console.log({ ...results });

  if ({ ...results }) {
    return (
      <div className="Results">
        <h2>{{ ...results }.word}</h2>
        {{ ...results }.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning {...meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
