import React, { Component } from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
export default class List extends Component {
  // componentDidMount() {
  //   console.log("this from List componentDidMount", this);
  // }
  render() {
    console.log("5", this.props);

    return (
      <div>
        <h1>List Page</h1>
        <LoginFormContainer />
        {!this.props.user && "You need to login"}
        {this.props.user && (
          <div>
            <CreateFormContainer />
            {!this.props.images && "Loading..."}
            {this.props.images &&
              this.props.images.map(image => (
                <div key={image.id}>
                  <h3>{image.title}</h3>
                  <img src={image.url} alt="cats" width="300px" />
                </div>
              ))}
          </div>
        )}
      </div>
    );
  }
}
