import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDays } from "../actions/fetchDays";
import "./mealplan.css";

class MealPlanContainer extends Component {
  componentDidMount() {
    this.props.fetchDays();
  }

  render() {
    console.log(this.props);
    return <div id="meal-plan-container" className="main-container"></div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDays: () => dispatch(fetchDays()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanContainer);
