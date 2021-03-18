import React, { Component } from "react";
import "./createrecipe.css";
import RecipeForm from "./RecipeForm";
import { connect } from "react-redux";

class CreateRecipeContainer extends Component {
  render() {
    return (
      <div id="create-recipe-container" className="main-container">
        <h2>Create Recipe</h2>
        {this.props.loading ? <h3>Loading...</h3> : <RecipeForm />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.recipes;
};

export default connect(mapStateToProps)(CreateRecipeContainer);
