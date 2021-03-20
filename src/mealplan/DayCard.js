function DisplayMeals(props) {
  return props.meals.map((meal) => {
    return (
      <li key={meal.id}>
        <div
          className="meal-card"
          id={`${meal.id}-meal`}
          data-day-id={props.dayId}
        >
          {meal.name}:
          <br />
          {meal.recipe.name}
          <br />
          <i
            className="fas fa-minus-square remove-meal-card"
            onClick={props.handleClick}
          ></i>
        </div>
      </li>
    );
  });
}

export default function DayCard(props) {
  return (
    <div className="day-card" id={`day-${props.day.id}`}>
      <h3>{props.day.name}</h3>
      <ul>
        <DisplayMeals
          meals={props.day.meals}
          dayId={props.day.id}
          handleClick={props.handleClick}
        />
      </ul>
    </div>
  );
}
