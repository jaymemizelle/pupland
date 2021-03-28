import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import Card from "../../Card/Card"
import GetBreed from "../../utils/Breed";
import "./search.css"

function Search() {

    const [puppyState, setPuppyState] =
    useState({
        breedName: '',
        photo: ''
    });

    const handleChange= (breed) => {
        setPuppyState({
            breedName: breed
        })
    }


  return (
    <div>
      <Form.Group className="searchBox">
        <Form.Control onChange={handleChange} size="lg" type="text" placeholder="Search by breed!" />
        <Button className="searchBtn" onClick={GetBreed(puppyState.breedName).then((res) => {setPuppyState({photo: res.message})})} variant="primary" type="submit">
                Search
            </Button>
      </Form.Group>
      <Card className="puppyPhotos"  heading={puppyState.breedName} children={puppyState.photo}/>
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
