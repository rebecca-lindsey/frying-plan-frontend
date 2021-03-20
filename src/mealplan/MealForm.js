import React, { Component } from "react";
import { connect } from "react-redux";

class MealForm extends Component {
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
          <select name="day">{this.createOptions()}</select>
        </p>
        <p>
          <label htmlFor="meal">Meal: </label>
          <input type="text" list="meal_list" />
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
