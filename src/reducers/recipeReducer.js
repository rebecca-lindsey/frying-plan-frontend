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
        ...state,
        recipes: [...state.recipes],
        loading: true,
      };

    case "ADD_RECIPES":
      return {
        ...state,
        recipes: action.recipes,
        loading: false,
      };
    default:
      return state;
  }
}
