import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import VerifyNumber from "./pages/VerifyNumber";
import UserDashBoard from "./pages/UserDashBoard";
import Loan from "./Elements/Loan";
import PaymentCard from "./Elements/PaymentCard";
import TransactionHistory from "./Elements/TransactionHistory";
import SideDrawer from "./Elements/SideDrawer";
import RequestLoan from "./Elements/RequestLoan";
import AdminDashBoard from "./pages/AdminDashBoard";
import { UserAuthContextProvider } from "./context/auth-context";

function App() {
  return (
    <UserAuthContextProvider>
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
        <Route path="/app/users/admin" exact>
         <AdminDashBoard />
        </Route>
        <Route path="/app/users/dashboard" exact>
         <UserDashBoard />
        </Route>
        <Route path="/app/users/loan" exact>
          <SideDrawer />
          <Loan />
        </Route>
        <Route path="/app/users/loan/request-loan" exact>
          <RequestLoan />
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
    </UserAuthContextProvider>
    
  );
}

export default App;
