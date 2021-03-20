import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeCard from "./RecipeCard";

class RecipeCatalogue extends Component {
  state = {
    idToAdd: 0,
  };

  makeRecipeCards() {
    return this.props.recipes.map((recipe) => (
      <RecipeCard
        recipe={recipe}
        key={recipe.id}
        handleClick={this.handleClick}
        idToAdd={this.state.idToAdd}
        days={this.props.days}
      />
    ));
  }

  handleClick = (e) => {
    if ([...e.target.classList].includes("add-to-meal-plan")) {
      this.setState({ idToAdd: parseInt(e.target.parentNode.id) });
    } else if ([...e.target.classList].includes("remove-recipe-form")) {
      this.setState({ idToAdd: 0 });
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
