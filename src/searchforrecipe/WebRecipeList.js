import CapitalizeFirstLetter from "../helpers/CapitalizeFirstLetter";

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
      <i className="fas fa-save"></i>
    </div>
  );
}

function displayWebIngredients(recipe) {
  console.log(recipe);
  let i = 1;
  let ingredientObj = {};
  while (recipe[`strIngredient${i}`]) {
    ingredientObj[CapitalizeFirstLetter(recipe[`strIngredient${i}`])] =
      recipe[`strMeasure${i}`];
    i++;
  }
  return processWebIngredients(ingredientObj);
}

function processWebIngredients(ingredientObj) {
  return Object.keys(ingredientObj).map((ing) => (
    <li key={`web-ingredient-${ing}`}>
      {ing} - {ingredientObj[ing]}
    </li>
  ));
}

// <li key={`recipe_ingredient-${ingredient.id}`}>
//   {ingredient.ingredient.name} - {ingredient.amount}
// </li>;
