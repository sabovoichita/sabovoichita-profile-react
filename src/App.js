import { Component } from "react";
import "./App.css";
import { LanguagesTable } from "./LanguagesTable/LanguagesTable";
import { connect } from "react-redux";
import { FilterContainer } from "./filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.props.onLoadLanguages();
  }

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
          language.id = r.id;
          this.props.onAdd(language);
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
        this.props.onDelete(id);
      });
  }

  render() {
    const f = this.props.filter;
    const languages = this.props.languages.filter(
      (language) => language.name.toLowerCase().indexOf(f) > -1
    );
    return (
      <div id="header-info">
        <h1>Voichita Maria</h1>
        <p id="job-title">Transport Manager</p>
        <div>
          <FilterContainer />
        </div>
        <LanguagesTable
          languages={languages}
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
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadLanguages: (id) => dispatch({ type: "LANGUAGE_LOAD", id }),
  onAdd: (language) => dispatch({ type: "LANGUAGE_ADDED", language }),
  onDelete: (id) => dispatch({ type: "LANGUAGE_REMOVED", id }),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
