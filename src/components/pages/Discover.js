import ImageSource from "../utils/API";
import Card from "../Card/Card"
import React, {PureComponent} from "react";

// const puppyImg = (
//     <img alt="puppy" src={`${ImageSource()}`} />
// );

class Discover extends PureComponent {
    state = {
      puppy: ''
    };

    imURL = ImageSource().then((res) => {
      this.setState({puppy: res})
    })
  
    render() {
      return (
        <div>
            <Card heading="Do you like this puppy?" children={this.state.puppy}/>
        </div>   
            
           
      );
    }
  }

// function Discover() {
//     return (
//         <div>
//             <Card heading="Do you like this pupppy?" children={puppyImg}/>
//         </div>
//     )
// }

export default Discover;