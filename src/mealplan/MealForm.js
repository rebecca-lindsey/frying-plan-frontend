import React, { Component } from "react";
import { connect } from "react-redux";
import CapitalizeFirstLetter from "../helpers/CapitalizeFirstLetter";
import createMeal from "../actions/createMeal";
import { CreateOptions, MealDataset } from "./MealInputs";

class MealForm extends Component {
  state = {
    meal: {
      name: "",
      day_id: 1,
      recipe_id: this.props.recipeId,
    },
  };

  handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "name") {
      value = CapitalizeFirstLetter(value);
    } else if (e.target.name === "day_id") {
      value = parseInt(value);
    }

    this.setState({
      ...this.state,
      meal: {
        ...this.state.meal,
        [e.target.name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMeal(this.state);
  };

  render() {
    return (
      <form className="create-meal-form" onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="day">Day: </label>
          <select
            name="day_id"
            onChange={this.handleChange}
            value={this.state.meal.day_id}
          >
            {CreateOptions(this.props.days)}
          </select>
        </p>
        <p>
          <label htmlFor="meal">Meal: </label>
          <input
            type="text"
            list="meal_list"
            name="name"
            onChange={this.handleChange}
            value={this.state.meal.name}
          />
          {MealDataset(this.props.days)}
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    days: state.days.days,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMeal: (recipe) => dispatch(createMeal(recipe)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealForm);
