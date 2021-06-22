import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictonary() {
  const [searchword, setSearchword] = useState("");

  function handlesearch(event) {
    event.preventDefault();

    let apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchword}`;

    axios.get(apiurl).then(handleResponse);
  }

  function inputsearchword(event) {
    setSearchword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response);
  }

  // api documentation -  https://dictionaryapi.dev/

  return (
    <div className="Dictionary row justify-content-center">
      <div className="col-4 ">
        <form className="form-group has-search" onSubmit={handlesearch}>
          <span className="fa fa-search form-control-feedback"></span>
          <input
            className="form-control col-form-label-lg"
            type="search"
            placeholder="Search for a word"
            onChange={inputsearchword}
          />
        </form>
      </div>
    </div>
  );
}
