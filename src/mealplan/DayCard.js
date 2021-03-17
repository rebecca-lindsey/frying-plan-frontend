function displayMeals(meals) {
  return meals.map((meal) => {
    return (
      <li>
        {meal.name} - {meal.recipe.name}
      </li>
    );
  });
}

export default function DayCard(props) {
  return (
    <div className="day-card" id={`recipe-${props.day.id}`}>
      <h3>
        <u>{props.day.name}</u>
      </h3>
      <p>
        <b>Meals:</b> <ul>{displayMeals(props.day.meals)}</ul>
      </p>
    </div>
  );
}
