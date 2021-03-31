import React from "react";

function Puppies(props) {
    return (
        <div>
          <img alt="puppy" src={props.image} />
        </div>
      );
}

export default Puppies;