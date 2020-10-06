import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Jamstack Conf!</p>
        <a
          className="App-link"
          href="https://workers.cloudflare.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about Cloudflare Workers
        </a>
      </header>
    </div>
  );
}

export default App;
