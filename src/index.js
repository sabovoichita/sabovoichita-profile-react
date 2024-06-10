import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const languages = (state = [], action) => {
  console.warn("rootReducer", state, action);
  switch (action.type) {
    case "LANGUAGE_LOADED": {
      return action.languages;
    }
    case "LANGUAGE_ADDED": {
      return [...state, action.language];
    }
    case "LANGUAGE_REMOVED": {
      return state.filter((language) => language.id != action.id);
    }
    default:
      return state;
  }
};

const count = (state = 0, action) => {
  switch (action.type) {
    case "LANGUAGE_LOADED": {
      return action.languages.length;
    }
    case "LANGUAGE_ADDED": {
      return state + 1;
    }
    case "LANGUAGE_REMOVED": {
      return state - 1;
    }
    default:
      return state;
  }
};

const filter = (state = "", action) => {
  switch (action.type) {
    case "FILTER_CHANGED": {
      return action.filter;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  languages,
  count,
  filter,
});

const store = createStore(rootReducer);
console.warn("store", store);

store.subscribe(() => {
  console.warn("data changed", store.getState());
});

function loadLanguages() {
  fetch("http://localhost:3030/languages-json")
    .then((response) => response.json())
    .then((languages) => {
      store.dispatch({ type: "LANGUAGE_LOADED", languages });
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
