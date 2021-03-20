import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";

class RecipeCatalogue extends Component {
  makeRecipeCards() {
    return this.props.recipes.map((recipe) => (
      <RecipeCard
        recipe={recipe}
        key={recipe.id}
        handleClick={this.handleClick}
      />
    ));
  }

  handleClick = (e) => {
    if ([...e.target.classList].includes("add-to-meal-plan")) {
      console.log(e.target.parentNode.id);
      const parent = e.target.parentNode;
      const btnToRemove = document.getElementById(e.target.id);
      const newContent = this.createMealForm();
      parent.replaceChild(newContent, btnToRemove);
    }
  };

  render() {
    return <div id="recipe-list-area">{this.makeRecipeCards()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

export default connect(mapStateToProps)(RecipeCatalogue);
