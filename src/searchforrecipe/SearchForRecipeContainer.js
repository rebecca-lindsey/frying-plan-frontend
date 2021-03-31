import React, { Component } from "react";
import "./searchforrecipe.css";
import SearchForRecipeForm from "./SearchForRecipeForm";

export default class SearchForRecipeContainer extends Component {
  state = {
    searchTerm: "",
    webRecipes: [],
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchWebRecipes(this.state.searchTerm);
  };

  fetchWebRecipes(searchTerm) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((recipes) => {
        this.setState({
          ...this.state,
          webRecipes: recipes.meals,
        });
      });
  }

  render() {
    return (
      <div id="search-for-recipe-container" className="main-container">
        <h3>Search the Web for a New Recipe</h3>
        <SearchForRecipeForm
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.webRecipes.length}
      </div>
    );
  }
}
