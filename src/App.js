import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/app/register" exact>
          <Register />
        </Route>
        <Route path="/app/login" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
