import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";
import Button from "react-bootstrap/Button";

class App extends Component {
  state = {
    isToggleOn: false,
    delay: 0,
    i : 0
  };

  //setInterval(() => {
   // this.setState({ delay: this.state.delay + 1 });
 // }, 1000);

  startCount() {

    for(this.state.i ; this.state.i<10 ; this.setState({i : this.state.i+1}) ){
      this.setState({ delay: this.state.delay + 1 })
    }

    this.reset()

    
    
  }

  handleClick() {
    //change the state
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
    this.startCount();
  }
  reset = () => {
    this.setState({ delay: 0 });
    this.setState({ i: 0 });
  };

  render() {
    return (
      <div className="App">
        <Button onClick={() => this.handleClick()}>
          {this.state.isToggleOn && this.state.delay < 10 ? "ON" : "OFF" }
        </Button>
        <br />

        {this.state.isToggleOn && this.state.delay < 10 ? <Person /> : null}
      </div>
    );
  }
}

export default App;
