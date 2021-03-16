export default function RecipeCard(props) {
  return (
    <div className="recipe-card" id={`recipe-${props.recipe.id}`}>
      <h3>{props.recipe.name}</h3>
    </div>
  );
}
