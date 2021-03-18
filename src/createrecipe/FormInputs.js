function CategoryInput(obj) {
  return (
    <>
      <input type="text" name="category" list="category_list" />
      <datalist id="category_list">
        {obj.recipes.map((recipe, idx) => (
          <option value={recipe.category} key={idx}>
            {recipe.category}
          </option>
        ))}
      </datalist>
    </>
  );
}

function CuisineInput(obj) {
  return (
    <>
      <input type="text" name="cuisine" list="cuisine_list" />
      <datalist id="cuisine_list">
        {obj.recipes.map((recipe, idx) => (
          <option value={recipe.cuisine} key={idx}>
            {recipe.cuisine}
          </option>
        ))}
      </datalist>
    </>
  );
}

function IngredientInputs(props) {
  return props.ingredients.map((ingredient, index) => (
    <>
      <label htmlFor={`ingredient-name`}>Name: </label>
      <input
        type="text"
        name={`ingredient-${index}-name`}
        data-id={index}
        id={`ingredient-${index}-name`}
        value={ingredient.name}
        list="ingredient_list"
        className="ingredient-name"
        onChange={() => props.handleChange}
      />
      {IngredientDatalist(props.recipes)}
      <label htmlFor={`ingredient-amount`}>Amount: </label>
      <input
        type="text"
        name="ingredient-amount"
        className="ingredient-amount"
        onChange={() => props.handleChange}
      />
    </>
  ));
}

function IngredientDatalist(recipes) {
  return (
    <datalist id="ingredient_list">
      {recipes.map((recipe) =>
        recipe.ingredients.map((ingredient, idx) => (
          <option value={ingredient.name} key={idx}>
            {ingredient.name}
          </option>
        ))
      )}
    </datalist>
  );
}

export { CategoryInput, CuisineInput, IngredientInputs };
