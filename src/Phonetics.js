import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic.text) {
    return (
      <div className="Phonetics">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <i className="fas fa-volume-up audioicon"></i>
        </a>
        <em className="ms-3 phonetictext">{props.phonetic.text}</em>{" "}
      </div>
    );
  } else {
    return null;
  }
}
