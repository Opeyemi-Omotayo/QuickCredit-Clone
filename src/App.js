import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import VerifyNumber from "./pages/VerifyNumber";
import DashBoard from "./pages/DashBoard";
import Loan from "./Elements/Loan";
import PaymentCard from "./Elements/PaymentCard";
import TransactionHistory from "./Elements/TransactionHistory";
import SideDrawer from "./Elements/SideDrawer";

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
        <Route path="/app/users/dashboard" exact>
         <DashBoard />
        </Route>
        <Route path="/app/users/loans" exact>
          <SideDrawer />
          <Loan />
        </Route>
        <Route path="/app/users/payment" exact>
          <SideDrawer />
          <PaymentCard />
        </Route>
        <Route path="/app/users/history" exact>
          <SideDrawer />
          <TransactionHistory />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
