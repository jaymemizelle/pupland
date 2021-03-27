import ImageSource from "../utils/API";
import Card from "./Card"
import React, {PureComponent} from "react";

const puppyImg = (
    <img alt="puppy" src={`${ImageSource()}`} />
);

class Discover extends PureComponent {
    state = {
      puppy: puppyImg
    };
  
    render() {
      return (
        <div>
            <Card heading="Do you like this puppy?" children={this.state.puppy}/>
        </div>   
            
           
      );
    }
  }

// console.log(ImageSource());

// function Discover() {
//     return (
//         <div>
//             <Card heading="Do you like this pupppy?" children={puppyImg}/>
//         </div>
//     )
// }

export default Discover;