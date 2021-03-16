import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"; /* code change */
import recipeReducer from "./reducers/recipeReducer.js";

import "./index.css";
import App from "./App";

const store = createStore(recipeReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
