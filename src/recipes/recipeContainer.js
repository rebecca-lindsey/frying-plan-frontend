import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions/fetchRecipes";

class RecipeContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div id="recipe-container" className="main-container">
        <h2>All Recipes</h2>
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
