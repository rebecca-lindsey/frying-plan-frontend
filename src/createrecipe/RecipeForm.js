import React, { Component } from "react";
import { connect } from "react-redux";
import { CategoryInput, CuisineInput, IngredientInputs } from "./FormInputs";

class RecipeForm extends Component {
  state = {
    name: "",
    category: "",
    cuisine: "",
    ingredients: [{ ingredientName: "", ingredientAmount: "" }],
    instructions: "",
  };

  handleChange = (e) => {
    console.log("handleChange!");
    if (["ingredientName", "ingredientAmount"].includes(e.target.className)) {
      let ingredients = [...this.state.ingredients];
      ingredients[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ ingredients });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  addNewIngredientField = (e) => {
    this.setState((prevState) => ({
      ingredients: [
        ...prevState.ingredients,
        { ingredientName: "", ingredientAmount: "" },
      ],
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
            ingredients={this.state.ingredients}
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

export default connect(mapStateToProps)(RecipeForm);
