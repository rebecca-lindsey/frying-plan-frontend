import React, { Component } from "react";

export default class SearchForRecipeForm extends Component {
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
    );
  }
}
