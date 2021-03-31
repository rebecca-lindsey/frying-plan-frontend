import React, { Component } from "react";
import "./searchforrecipe.css";
import SearchForRecipeForm from "./SearchForRecipeForm";

export default class SearchForRecipeContainer extends Component {
  render() {
    return (
      <div id="search-for-recipe-container" className="main-container">
        <h3>Search the Web for a New Recipe</h3>
        <SearchForRecipeForm />
      </div>
    );
  }
}
