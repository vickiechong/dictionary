import React from "react";
import "./Photos.css";

export default function Photos(props) {
  let photoresults = props.photos.data.photos;

  if (photoresults) {
    return (
      <div className="Photos">
        <div className="row">
          {photoresults.map((photo, index) => {
            return (
              <div className="col-4" key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.url}
                    className="images img-fluid"
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
