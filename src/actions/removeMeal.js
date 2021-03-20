const removeMeal = (mealId, dayId) => {
  return (dispatch) => {
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    };
    fetch(`http://127.0.0.1:3000/meals/${mealId}`, configObj).then(
      dispatch({ type: "REMOVED_MEAL", mealId, dayId })
    );
  };
};

export default removeMeal;
