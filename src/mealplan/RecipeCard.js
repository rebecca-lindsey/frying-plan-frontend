export default function RecipeCard(props) {
  return (
    <div
      className="small-recipe-card"
      id={`${props.recipe.id}-recipe`}
      onClick={props.handleClick}
    >
      <h3>{props.recipe.name}</h3>
      <i
        id={`${props.recipe.id}-add-button`}
        className="fas fa-calendar-plus add-to-meal-plan"
      ></i>
    </div>
  );
}
