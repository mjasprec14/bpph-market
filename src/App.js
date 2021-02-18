import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import MarketPage from "./pages/market/market";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import { auth } from "./firebase/firebase";

const RacksPage = () => (
  <section>
    <h1>Racks Page</h1>
  </section>
);

const App = () => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  console.log(currentUser);
  return (
    <Router>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/racks" component={RacksPage} />
        <Route path="/market" component={MarketPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </Router>
  );
};

export default App;
