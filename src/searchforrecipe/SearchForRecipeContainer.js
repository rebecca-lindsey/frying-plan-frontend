import React, { Component } from "react";
import "./searchforrecipe.css";
import SearchForRecipeForm from "./SearchForRecipeForm";
import { connect } from "react-redux";
import fetchWebRecipes from "../actions/fetchWebRecipes";

class SearchForRecipeContainer extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.fetchWebRecipes(this.state.searchTerm);
  };

  render() {
    return (
      <div id="search-for-recipe-container" className="main-container">
        <h3>Search the Web for a New Recipe</h3>
        <SearchForRecipeForm
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWebRecipes: (searchTerm) => dispatch(fetchWebRecipes(searchTerm)),
  };
};

export default connect(null, mapDispatchToProps)(SearchForRecipeContainer);
