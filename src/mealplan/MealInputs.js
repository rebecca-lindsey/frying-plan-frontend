export function CreateOptions(days) {
  return days.map((day) => (
    <option value={day.id} key={day.id}>
      {day.name}
    </option>
  ));
}

export function MealDataset(days) {
  const mealSet = new Set();
  days.forEach((day) => {
    day.meals.forEach((meal) => {
      mealSet.add(meal.name);
    });
  });
  return (
    <datalist id="meal_list">
      {[...mealSet].sort().map((meal, idx) => (
        <option value={meal} key={idx}>
          {meal}
        </option>
      ))}
    </datalist>
  );
}
