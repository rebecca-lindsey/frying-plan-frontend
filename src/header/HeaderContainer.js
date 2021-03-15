import React, { Component } from "react";
import Navigation from "./Navigation";

export default class HeaderContainer extends Component {
  render() {
    return (
      <div>
        <h1>Frying Plan</h1>
        <Navigation />
      </div>
    );
  }
}
