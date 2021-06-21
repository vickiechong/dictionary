import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictonary() {
  const [searchword, setSearchword] = useState("");

  function handlesearch(event) {
    event.preventDefault();
    alert(`${searchword}`);
  }

  function inputsearchword(event) {
    setSearchword(event.target.value);
  }
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
