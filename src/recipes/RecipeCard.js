function displayIngredients(ingredients) {
  return ingredients.map((ingredient) => (
    <li key={`recipe_ingredient-${ingredient.id}`}>
      {console.log(ingredient.id)}
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
        <li key={`recipe-${props.recipe.id}-category`}>
          <b>Category:</b> {props.recipe.category}
        </li>
        <li key={`recipe-${props.recipe.id}-cuisine`}>
          <b>Cuisine:</b> {props.recipe.cuisine}
        </li>
        <li key={`recipe-${props.recipe.id}-ingredients`}>
          <b>Ingredients:</b>
          <ul>{displayIngredients(props.recipe.recipe_ingredients)}</ul>
        </li>
        <li key={`recipe-${props.recipe.id}-instructions`}>
          <b>Instructions:</b>
          <br />
          {props.recipe.instructions}
        </li>
      </ul>
    </div>
  );
}
