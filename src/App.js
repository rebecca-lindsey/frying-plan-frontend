import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderContainer from "./header/HeaderContainer";
import HomeContainer from "./home/HomeContainer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="app-container">
          <HeaderContainer />
          <Switch>
            <Route path="/users/:id/days">
              <h1>Meal Plan Component Here</h1>
            </Route>
            <Route path="/recipes/new">
              <h1>New Recipe Component Here</h1>
            </Route>
            <Route path="/recipes">
              <h1>Recipes Component Here</h1>
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
