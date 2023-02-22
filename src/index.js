import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import App from "./App";

import "./index.css";
import theme from "./components-UI/SwitchButton/reducers/theme";

const reducer = combineReducers({
  theme: theme.reducer,
});

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
