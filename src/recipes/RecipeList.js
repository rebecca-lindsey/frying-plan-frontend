import React, { Component } from "react";
import { connect } from "react-redux";

class RecipeList extends Component {
  render() {
    return <div id="recipe-list"></div>;
  }
}

export default connect()(RecipeList);
