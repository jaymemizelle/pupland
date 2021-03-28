import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import GetBreed from "../../utils/Breed";
import "./search.css";

function Search() {
  const [puppyState, setPuppyState] = useState({
    breedName: "",
  });

  const handleChange = (e) =>
    setPuppyState({ ...puppyState, breedName: e.target.value });

  const handleClick = async (e) => {
    e.preventDefault();
    let puppyPics = await GetBreed(puppyState.breedName);
    puppyPics.forEach((image) => {
      console.log(image);
      return (
        <div>
          <img alt="puppy" src={`${image}`} />
        </div>
      );
    });
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
    </div>
  );
}

export default Search;

// class Discover extends PureComponent {
//     state = {
//       puppy: ''
//     };

//     imURL = ImageSource().then((res) => {
//       this.setState({puppy: res})
//     })

//     render() {
//       return (
//         <div>
//             <Card heading="Do you like this puppy?" children={this.state.puppy}/>
//         </div>

//       );
//     }
//   }
