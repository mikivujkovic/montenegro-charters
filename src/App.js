import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>Miki</div>
      </div>
    );
  }
}

export default App;
