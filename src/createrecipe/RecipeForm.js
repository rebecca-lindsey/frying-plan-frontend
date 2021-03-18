import React, { Component } from "react";
import { connect } from "react-redux";
import { CategoryList, CuisineList, IngredientInput } from "./CreateLists";

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

  // displayIngredientFields = (e) => {
  //   return this.state.ingredients.map((ingredient, idx) => {
  //     return (
  //       <p className="p-flex" key={idx}>
  //         <label htmlFor={`ingredient-${idx}`}>Name: </label>
  //         <IngredientList recipes={this.props.recipes} key={idx} />
  //         <label htmlFor={`ingredient-${idx}-amount`}>Amount: </label>
  //         <input
  //           type="text"
  //           onChange={this.handleChange}
  //           name="ingredient-amount"
  //           className="ingredient-amount"
  //         />
  //       </p>
  //     );
  //   });
  // };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="name">Name: </label>
          <input type="text" onChange={this.handleChange} name="name" />
        </p>
        <p>
          <label htmlFor="category">Category: </label>
          <CategoryList recipes={this.props.recipes} />
        </p>
        <p>
          <label htmlFor="cuisine">Cuisine: </label>
          <CuisineList recipes={this.props.recipes} />
        </p>
        <p>
          Ingredients:
          {this.state.ingredients.map((ingredient, idx) => (
            <IngredientInput
              recipes={this.props.recipes}
              handleChange={this.handleChange}
              key={idx}
            />
          ))}
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
