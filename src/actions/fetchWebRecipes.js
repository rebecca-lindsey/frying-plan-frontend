export default function fetchWebRecipes(searchTerm) {
  return (dispatch) => {
    dispatch({ type: "REQUEST_WEB_RECIPES" });
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((recipes) => {
        console.log(recipes);
        return recipes;
      });
    //   .then((recipes) => dispatch({ type: "ADD_RECIPES", recipes }));
  };
}
