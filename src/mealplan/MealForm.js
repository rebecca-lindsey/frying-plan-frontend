import React, { Component } from "react";
import { connect } from "react-redux";

export default class MealForm extends Component {
    createMealForm() {
    return (
      <form>
        <p>
          <label htmlFor="day">Day: </label>
          <input type="text" />
        </p>
        <p>
          <label htmlFor="meal">Meal: </label>
          <input type="text" />
        </p>
        <p>
          <input type="submit"
        </p>
      </form>
    );
  }
}
