function displayIngredients(ingredients) {
  //   console.log(JSON.parse(ingredients));
}

export default function RecipeCard(props) {
  console.log(props.recipe.ingredients);
  console.log(JSON.parse(props.recipe.ingredients));
  console.log(typeof JSON.parse(props.recipe.ingredients));
  return (
    <div className="recipe-card" id={`recipe-${props.recipe.id}`}>
      <h3>{props.recipe.name}</h3>
      <ul>
        <li>Category: {props.recipe.category}</li>
        <li>Cuisine: {props.recipe.cuisine}</li>
        <li>Ingredients: {displayIngredients(props.recipe.ingredients)}</li>
        <li>Instructions: {props.recipe.instructions}</li>
      </ul>
    </div>
  );
}
