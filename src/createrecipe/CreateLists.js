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
export { CategoryList };
