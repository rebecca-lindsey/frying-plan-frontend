import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={`/users/1/days`}>Meal Plan</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">All Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/recipes/new">New Recipe</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
