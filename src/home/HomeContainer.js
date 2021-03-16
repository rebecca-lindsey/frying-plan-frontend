import React, { Component } from "react";
import "./home.css";

export default class HomeContainer extends Component {
  render() {
    return (
      <div id="home-container" class="main-containers">
        <h2>Welcome to Frying Plan!</h2>
        <p>
          Frying Plan is a meal planning app designed to make the weekly chore a
          little more fun. Add your own recipes, use our classic recipes, or
          find a new one on the web - the possibilities are endless!
        </p>
      </div>
    );
  }
}
