import React, { Component } from "react";

class JokeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      randomJokeNerdy: "",
      alljokes: {},
      randomJokesExplicit: "",
      allJokesExplicit: [],
      allJokesNerdy: [],
      allcategories: {},
      randomCategories: "",
      randomJoke: "",
      randomJokeExplicit: [],
      totalNumberOfJokesExplicit: "",
      totalNumberOfJokesNerdy: ""
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClickOne = this.handleOnClickOne.bind(this);
    this.handleOnClickTwo = this.handleOnClickTwo.bind(this);
  }

  componentDidMount() {
    // fetch("http://api.icndb.com/categories")
    //   // http://api.icndb.com/jokes/random/
    //   .then(response => response.json())
    //   .then(categories => {
    //     console.log(categories);
    //     this.setState({ allcategories: categories });
    //   });
    fetch("http://api.icndb.com/categories")
      // http://api.icndb.com/jokes/random/
      .then(response => response.json())
      .then(jokes => {
        console.log(jokes);
        this.setState({ alljokes: jokes });
      });
    fetch("http://api.icndb.com/jokes/")
      // http://api.icndb.com/jokes/random/
      .then(response => response.json())
      .then(jokes => {
        this.setState({
          allJokes: jokes.value
        });
        console.log(jokes.value);
        console.log(this.state);
        console.log("One");
      });

    fetch("http://api.icndb.com/jokes/limitTo=[nerdy]")
      // http://api.icndb.com/jokes/random/
      .then(response => response.json())
      .then(jokesNerdy => {
        this.setState({ allJokesNerdy: jokesNerdy.value });

        console.log("Two");
      });
  }

  handleOnClick(event) {
    event.preventDefault();

    let allJokesExplicit = [];
    let allJokesNerdy = [];
    this.state.allJokes.forEach(jokes => {
      if (jokes.value === "explicit") {
        allJokesExplicit.push(jokes);
      }
      allJokesNerdy.push(jokes);
    });
    console.log(this.state);
    console.log(allJokesExplicit);
    this.setState({
      allcategories: this.state.alljokes.value,
      totalNumberOfJokesExplicit: this.state.allJokesExplicit.length,
      totalNumberOfJokesNerdy: this.state.allJokesNerdy.length
    });
  }
  handleOnClickOne(event) {
    event.preventDefault();
    let randNum = Math.floor(Math.random() * this.state.allJokes.length);
    let randJoke = this.state.allJokes[randNum].joke;
    this.setState({
      randomJoke: randJoke
    });
  }

  handleOnClickTwo() {
    event.preventDefault();
    let randNum = Math.floor(Math.random() * this.state.allJokesNerdy.length);
    let randJoke = this.state.allJokesNerdy[randNum].joke;
    this.setState({ randomJokeNerdy: randJoke });
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <div>
              <button onClick={this.handleOnClick}>
                Push to generate categories
              </button>
            </div>
            <button className="btn" onClick={this.handleOnClickOne}>
              {this.state.allcategories[0]}
              <p></p>
              {this.state.totalNumberOfJokesExplicit}
            </button>
            <button className="btn" onClick={this.handleOnClickTwo}>
              {this.state.allcategories[1]}
              <p></p>
              {this.state.totalNumberOfJokesNerdy}
            </button>
            <div>{this.state.randomJokeExplicit}</div>
            <p></p>
            <div>{this.state.randomJokeNerdy}</div>

            {/* {this.state.alljokes.value} */}
            {/* <button className="button"> {this.state.randomJoke[1]}</button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default JokeGenerator;
