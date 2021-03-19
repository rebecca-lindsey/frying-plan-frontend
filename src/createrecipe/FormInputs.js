function uniqueValues(array, attribute) {
  return [...new Set(array.map((item) => item[attribute]))].map((item, idx) => (
    <option value={item} key={idx}>
      {item}
    </option>
  ));
}

function CategoryInput(props) {
  return (
    <>
      <input
        type="text"
        name="category"
        list="category_list"
        onChange={props.handleChange}
        value={props.input}
        required
      />
      <datalist id="category_list">
        {uniqueValues(props.recipes, "category")}
      </datalist>
    </>
  );
}

function CuisineInput(props) {
  return (
    <>
      <input
        type="text"
        name="cuisine"
        list="cuisine_list"
        onChange={props.handleChange}
        value={props.input}
        required
      />
      <datalist id="cuisine_list">
        {uniqueValues(props.recipes, "cuisine")}
      </datalist>
    </>
  );
}

function IngredientInputs(props) {
  return props.ingredients.map((ingredient, index) => (
    <p key={index}>
      <label htmlFor={`ingredient-name`}>Name: </label>
      <input
        type="text"
        name={`ingredient-${index}-name`}
        data-id={index}
        id={`ingredient-${index}-name`}
        value={ingredient.ingredient_attributes.name}
        list="ingredient_list"
        className="name"
        onChange={props.handleChange}
        required
      />
      <datalist id="ingredient_list">
        {IngredientDatalist(props.recipes)}
      </datalist>

      <label htmlFor={`ingredient-amount`}>Amount: </label>
      <input
        type="text"
        name={`ingredient-${index}-amount`}
        data-id={index}
        id={`ingredient-${index}-amount`}
        value={ingredient.amount}
        className="amount"
        onChange={props.handleChange}
        required
      />
    </p>
  ));
}

function IngredientDatalist(recipes) {
  const ingredientSet = new Set();
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) =>
      ingredientSet.add(ingredient.name)
    );
  });
  return (
    <datalist id="ingredient_list">
      {[...ingredientSet].sort().map((ingredient, idx) => (
        <option value={ingredient} key={idx}>
          {ingredient}
        </option>
      ))}
    </datalist>
  );
}

export { CategoryInput, CuisineInput, IngredientInputs };
