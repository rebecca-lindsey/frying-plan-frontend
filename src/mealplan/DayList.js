import React, { Component } from "react";
import { connect } from "react-redux";
import DayCard from "./DayCard";
import removeMeal from "../actions/removeMeal";

class DayList extends Component {
  makeDayCards() {
    return this.props.days.map((day) => (
      <DayCard day={day} key={day.id} handleClick={this.handleClick} />
    ));
  }

  handleClick = (e) => {
    const mealId = parseInt(e.target.parentNode.id);
    const dayId = parseInt(e.target.parentNode.dataset.dayId);
    this.props.removeMeal(mealId, dayId);
  };

  render() {
    return <div id="day-list">{this.makeDayCards()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    days: state.days.days,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeMeal: (mealId, dayId) => dispatch(removeMeal(mealId, dayId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayList);
