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
        {props.recipes.map((recipe, idx) => (
          <option value={recipe.category} key={idx}>
            {recipe.category}
          </option>
        ))}
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
        {props.recipes.map((recipe, idx) => (
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
    <p key={index}>
      {console.log(ingredient)}
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
      {IngredientDatalist(props.recipes)}
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
