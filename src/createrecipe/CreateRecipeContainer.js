import React, { Component } from "react";
import "./createrecipe.css";
import RecipeForm from "./RecipeForm";

export default class CreateRecipe extends Component {
  render() {
    return (
      <div id="create-recipe-container" className="main-container">
        <h2>Create Recipe</h2>
        <RecipeForm />
      </div>
    );
  }
}
