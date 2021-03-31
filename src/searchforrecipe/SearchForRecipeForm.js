import React, { Component } from "react";

export default class SearchForRecipeForm extends Component {
  render() {
    return (
      <form id="search-for-recipe-form">
        <p>
          <label htmlFor="searchTerm">Name of Meal: </label>
          <input
            type="text"
            name="searchTerm"
            value={this.props.searchTerm}
            onChange={this.props.handleChange}
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}
