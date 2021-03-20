import MealForm from "./MealForm";

export default function RecipeCard(props) {
  return (
    <div
      className="small-recipe-card"
      id={`${props.recipe.id}-recipe`}
      onClick={props.handleClick}
    >
      <h3>{props.recipe.name}</h3>

      {props.idToAdd === props.recipe.id ? (
        <div className="recipe-form-area">
          <MealForm recipeId={props.recipe.id} />
          <i
            className="fas fa-minus-square remove-recipe-form"
            onClick={props.handleClick}
          ></i>
        </div>
      ) : (
        <i
          id={`${props.recipe.id}-add-button`}
          className="fas fa-calendar-plus add-to-meal-plan"
        ></i>
      )}
    </div>
  );
}
