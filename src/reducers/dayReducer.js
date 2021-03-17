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
    default:
      return state;
  }
}
