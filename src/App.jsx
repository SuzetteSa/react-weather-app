import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />
        <footer>
          This project was created by{" "}
          <a href="https://www.suzettesamm.io" target="_blank" rel="noreferrer">
            Suzette Samm
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SuzetteSa/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub 
            </a>and{" "}
            <a
              href="https://amazing-mousse-ea3e7a.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
