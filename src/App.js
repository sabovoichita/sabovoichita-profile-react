import { Component } from "react";
import "./App.css";
import "../src/menu/rubik.css";
import { LanguagesTable } from "./LanguagesTable/LanguagesTable";
import { connect } from "react-redux";
import { FilterContainer } from "./filter";
import { AppFooter } from "./footer/components";
import AppHeader from "./header";
import { SideMenu } from "./menu/SideMenu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toTimeString(),
    };
    // console.warn("props contains:", props);
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
    // console.warn("language:", language);
    document.getElementById("languagesForm").reset();
    this.props.onAdd(language);
  }

  render() {
    const f = this.props.filter;
    const languages = this.props.languages.filter(
      (language) => language.name.toLowerCase().indexOf(f) > -1
    );
    return (
      <>
        <AppHeader />
        <SideMenu />
        <AppFooter />
        <div>
          <FilterContainer />
        </div>
        <div id="languages">
          <LanguagesTable
            languages={languages}
            border={1}
            onSubmit={(language) => {
              // console.warn("language:", language);
              this.addLanguages(language);
            }}
            onDelete={(id) => {
              this.props.onDelete(id);
            }}
          />
        </div>

        <div>{this.state.date}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  languages: state.languages,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadLanguages: (id) => dispatch({ type: "LANGUAGE_LOAD", id }),
  onAdd: (language) => dispatch({ type: "LANGUAGE_ADD", language }),
  onDelete: (id) => dispatch({ type: "LANGUAGE_REMOVE", id }),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
