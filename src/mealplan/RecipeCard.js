export default function RecipeCard(props) {
  return (
    <div className="small-recipe-card">
      <h3>{props.recipe.name}</h3>
    </div>
  );
}
