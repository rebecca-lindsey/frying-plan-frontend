import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDays } from "./actions/fetchDays";
import { fetchRecipes } from "./actions/fetchRecipes";
import HeaderContainer from "./header/HeaderContainer";
import HomeContainer from "./home/HomeContainer";
import MealPlanContainer from "./mealplan/MealPlanContainer";
import RecipeContainer from "./recipes/RecipeContainer";
import CreateRecipeContainer from "./createrecipe/CreateRecipeContainer";

class App extends Component {
  componentDidMount() {
    this.props.fetchDays();
    this.props.fetchRecipes();
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDays: () => dispatch(fetchDays()),
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(null, mapDispatchToProps)(App);
