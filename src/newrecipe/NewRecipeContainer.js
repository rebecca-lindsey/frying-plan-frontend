import React, { Component } from "react";
import CreateRecipeContainer from "../createrecipe/CreateRecipeContainer";
import "./newrecipe.css";

export default class NewRecipeContainer extends Component {
  state = {
    display: "create-recipe",
  };

  render() {
    return (
      <div id="new-recipe-container" className="main-container">
        <h2>New Recipe</h2>
        <form id="new-recipe-form">
          <p>
            <input type="radio" name="display" value="create-recipe" checked />
            <label for="create-recipe">Create a new recipe</label>
          </p>
          <p>
            <input type="radio" name="display" value="search-for-recipe" />
            <label for="search-for-recipe">Search for a new recipe</label>
          </p>
        </form>

        {this.state.display === "create-recipe" ? (
          <CreateRecipeContainer />
        ) : (
          <div>Test</div>
        )}
      </div>
    );
  }
}
