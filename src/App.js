import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://stupendous-baklava-6fe59f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Cristal
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/codingcalypso/react-weatherapp-shecodes-redesign"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}
