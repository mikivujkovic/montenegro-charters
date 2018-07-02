import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <NavBar />
        <div>Miki</div>
        <div className="footer"> Footer </div>
      </div>
    );
  }
}

export default App;
