import ImageSource from "../../utils/DogImage";
import Card from "../../Card/Card";
import React, { PureComponent } from "react";
import "./discover.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

class Discover extends PureComponent {
  state = {
    puppy: "",
  };

  imgURL = ImageSource().then((res) => {
    this.setState({ puppy: res });
  });

  render() {
    return (
      <div class="container">
        <Card heading="Do you like this puppy?" children={this.state.puppy} />
        <FontAwesomeIcon className="fa" icon={faThumbsUp} />
        <FontAwesomeIcon className="fa2" icon={faThumbsDown} />
      </div>
    );
  }
}

export default Discover;
