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
          >
            {" "}
            Github{" "}
          </a>
          , and hosted on Netify, coded by Vickie Chong{" "}
        </footer>
      </div>
    </div>
  );
}
