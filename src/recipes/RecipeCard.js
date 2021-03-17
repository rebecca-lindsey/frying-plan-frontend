function displayIngredients(ingredients) {
  console.log(ingredients);
  return ingredients.map((ingredient) => (
    <li>
      {ingredient.ingredient.name} - {ingredient.amount}
    </li>
  ));
}

export default function RecipeCard(props) {
  return (
    <div className="recipe-card" id={`recipe-${props.recipe.id}`}>
      <h3>{props.recipe.name}</h3>
      <ul>
        <li>
          <u>Category:</u> {props.recipe.category}
        </li>
        <li>
          <b>Cuisine:</b> {props.recipe.cuisine}
        </li>
        <li>
          Ingredients:{" "}
          <ul>{displayIngredients(props.recipe.recipe_ingredients)}</ul>
        </li>
        <li>Instructions: {props.recipe.instructions}</li>
      </ul>
    </div>
  );
}
