import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderContainer from "./header/HeaderContainer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderContainer />
        </div>
        <Switch>
          <Route path="/users/:id/days">
            <h1>Days Component Here</h1>
          </Route>
          <Route path="/recipes">
            <h1>Recipes Component Here</h1>
          </Route>
          <Route path="/recipes/new">
            <h1>New Recipe Component Here</h1>
          </Route>
          <Route path="/">
            <h1>Welcome Page</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}
