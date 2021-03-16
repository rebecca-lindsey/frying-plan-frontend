export function fetchRecipes() {
  return (dispatch) => {
    dispatch({ type: 'REQUEST_RECIPES' });
    fetch('http://127.0.0.1:3000/recipes.json')
      .then(response => response.json())
      .then(recipes => dispatch({ type: 'ADD_RECIPES', recipes }));
  };