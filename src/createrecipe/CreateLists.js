function CategoryList(obj) {
  return (
    <>
      <input type="text" name="category" list="category_list" />
      <datalist id="category_list">
        {obj.recipes.map((recipe) => (
          <option value={recipe.category}>{recipe.category}</option>
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
        {obj.recipes.map((recipe) => (
          <option value={recipe.cuisine}>{recipe.cuisine}</option>
        ))}
      </datalist>
    </>
  );
}

export { CategoryList, CuisineList };
