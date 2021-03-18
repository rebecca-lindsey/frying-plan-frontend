import React, { Component } from "react";
import { connect } from "react-redux";
import { CategoryList, CuisineList } from "./CreateLists";

class RecipeForm extends Component {
  handleChange = (e) => {
    this.setState({});
  };

  handleSubmit = (e) => {
    e.preventDefault();
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
        <p>
          Ingredients: <br />
          Name:{" "}
          <input
            type="text"
            onChange={this.handleChange}
            name="ingredient-name"
            className="ingredient-name"
          />
          Amount:{" "}
          <input
            type="text"
            onChange={this.handleChange}
            name="ingredient-amount"
          />
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
