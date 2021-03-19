export default function RecipeCard(props) {
  return (
    <li className="small-recipe-card">
      <h3>{props.recipe.name}</h3>
    </li>
  );
}
