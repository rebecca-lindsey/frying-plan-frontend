import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/fetchRecipes";
import RecipeList from "./RecipeList";
import "./recipe.css";

class RecipeContainer extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div id="recipe-container" className="main-container">
        <h2>All Recipes</h2>
        {this.props.loading ? <h3>Loading...</h3> : <RecipeList />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);
