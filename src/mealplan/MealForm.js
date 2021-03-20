import React, { Component } from "react";
import { connect } from "react-redux";
import CapitalizeFirstLetter from "../helpers/CapitalizeFirstLetter";
import createMeal from "../actions/createMeal";

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

  createOptions() {
    return this.props.days.map((day) => (
      <option value={day.id} key={day.id}>
        {day.name}
      </option>
    ));
  }

  mealDataset(days) {
    const mealSet = new Set();
    days.forEach((day) => {
      day.meals.forEach((meal) => {
        mealSet.add(meal.name);
      });
    });
    return (
      <datalist id="meal_list">
        {[...mealSet].sort().map((meal, idx) => (
          <option value={meal} key={idx}>
            {meal}
          </option>
        ))}
      </datalist>
    );
  }

  render() {
    return (
      <form class="create-meal-form" onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="day">Day: </label>
          <select
            name="day_id"
            onChange={this.handleChange}
            value={this.state.meal.day_id}
          >
            {this.createOptions()}
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
          {this.mealDataset(this.props.days)}
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
