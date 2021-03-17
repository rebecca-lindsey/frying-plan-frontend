function displayIngredients(ingredients) {
  return ingredients.map((ingredient) => (
    <li>
      {ingredient.ingredient.name} - {ingredient.amount}
    </li>
  ));
}

export default function RecipeCard(props) {
  return (
    <div className="recipe-card" id={`recipe-${props.recipe.id}`}>
      <h3>
        <u>{props.recipe.name}</u>
      </h3>
      <ul>
        <li>
          <b>Category:</b> {props.recipe.category}
        </li>
        <li>
          <b>Cuisine:</b> {props.recipe.cuisine}
        </li>
        <li>
          <b>Ingredients:</b>
          <ul>{displayIngredients(props.recipe.recipe_ingredients)}</ul>
        </li>
        <li>
          <b>Instructions:</b>
          <br />
          {props.recipe.instructions}
        </li>
      </ul>
    </div>
  );
}
