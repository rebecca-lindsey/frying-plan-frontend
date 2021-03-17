import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import dayReducer from "./dayReducer";

const rootReducer = combineReducers({
  recipes: recipeReducer,
  days: dayReducer,
});

export default rootReducer;
