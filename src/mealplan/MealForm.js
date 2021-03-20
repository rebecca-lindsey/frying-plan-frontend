import React, { Component } from "react";
import { connect } from "react-redux";
import CapitalizeFirstLetter from "../helpers/CapitalizeFirstLetter";

class MealForm extends Component {
  state = {
    meal_name: "",
    day_name: "",
  };

  handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "meal_name") {
      value = CapitalizeFirstLetter(value);
    }

    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createRecipe(this.state);
    this.setState({
      recipe: {
        name: "",
        category: "",
        cuisine: "",
        recipe_ingredients_attributes: [
          { amount: "", ingredient_attributes: { name: "" } },
        ],
        instructions: "",
      },
    });
    alert("Your recipe has been saved!");
  };

  createOptions() {
    return this.props.days.map((day) => (
      <option value={day.name}>{day.name}</option>
    ));
  }

  mealDataset(days) {
    const mealSet = new Set();
    days.forEach((day) => {
      day.meals.forEach((meal) => {
        console.log(meal);
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
      <form className="meal-form">
        <p>
          <label htmlFor="day">Day: </label>
          <select name="day_name">{this.createOptions()}</select>
        </p>
        <p>
          <label htmlFor="meal">Meal: </label>
          <input type="text" list="meal_list" name="meal_name" />
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

export default connect(mapStateToProps)(MealForm);
