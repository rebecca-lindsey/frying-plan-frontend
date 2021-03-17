import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";

class RecipeList extends Component {
  makeRecipeCards() {
    return this.props.recipes.recipes.map((recipe) => (
      <RecipeCard recipe={recipe} />
    ));
  }

  render() {
    return (
      <div id="recipe-list">
        <ul>{this.makeRecipeCards()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps)(RecipeList);
