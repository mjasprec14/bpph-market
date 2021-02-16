import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomePage from "./pages/homepage/homepage";
const MarketPage = () => (
  <section>
    <h1>Market Page</h1>
  </section>
);

const RacksPage = () => (
  <section>
    <h1>Racks Page</h1>
  </section>
);

class App extends React.Component {
  state = {
    currentUser: null,
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/racks" component={RacksPage} />
          <Route path="/market" component={MarketPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
