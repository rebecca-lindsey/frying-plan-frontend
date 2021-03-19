import { Draggable, Droppable } from "react-beautiful-dnd";

function displayMeals(meals) {
  if (meals.length === 0) {
    return (
      <li id="no-recipe-placeholder">Add new recipes by dragging here!</li>
    );
  } else {
    return meals.map((meal, index) => (
      <Draggable key={meal.id} draggableId={`meal-${meal.id}`} index={index}>
        {(provided) => (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="meal-card">
              {meal.name}:
              <br />
              {meal.recipe.name}
            </div>
          </li>
        )}
      </Draggable>
    ));
  }
}

export default function DayCard(props) {
  return (
    <div className="day-card" id={`recipe-${props.day.id}`}>
      <h3>{props.day.name}</h3>
      <Droppable droppableId={`day-${props.day.id}-drop-area`}>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {displayMeals(props.day.meals)}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
