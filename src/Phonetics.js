import React from "react";
import "./Phonetics.css";

export default function Phonetics({ ...phonetic }) {
  if ({ ...phonetic }.text) {
    return (
      <div className="Phonetics">
        <a href={{ ...phonetic }.audio} target="_blank" rel="noreferrer">
          <i className="fas fa-volume-up audioicon"></i>
        </a>
        <em className="ms-3 phonetictext">{{ ...phonetic }.text}</em>{" "}
      </div>
    );
  } else {
    return null;
  }
}
