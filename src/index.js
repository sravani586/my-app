import React from "react";
import ReactDOM from "react-dom/client";
import CardListNew from "./CardListNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DataModels from "./DataModels";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Switch>
      <Route path="/data_models" exact component={DataModels} />
      <Route path="/" exact component={CardListNew} />
    </Switch>
  </Router>
);
