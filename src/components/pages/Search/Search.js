import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import GetBreed from "../../utils/Breed";
import "./search.css";
import Puppies from "../../PuppyImages";

function Search() {
  const [puppyState, setPuppyState] = useState({
    breedName: "",
  });
  const [puppyPics, setPuppyPics] = useState(['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/220px-Golde33443.jpg']);

  const handleChange = (e) =>
    setPuppyState({ ...puppyState, breedName: e.target.value });

  const handleClick = async (e) => {
    e.preventDefault();
    let puppyPics = await GetBreed(puppyState.breedName);
    setPuppyPics(puppyPics);
  };

  return (
    <div>
      <Form.Group className="searchBox">
        <Form.Control
          onChange={handleChange}
          size="lg"
          type="text"
          placeholder="Search by breed!"
        />
        <Button
          className="searchBtn"
          onClick={handleClick}
          variant="primary"
          type="submit"
        >
          Search
        </Button>
      </Form.Group>
      {puppyPics.map((image) => <Puppies image={image}/>)}
    </div>
  );
}

export default Search;
