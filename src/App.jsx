import React, { Component } from "react";
import Header from "./Header";
import JokeGenerator from "./JokeGenerator";

class App extends Component {
  render = () => {
    return (
      <div>
        <Header />
        <JokeGenerator />
      </div>
    );
  };
}

export default App;
