import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BPPHLogo from "../../assets/bpph-logo-b.png";
import { auth } from "../../firebase/firebase";
import Favorites from "../favorites/favorites";
import FavoritesDropDown from "../favorites-dropdown/favorites-dropdown";
import Cart from "../cart-icon/cart-icon.js";
import CartDropDown from "../cart-icon-dropdown/cart-icon-dropdown";
import "./header.scss";

const Header = ({ currentUser, favoritesHidden, cartHidden }) => (
  <header className="header">
    <Link to="/" className="header__logo-container">
      <img src={BPPHLogo} className="header__logo" alt="BPPH Logo" />
      <h1 className="header__logo--text">BPPH Market</h1>
    </Link>

    <nav className="header__nav">
      <Link to="/market" className="header__nav--link">
        MARKET
      </Link>
      <Link to="/contact" className="header__nav--link">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="header__nav--link" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin" className="header__nav--link">
          SIGN IN
        </Link>
      )}

      <Cart />

      <Favorites />
    </nav>

    {cartHidden ? null : <CartDropDown />}

    {favoritesHidden ? null : (
      <FavoritesDropDown className="favorites-dropdown" />
    )}
  </header>
);

const mapStateToProps = ({
  user: { currentUser },
  favorites: { favoritesHidden },
  cart: { cartHidden },
}) => ({
  currentUser,
  favoritesHidden,
  cartHidden,
});

export default connect(mapStateToProps)(Header);
