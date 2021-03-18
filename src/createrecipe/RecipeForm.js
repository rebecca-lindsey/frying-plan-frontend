import React, { Component } from "react";
import { connect } from "react-redux";
import { CategoryList, CuisineList, IngredientList } from "./CreateLists";

class RecipeForm extends Component {
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
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          Name: <input type="text" onChange={this.handleChange} name="name" />
        </p>
        <p>
          Category:{" "}
          {this.props.loading ? (
            <input type="text" onChange={this.handleChange} name="category" />
          ) : (
            <CategoryList recipes={this.props.recipes} />
          )}
        </p>
        <p>
          Cuisine:{" "}
          {this.props.loading ? (
            <input type="text" onChange={this.handleChange} name="cuisine" />
          ) : (
            <CuisineList recipes={this.props.recipes} />
          )}
        </p>
        <p>Ingredients:</p>
        <p class="p-flex">
          Name:{" "}
          {this.props.loading ? (
            <input
              type="text"
              onChange={this.handleChange}
              name="ingredient-name"
              className="ingredient-name"
            />
          ) : (
            <IngredientList recipes={this.props.recipes} />
          )}
          Amount:{" "}
          <input
            type="text"
            onChange={this.handleChange}
            name="ingredient-amount"
            className="ingredient-amount"
          />
          <i
            class="fas fa-plus-square"
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
