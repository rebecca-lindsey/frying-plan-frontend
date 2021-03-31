import React, { Component } from "react";
import CreateRecipeContainer from "../createrecipe/CreateRecipeContainer";
import "./newrecipe.css";

export default class NewRecipeContainer extends Component {
  state = {
    display: "create-recipe",
  };

  handleChange = (e) => {
    if (
      e.target.value === "create-recipe" ||
      e.target.value === "search-for-recipe"
    ) {
      this.setState({
        display: e.target.value,
      });
    }
  };

  render() {
    return (
      <div id="new-recipe-container" className="main-container">
        <h2>New Recipe</h2>
        <form id="new-recipe-form">
          <p>
            <input
              type="radio"
              name="display"
              value="create-recipe"
              onChange={this.handleChange}
              defaultChecked
            />
            <label htmlFor="create-recipe">Create a new recipe</label>
          </p>
          <p>
            <input
              type="radio"
              name="display"
              value="search-for-recipe"
              onChange={this.handleChange}
            />
            <label htmlFor="search-for-recipe">Search for a new recipe</label>
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
