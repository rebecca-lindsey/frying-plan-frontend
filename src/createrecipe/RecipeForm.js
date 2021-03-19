import React, { Component } from "react";
import { connect } from "react-redux";
import { CategoryInput, CuisineInput, IngredientInputs } from "./FormInputs";
import createRecipe from "../actions/createRecipe";

class RecipeForm extends Component {
  state = {
    recipe: {
      name: "",
      category: "",
      cuisine: "",
      recipe_ingredients_attributes: [
        { amount: "", ingredient_attributes: { name: "" } },
      ],
      instructions: "",
    },
  };

  handleChange = (e) => {
    if ("amount" === e.target.className) {
      let ingredients = [...this.state.recipe.recipe_ingredients_attributes];
      ingredients[e.target.dataset.id].amount = e.target.value;
      this.setState({
        ...this.state,
        recipe: {
          ...this.state.recipe,
          recipe_ingredients_attributes: ingredients,
        },
      });
    } else if ("name" === e.target.className) {
      let ingredients = [...this.state.recipe.recipe_ingredients_attributes];
      ingredients[e.target.dataset.id].ingredient_attributes.name =
        e.target.value;
      this.setState({
        ...this.state,
        recipe: {
          ...this.state.recipe,
          recipe_ingredients_attributes: ingredients,
        },
      });
    } else {
      this.setState({
        ...this.state,
        recipe: { ...this.state.recipe, [e.target.name]: e.target.value },
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createRecipe(this.state);
  };

  addNewIngredientField = (e) => {
    this.setState((prevState) => ({
      recipe: {
        ...prevState.recipe,
        recipe_ingredients_attributes: [
          ...prevState.recipe.recipe_ingredients_attributes,
          { amount: "", ingredient_attributes: { name: "" } },
        ],
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="name">
            <b>Name: </b>
          </label>
          <input type="text" onChange={this.handleChange} name="name" />
        </p>
        <p>
          <label htmlFor="category">
            <b>Category: </b>
          </label>
          <CategoryInput
            recipes={this.props.recipes}
            handleChange={this.handleChange}
          />
        </p>
        <p>
          <label htmlFor="cuisine">
            <b>Cuisine: </b>
          </label>
          <CuisineInput
            recipes={this.props.recipes}
            handleChange={this.handleChange}
          />
        </p>
        <div>
          <label htmlFor="ingredients">
            <b>Ingredients: </b>
          </label>
          <IngredientInputs
            ingredients={this.state.recipe.recipe_ingredients_attributes}
            recipes={this.props.recipes}
            handleChange={this.handleChange}
          />
          <i
            className="fas fa-plus-square"
            onClick={this.addNewIngredientField}
          ></i>
        </div>
        <p>
          <b>Instructions: </b>
          <br />
          <textarea
            rows="5"
            cols="50"
            onChange={this.handleChange}
            name="instructions"
          />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return state.recipes;
};

export default connect(mapStateToProps, { createRecipe })(RecipeForm);
