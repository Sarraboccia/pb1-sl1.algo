import React, { Component } from "react";
import ME from "../ME.JPG";

class Person extends Component {
  state = {
    fullName: "Sara Boccia",
    bio: "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.",
    imgSrc: <img src={ME} className="event" alt="" />,
    profession: "Web Developer",
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }
  render() {
    return (

     

      <div>
        <h1>{this.state.timer}</h1>

        <h1 className="Prenom"> {this.state.fullName} </h1>
        <p className="Description">{this.state.bio}</p>
        {this.state.imgSrc}
        <h2 className="Work">{this.state.profession}</h2>
      </div>
    );
  }
}
export default Person;
