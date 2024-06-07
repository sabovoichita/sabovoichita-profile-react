import { Component } from "react";
import "./App.css";
import { LanguagesTable } from "./LanguagesTable/LanguagesTable";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      date: new Date().toTimeString(),
    };
    console.warn("props contains:", props);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toTimeString(),
      });
    }, 60000);

    this.loadLanguages();
  }

  loadLanguages() {}
  addLanguages(language) {
    console.warn("language:", language);
    document.getElementById("languagesForm").reset();
    fetch("http://localhost:3030/languages-json/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(language),
    })
      .then((res) => res.json())
      .then((r) => {
        console.warn(r);
        if (r.success) {
          // this.loadLanguages();
          // console.warn("props here %o", this.props);

          language.id = r.id;
          this.props.dispatch({
            type: "LANGUAGE_ADDED",
            language,
          });
          // this.state.languages.push(language);
          // const languages = this.state.languages.concat(language);
          // this.setState({
          //   languages,
          // });
          // this.loadLanguages();
        }
      });
  }

  remove(id) {
    fetch("http://localhost:3030/languages-json/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((r) => r.json())
      .then(() => {
        this.loadLanguages();
      });
  }

  render() {
    return (
      <div id="header-info">
        <h1>Voichita Maria</h1>
        <p id="job-title">Transport Manager</p>
        <LanguagesTable
          languages={this.props.languages}
          border={1}
          onSubmit={(language) => {
            // console.warn("language:", language);
            this.addLanguages(language);
          }}
          onDelete={(id) => {
            this.remove(id);
          }}
        />
        <div>{this.state.date}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  languages: state.languages,
});
const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
