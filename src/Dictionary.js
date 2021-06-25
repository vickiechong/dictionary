import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

import Results from "./Results";
import Photos from "./Photos";

export default function Dictonary() {
  const [searchword, setSearchword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handlesearch(event) {
    event.preventDefault();

    // api documentation -  https://dictionaryapi.dev/
    let apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${searchword}`;

    axios.get(apiurl).then(handleDictionaryResponse);

    // api documentation for photos - https://www.pexels.com/api/documentation/

    let pexelheader = {
      Authorization: `Bearer 563492ad6f917000010000014297c415c7c44b2491f62fce51053254`,
    };

    let pexelapi = `https://api.pexels.com/v1/search?query=${searchword}&per_page=6`;

    axios.get(pexelapi, { headers: pexelheader }).then(handlePhotoResponse);
  }

  function inputsearchword(event) {
    setSearchword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePhotoResponse(response) {
    console.log(response);
    setPhotos(response);
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
              <Results results={results} />
              <Photos photos={photos} />
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
