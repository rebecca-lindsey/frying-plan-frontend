export default function WebRecipeList(props) {
  return (
    <div id="recipe-list">
      {props.webRecipes.map((recipe) => makeWebRecipeCard(recipe))}
    </div>
  );
}

function makeWebRecipeCard(recipe) {
  return (
    <div className="recipe-card" key={`web-recipe-${recipe.idMeal}`}>
      <h3>
        <u>{recipe.strMeal}</u>
      </h3>
      <ul>
        <li>
          <b>Category:</b> {recipe.strCategory}
        </li>
        <li>
          <b>Cuisine:</b> {recipe.strArea}
        </li>
        <li>
          <b>Ingredients:</b>
          <ul>{displayWebIngredients(recipe)}</ul>
        </li>
        <li>
          <b>Instructions:</b>
          <br />
          {recipe.strInstructions}
        </li>
      </ul>
    </div>
  );
}

function displayWebIngredients(recipe) {
  console.log(recipe);
  return <b>Ingredients here!</b>;
}
