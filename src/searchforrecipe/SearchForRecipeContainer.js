import React, { Component } from "react";
import "./searchforrecipe.css";

export default class SearchForRecipeContainer extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    return (
      <div id="search-for-recipe-container" className="main-container">
        <h3>Search the Web for a New Recipe</h3>
        <form id="search-for-recipe-form">
          <p>
            <label htmlFor="searchTerm">Name of Meal: </label>
            <input
              type="text"
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
