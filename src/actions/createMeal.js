const createMeal = (meal) => {
  return (dispatch) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(meal),
    };
    fetch("http://127.0.0.1:3000/meals", configObj)
      .then((res) => res.json())
      .then((meal) => {
        dispatch({ type: "ADDED_MEAL", meal });
      });
  };
};

export default createMeal;
