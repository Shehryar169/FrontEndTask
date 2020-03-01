import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import AnimalsComponent from "./components/animalsComponent";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AnimalsComponent></AnimalsComponent>
    </div>
  );
}
export default App;
