// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { LanguagesTable } from "./LanguagesTable/LanguagesTable";

let languages = [
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
];
function App() {
  return (
    <>
      <div id="header-info">
        <h1>Voichita Maria</h1>
        <p id="job-title">Transport Manager</p>
        <div>
          <LanguagesTable languages={languages} />
        </div>
      </div>
    </>
  );
}

export default App;
