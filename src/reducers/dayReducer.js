export default function dayReducer(
  state = {
    days: [],
    loading: false,
  },
  action
) {
  switch (action.type) {
    case "REQUEST_DAYS":
      return {
        days: [...state.days],
        loading: true,
      };

    case "ADD_DAYS":
      return {
        days: action.days,
        loading: false,
      };

    case "ADDED_MEAL":
      return {
        ...state,
        days: [
          ...state.days.slice(0, action.meal.day.id - 1),
          {
            ...state.days[action.meal.day.id - 1],
            meals: [...state.days[action.meal.day.id - 1].meals, action.meal],
          },
          ...state.days.slice(action.meal.day.id),
        ],
      };

    case "REMOVED_MEAL":
      return {
        ...state,
        days: [
          ...state.days.slice(0, action.dayId - 1),
          {
            ...state.days[action.dayId - 1],
            meals: [
              ...state.days[action.dayId - 1].meals.filter(
                (meal) => meal.id !== action.mealId
              ),
            ],
          },
          ...state.days.slice(action.dayId),
        ],
      };
    default:
      return state;
  }
}
