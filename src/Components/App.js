import React from "react";
import './App.css';
import Header from "./Common/Header/Header.js";
import Footer from "./Common/Footer/Footer.js";
import Main from "./Common/Main/Main.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
        <Footer/>
    </div>
  );
}

export default App;
