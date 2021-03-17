import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";

class RecipeCatalogue extends Component {
  makeRecipeCards() {
    return this.props.recipes.map((recipe) => <RecipeCard recipe={recipe} />);
  }

  render() {
    console.log(this.props.recipes);

    return <div id="recipe-list-area">{this.makeRecipeCards()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

export default connect(mapStateToProps)(RecipeCatalogue);
