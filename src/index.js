import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { Provider } from "react-redux";
import { languages } from "./languages/reducer";
import { filter, count } from "./filter/reducer";

const rootReducer = combineReducers({
  languages,
  count,
  filter,
});

//used for async actions
const languagesMdl = (store) => (next) => (action) => {
  // console.info("middleware", action, store.getState());
  switch (action.type) {
    case "LANGUAGE_LOAD": {
      fetch("http://localhost:3030/languages-json")
        .then((res) => res.json())
        .then((languages) => {
          store.dispatch({ type: "LANGUAGE_LOADED", languages });
        });
      break;
    }
    case "LANGUAGE_ADD": {
      const language = action.language;
      fetch("http://localhost:3030/languages-json/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(language),
      })
        .then((res) => res.json())
        .then((r) => {
          // console.warn(r);
          if (r.success) {
            language.id = r.id;
            store.dispatch({ type: "LANGUAGE_ADDED", language });
          }
        });
      break;
    }

    case "LANGUAGE_REMOVE": {
      fetch("http://localhost:3030/languages-json/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: action.id }),
      })
        .then((r) => r.json())
        .then(() => {
          store.dispatch({ type: "LANGUAGE_REMOVED", id: action.id });
        });
      break;
    }
  }
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(languagesMdl));
// console.warn("store", store);

// store.subscribe(() => {
//   console.warn("data changed", store.getState());
// });

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
