import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import UserDashBoard from "./pages/UserDashBoard";
import AdminDashBoard from "./pages/AdminDashBoard";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";
import LoanPage from "./pages/LoanPage";
import PaymentPage from "./pages/PaymentPage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import RequestLoanPage from "./pages/RequestLoanPage";

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
          <LoanPage />
        </Route>
        <Route path="/app/users/loan/request-loan" exact>
          <RequestLoanPage />
        </Route>
        <Route path="/app/users/payment" exact>
          <PaymentPage />
        </Route>
        <Route path="/app/users/history" exact>
         <TransactionHistoryPage />
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
        <main className="scrollable-element">{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
