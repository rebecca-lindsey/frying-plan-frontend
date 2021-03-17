import React, { Component } from "react";

export default class RecipeForm extends Component {
  state = {};

  handleChange = (e) => {
    this.setState({});
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          Name: <input type="text" onChange={this.handleChange} name="name" />
        </p>
        <p>
          Category:{" "}
          <input type="text" onChange={this.handleChange} name="category" />
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
      </form>
    );
  }
}
