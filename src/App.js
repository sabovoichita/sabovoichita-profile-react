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
      date: new Date().toTimeString(),
    };
  }

  componentDidMount() {
    // console.warn("mount here");

    setInterval(() => {
      this.setState({
        date: new Date().toTimeString(),
      });
    }, 60000);

    // setTimeout(() => {
    //   console.warn("loaded");
    //   this.setState({
    //     languages: [
    //       {
    //         name: "Romanian",
    //         level: "Native",
    //       },
    //       {
    //         name: "English",
    //         level: "Profesional",
    //       },
    //       {
    //         name: "Spanish",
    //         level: "Beginner",
    //       },
    //     ],
    //   });
    // }, 2000);

    this.loadLanguages();
  }

  loadLanguages() {
    fetch("http://localhost:3030/languages-json")
      .then((response) => response.json())
      .then((languages) => {
        // console.log("languages1:", languages);
        this.setState({
          languages,
        });
        // printJsonIntoTable(languages, "languages-table");
      });
  }

  render() {
    // console.debug("show:", this.state.languages);
    return (
      <div id="header-info">
        <h1>Voichita Maria</h1>
        <p id="job-title">Transport Manager</p>
        <LanguagesTable languages={this.state.languages} border={1} />
        <div>{this.state.date}</div>
      </div>
    );
  }
}

export default App;
