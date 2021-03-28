import React from "react";
import "./style.css"


function Card(props) {
    return (
      <div className="card-container">
        <div className="card text-center">
          <div className="card-header">
            <h2>{props.heading}</h2>
          </div>
          <img alt="puppy" src={props.children}/>
        </div>
      </div>
    );
  }
  
  export default Card;