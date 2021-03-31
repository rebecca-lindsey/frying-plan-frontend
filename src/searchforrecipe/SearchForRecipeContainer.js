import React, { Component } from "react";
import "./searchforrecipe.css";
import SearchForRecipeForm from "./SearchForRecipeForm";

export default class SearchForRecipeContainer extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div id="search-for-recipe-container" className="main-container">
        <h3>Search the Web for a New Recipe</h3>
        <SearchForRecipeForm
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
