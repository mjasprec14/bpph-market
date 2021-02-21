import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import MarketPage from "./pages/market/market";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const RacksPage = () => (
  <section>
    <h1>Racks Page</h1>
  </section>
);

const App = props => {
  // const [currentUser, setCurrentUser] = useState([]);
  const { setCurrentUser, currentUser } = props;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot);
          // console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return unsubscribe;
  }, [setCurrentUser]);

  // console.log(currentUser);currentUser={currentUser}
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/racks" component={RacksPage} />
        <Route path="/market" component={MarketPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
