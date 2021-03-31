export default function SearchForRecipeForm(props) {
  return (
    <form id="search-for-recipe-form">
      <p>
        <label htmlFor="searchTerm">Name of Meal: </label>
        <input
          type="text"
          name="searchTerm"
          value={props.searchTerm}
          onChange={props.handleChange}
        />
      </p>
      <input type="submit" />
    </form>
  );
}
