export default function recipeReducer(
  state = {
    recipes: [],
    loading: false,
  },
  action
) {
  switch (action.type) {
    case "REQUEST_RECIPES":
      return {
        recipes: [...state.recipes],
        loading: true,
      };

    case "ADD_RECIPES":
      return {
        recipes: action.recipes,
        loading: false,
      };
    case "ADDED_RECIPE":
      console.log("ADDED recipe!");
      return state;
    default:
      return state;
  }
}
