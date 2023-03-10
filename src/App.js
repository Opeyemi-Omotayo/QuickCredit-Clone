import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import VerifyNumber from "./pages/VerifyNumber";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/app/users/registration" exact>
          <Register />
        </Route>
        <Route path="/app/users/login" exact>
          <Login />
        </Route>
        <Route path="/app/users/verification" exact>
          <VerifyNumber />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
