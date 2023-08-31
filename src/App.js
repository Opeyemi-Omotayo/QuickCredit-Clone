import React,{useEffect} from "react";
import AOS from "aos";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import UserDashBoard from "./pages/UserDashBoard";
import Loan from "./Elements/Loan";
import PaymentCard from "./Elements/PaymentCard";
import TransactionHistory from "./Elements/TransactionHistory";
import SideDrawer from "./Elements/SideDrawer";
import RequestLoan from "./Elements/RequestLoan";
import AdminDashBoard from "./pages/AdminDashBoard";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, []);
  const { token, login, logout, userId } = useAuth();

  let routes;

  const tokenn = localStorage.getItem('token');

  if (tokenn) {
    routes = (
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
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
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
        <Redirect to="/app/users/login" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
