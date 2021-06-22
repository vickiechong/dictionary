import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

import Results from "./Results";

export default function Dictonary() {
  const [searchword, setSearchword] = useState("");
  const [results, setResults] = useState(null);

  function handlesearch(event) {
    event.preventDefault();

    // api documentation -  https://dictionaryapi.dev/
    let apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchword}`;

    axios.get(apiurl).then(handleResponse);
  }

  function inputsearchword(event) {
    setSearchword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  let loadform = (
    <form className="form-group has-search" onSubmit={handlesearch}>
      <span className="fa fa-search form-control-feedback"></span>
      <input
        className="form-control col-form-label-lg"
        type="search"
        placeholder="Search for a word"
        onChange={inputsearchword}
      />
    </form>
  );

  if (results) {
    return (
      <div>
        <div className="Dictionary row justify-content-center">
          <div className="col-4 justify-content-center">{loadform}</div>
          <br />
          <br />
          <div className="Displayresults row justify-content-center">
            <div className="col-6 ">
              <h1 className="text-capitalize">
                <strong>{results.word}</strong>
              </h1>
              <em>{results.phonetics[0].text}</em>{" "}
              <span>
                <a href={results.phonetics[0].audio}> link </a>
              </span>
              {""}
            </div>
          </div>
        </div>
        <br />
        <Results {...results} />
      </div>
    );
  } else {
    return (
      <div className="Dictionary row justify-content-center">
        <div className="col-4 justify-content-center">{loadform}</div>
      </div>
    );
  }
}
