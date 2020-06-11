import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";

const routes = (
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
      <Route path="/" component={LoginPage} />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(routes, document.getElementById("root"));
