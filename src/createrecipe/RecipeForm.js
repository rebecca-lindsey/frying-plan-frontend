import React, { Component } from "react";
import { connect } from "react-redux";
import { CategoryInput, CuisineInput, IngredientInputs } from "./FormInputs";

class RecipeForm extends Component {
  state = {
    name: "",
    category: "",
    cuisine: "",
    ingredients: [{ name: "", amount: "" }],
    instructions: "",
  };

  handleChange = (e) => {
    this.setState({});
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  addNewIngredientField = (e) => {
    console.log("Add new Ingredient!");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="name">Name: </label>
          <input type="text" onChange={this.handleChange} name="name" />
        </p>
        <p>
          <label htmlFor="category">Category: </label>
          <CategoryInput recipes={this.props.recipes} />
        </p>
        <p>
          <label htmlFor="cuisine">Cuisine: </label>
          <CuisineInput recipes={this.props.recipes} />
        </p>
        <p>
          <label htmlFor="ingredients">Ingredients: </label>
        </p>
        <p className="p-flex">
          <IngredientInputs
            ingredients={this.state.ingredients}
            recipes={this.props.recipes}
            handleChange={this.handleChange}
          />
          <i
            className="fas fa-plus-square"
            onClick={this.addNewIngredientField}
          ></i>
        </p>
        <p>
          Instructions: <br />
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

export default connect(mapStateToProps)(RecipeForm);
