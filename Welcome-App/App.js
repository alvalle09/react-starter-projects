import React, { Component } from "react";

import Title from "./components/Title";
import Greeting from "./components/Greeting";
import Input from "./components/Input";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: ''
    };
  }

  handleClick = name => {
    this.setState({
      displayName: name
    });
  };

  render() {
    return (        
      <>
        <Title  />
        <Greeting name={this.state.displayName} />
        <p>Enter your name below so we can get acquainted.</p>
        <Input handleClick={this.handleClick}></Input>
      </>
    );
  }
}

export default App;
