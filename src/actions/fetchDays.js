export function fetchDays() {
  return (dispatch) => {
    dispatch({ type: "REQUEST_DAYS" });
    fetch("http://127.0.0.1:3000/users/1/days.json")
      .then((response) => response.json())
      .then((days) => dispatch({ type: "ADD_DAYS", days }));
  };
}
