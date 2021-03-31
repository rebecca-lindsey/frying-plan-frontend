import React, { Component } from "react";
import CreateRecipeContainer from "../createrecipe/CreateRecipeContainer";

export default class NewRecipeContainer extends Component {
  state = {
    display: "create-recipe",
  };

  render() {
    return (
      <div id="new-recipe-container" className="main-container">
        {this.state.display === "create-recipe" ? (
          <CreateRecipeContainer />
        ) : (
          <div>Test</div>
        )}
      </div>
    );
  }
}
