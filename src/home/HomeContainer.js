import React, { Component } from "react";
import "./home.css";
// import homeImage from "../../public/home-image.jpg";
import homeImage from "./home-image.jpg";

export default class HomeContainer extends Component {
  render() {
    return (
      <div id="home-container" className="main-containers">
        <h2>Welcome to Frying Plan!</h2>
        <p>
          Frying Plan is a meal planning app designed to make the weekly chore a
          little more fun. Add your own recipes, use our classic recipes, or
          find a new one on the web - the possibilities are endless!
        </p>
        <img src={homeImage} alt="Table with lots of food" id="home-image" />
        <small>
          Photo by{" "}
          <a href="https://unsplash.com/@therachelstory?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Rachel Park
          </a>{" "}
          on{" "}
          <a href="/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </small>
      </div>
    );
  }
}
