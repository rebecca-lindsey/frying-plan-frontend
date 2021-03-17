import React, { Component } from "react";
import { connect } from "react-redux";
import "./mealplan.css";

class MealPlanContainer extends Component {
  componentDidMount() {}

  render() {
    return <div id="meal-plan-container" className="main-container"></div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanContainer);
