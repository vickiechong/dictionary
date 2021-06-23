import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results({ ...results }) {
  console.log({ ...results });

  if ({ ...results }) {
    return (
      <div className="Results">
        <h1 className="text-capitalize">{{ ...results }.word}</h1>

        {{ ...results }.phonetics.map((phonetic, index) => {
          return (
            <div key={index}>
              <Phonetics {...phonetic} />
            </div>
          );
        })}

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
