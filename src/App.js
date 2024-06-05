// import React from "react";
// import logo from "./logo.svg";
import { Component } from "react";
import "./App.css";
import { LanguagesTable } from "./LanguagesTable/LanguagesTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
    };
  }

  componentDidMount() {
    console.warn("mount here");
    setTimeout(() => {
      console.warn("loaded");
      this.setState({
        languages: [
          {
            name: "Romanian",
            level: "Native",
          },
          {
            name: "English",
            level: "Profesional",
          },
          {
            name: "Spanish",
            level: "Beginner",
          },
          {
            name: "French",
            level: "Beginner",
          },
        ],
      });
    }, 2000);
  }

  render() {
    console.debug("show:", this.state.languages);
    return (
      <div id="header-info">
        <h1>Voichita Maria</h1>
        <p id="job-title">Transport Manager</p>
        <LanguagesTable languages={this.state.languages} border={1} />
      </div>
    );
  }
}

export default App;
