import { Droppable, Draggable } from "react-beautiful-dnd";

function displayMeals(meals) {
  return meals.map((meal, index) => {
    return (
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
    );
  });
}

export default function DayCard(props) {
  return (
    <div className="day-card" id={`recipe-${props.day.id}`}>
      <h3>{props.day.name}</h3>
      <Droppable droppableId={props.day.name}>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {displayMeals(props.day.meals)}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
