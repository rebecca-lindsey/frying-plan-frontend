import React, { Component } from "react";

export default class MealForm extends Component {
  render() {
    return (
      <form className="meal-form">
        <p>
          <label htmlFor="day">Day: </label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="meal">Meal: </label>
          <input type="text" />
        </p>
        <p>
          <input type="submit" />
        </p>
      </form>
    );
  }
}
