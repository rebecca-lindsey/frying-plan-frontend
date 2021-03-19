import React, { Component } from "react";
import { connect } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";

class RecipeCatalogue extends Component {
  makeRecipeCards() {
    return this.props.recipes.map((recipe, index) => (
      <Draggable
        key={recipe.id}
        draggableId={`recipe-${recipe.id}`}
        index={index}
      >
        {(provided) => (
          <li
            className="small-recipe-card"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <h3>{recipe.name}</h3>
          </li>
        )}
      </Draggable>
    ));
  }

  render() {
    return (
      <div id="recipe-list-area">
        <Droppable droppableId="recipes-drop-area">
          {(provided) => (
            <ul
              className="recipes"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.makeRecipeCards()}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  };
};

export default connect(mapStateToProps)(RecipeCatalogue);
