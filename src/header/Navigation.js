import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={`/users/1/days`} activeClassName="active">
            Meal Plan
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/recipes" activeClassName="active">
            All Recipes
          </NavLink>
        </li>
        <li>
          <NavLink to="/recipes/new" activeClassName="active">
            New Recipe
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
