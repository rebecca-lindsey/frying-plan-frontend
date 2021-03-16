export default function recipeReducer(
  state = {
    recipes: [],
  },
  action
) {
  switch (action.type) {
    case "REQUEST_RECIPES":
      return {
        ...state,
        recipes: [...state.recipes],
        requesting: true,
      };

    case "ADD_RECIPES":
      return {
        ...state,
        astronauts: action.recipes,
        requesting: false,
      };
    default:
      return state;
  }
}
