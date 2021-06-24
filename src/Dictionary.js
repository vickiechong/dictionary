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
        className="form-control col-form-label-lg searchbar"
        type="search"
        placeholder="Search for a word"
        onChange={inputsearchword}
        defaultValue={searchword}
      />
    </form>
  );

  if (results) {
    return (
      <div>
        <div className="Dictionaryblock row justify-content-center">
          <h1 className="m-2 searchheader">What would you like to know?</h1>

          <div className="col-4 m-3 justify-content-center align-middle">
            {loadform}
          </div>
          <br />
          <br />
          <div className="Displayresults row justify-content-center ">
            <div className="col-10 ">
              <br />
              <Results {...results} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Dictionaryblock row justify-content-center">
        <h1 className="m-2 searchheader">What would you like to know?</h1>

        <div className="col-4 m-3 justify-content-center align-middle">
          {loadform}
        </div>
      </div>
    );
  }
}
