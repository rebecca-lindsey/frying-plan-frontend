import React, { Component } from "react";
import { connect } from "react-redux";
import fetchDays from "../actions/fetchDays";
import DayList from "./DayList";
import RecipeCatalogue from "./RecipeCatalogue";
import "./mealplan.css";
import { DragDropContext } from "react-beautiful-dnd";

class MealPlanContainer extends Component {
  componentDidMount() {
    this.props.fetchDays();
  }

  handleOnDragEnd = (result) => {
    if (result.destination) {
      const num = parseInt(result.destination.droppableId);
      if (num) {
        console.log("Day of the week!", num);
      } else {
        console.log("No good!");
      }
    }
  };

  handleOnDragUpdate = (update) => {
    console.log("On Drag Update");
    if (update.destination) {
      if (parseInt(update.destination.droppableId)) console.log("DROP HERE!");
      const recipeIndex = parseInt(update.draggableId) - 1;
      debugger;
    }
    console.log(update);
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.handleOnDragEnd}
        onDragUpdate={this.handleOnDragUpdate}
      >
        <div id="meal-plan-container" className="main-container">
          <div id="recipe-catalogue">
            <h2>Recipes</h2>
            {this.props.recipes.loading ? (
              <h3>Loading...</h3>
            ) : (
              <RecipeCatalogue />
            )}
          </div>
          <div id="calendar">
            <h2>Your Meal Plan</h2>
            {this.props.days.loading ? <h3>Loading...</h3> : <DayList />}
          </div>
        </div>
      </DragDropContext>
    );
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
