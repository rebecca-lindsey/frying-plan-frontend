import React, { Component } from "react";
import Navigation from "./Navigation";
import "./header.css";

export default class HeaderContainer extends Component {
  render() {
    return (
      <div id="header-container">
        <h1>Frying Plan</h1>
        <Navigation />
      </div>
    );
  }
}
