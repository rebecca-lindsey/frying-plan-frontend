function CategoryList(obj) {
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

function CuisineList(obj) {
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

function IngredientInput(obj, handleChange) {
  return (
    <>
      <label htmlFor={`ingredient-name`}>Name: </label>
      <input
        type="text"
        name="ingredient-name"
        list="ingredient_list"
        className="ingredient-name"
        onChange={() => handleChange}
      />
      {IngredientDatalist(obj)}
      <label htmlFor={`ingredient-amount`}>Amount: </label>
      <input
        type="text"
        name="ingredient-amount"
        className="ingredient-amount"
        onChange={() => handleChange}
      />
    </>
  );
}

function IngredientDatalist(obj) {
  return (
    <datalist id="ingredient_list">
      {obj.recipes.map((recipe) =>
        recipe.ingredients.map((ingredient, idx) => (
          <option value={ingredient.name} key={idx}>
            {ingredient.name}
          </option>
        ))
      )}
    </datalist>
  );
}

export { CategoryList, CuisineList, IngredientInput };
