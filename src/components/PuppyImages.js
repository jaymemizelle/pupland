import React from "react";

function Puppies(props) {
  const puppyStyles = {
    width: "50%",
    height: "auto",
    display: "block",
    margin: "0 auto",
    marginBottom: "10px",
  };
  return (
    <div>
      <img style={puppyStyles} alt="puppy" src={props.image} />
    </div>
  );
}

export default Puppies;
