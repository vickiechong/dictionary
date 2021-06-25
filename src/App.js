import React from "react";
import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary />
        <footer className="credits">
          Open-sourced by
          <a
            href="https://github.com/vickiechong/dictionary"
            target="_blank"
            rel="noreferrer"
            className="creditlink"
          >
            {" "}
            Github{" "}
          </a>
          , and hosted on Netify, coded by
          <a
            href="https://www.linkedin.com/in/vickie-chong-55360725/"
            target="_blank"
            rel="noreferrer"
            className="creditlink"
          >
            {" "}
            Vickie Chong
          </a>
          <br />
          Photos provided by
          <a
            href="https://www.pexels.com"
            target="_blank"
            rel="noreferrer"
            className="creditlink"
          >
            {" "}
            Pexels{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
