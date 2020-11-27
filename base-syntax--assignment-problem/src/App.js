import React, { Component } from "react";
import "./App.css";
import UserInput from "./Users/UserInput";
import UserOutput from "./Users/UserOutput";

class App extends Component {
  state = {
    Users: [
      {
        name: "Anmol Zakie",
        age: 21,
        city: "GKP",
      },
    ],
  };

  switchNameHandler = (event) => {
    this.setState({
      Users: [
        {
          name: "Alan",
          age: 21,
          city: "LKO",
        },
      ],
    });
  };

  inputHandler = (event) => {
    this.setState({
      Users: [
        {
          name: event.target.value,
          age: 21,
          city: "LKO",
        },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      margin: "16px auto",
      font: "inherit",
      border: "1px solid blue",
      padding: "5px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hi i am react app</h1>
        <p>This is really working</p>

        <UserOutput
          name={this.state.Users[0].name}
          age={this.state.Users[0].age}
          city={this.state.Users[0].city}
        />
        <button style={style} onClick={this.switchNameHandler}>
          Switch
        </button>
        <UserInput name={this.state.Users[0].name} click={this.inputHandler} />
      </div>
    );
  }
}

export default App;
