function displayMeals(meals) {
  return meals.map((meal) => {
    return (
      <li>
        <div className="meal-card">
          {meal.name}:
          <br />
          {meal.recipe.name}
        </div>
      </li>
    );
  });
}

export default function DayCard(props) {
  return (
    <div className="day-card" id={`recipe-${props.day.id}`}>
      <h3>{props.day.name}</h3>
      <ul>{displayMeals(props.day.meals)}</ul>
    </div>
  );
}
