import React from "react";
import { connect } from "react-redux";
import { toggleFavoritesHidden } from "../../redux/favorites/favoritesActions";
import { BsStar } from "react-icons/bs";
import "./favorites.scss";

const Favorites = ({ toggleFavoritesHidden }) => (
  <div className="favorites" onClick={toggleFavoritesHidden}>
    <BsStar className="favorites__icon" />
    <span className="favorites__item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleFavoritesHidden: () => dispatch(toggleFavoritesHidden()),
});

export default connect(null, mapDispatchToProps)(Favorites);
