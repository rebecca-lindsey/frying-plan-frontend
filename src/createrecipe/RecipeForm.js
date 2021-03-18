import React, { Component } from "react";
import { connect } from "react-redux";
import { CategoryList } from "./CreateLists";

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
          <input type="text" onChange={this.handleChange} name="cuisine" />
        </p>
        <p>
          Ingredients:{" "}
          <input type="text" onChange={this.handleChange} name="ingredients" />
        </p>
        <p>
          Instructions:{" "}
          <input type="text" onChange={this.handleChange} name="instructions" />
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
