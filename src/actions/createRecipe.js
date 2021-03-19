const createRecipe = (recipe) => {
  return (dispatch) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(recipe),
    };
    fetch("http://127.0.0.1:3000/recipes", configObj)
      .then((res) => res.json())
      .then((recipe) => {
        dispatch({ type: "ADDED_RECIPE", recipe });
      });
  };
};

export default createRecipe;
