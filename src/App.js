import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderContainer from "./header/HeaderContainer";
import HomeContainer from "./home/HomeContainer";
import MealPlanContainer from "./mealplan/MealPlanContainer";
import RecipeContainer from "./recipes/RecipeContainer";
import CreateRecipeContainer from "./createrecipe/CreateRecipeContainer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="app-container">
          <HeaderContainer />
          <Switch>
            <Route path="/users/:id/days">
              <MealPlanContainer />
            </Route>
            <Route path="/recipes/new">
              <CreateRecipeContainer />
            </Route>
            <Route path="/recipes">
              <RecipeContainer />
            </Route>
            <Route path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
