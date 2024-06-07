import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const rootReducer = (state = { languages: [] }, action) => {
  console.warn("rootReducer", state, action);
  switch (action.type) {
    case "LANGUAGES_LOADED": {
      return {
        languages: action.languages,
      };
    }
    case "LANGUAGES_ADDED": {
      return {
        languages: state.languages.concat(action.language),
      };
    }
    default:
      return state;
  }
};

const store = createStore(rootReducer);
console.warn("store", store);

store.subscribe(() => {
  console.warn("data changed", store.getState());
});

function loadLanguages() {
  fetch("http://localhost:3030/languages-json")
    .then((response) => response.json())
    .then((languages) => {
      store.dispatch({ type: "LANGUAGES_LOADED", languages: languages });
    });
}

loadLanguages();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
