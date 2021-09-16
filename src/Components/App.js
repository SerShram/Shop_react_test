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
            <Footer/>
        </div>
    );
}

export default App;
