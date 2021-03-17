import React, { Component } from "react";
import { connect } from "react-redux";
import DayCard from "./DayCard";

class DayList extends Component {
  makeDayCards() {
    return this.props.days.map((day) => <DayCard day={day} />);
  }

  render() {
    return (
      <div id="day-list">
        <ul>{this.makeDayCards()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    days: state.days.days,
  };
};

export default connect(mapStateToProps)(DayList);
