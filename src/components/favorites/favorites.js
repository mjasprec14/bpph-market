import React from "react";
import { connect } from "react-redux";
import { toggleFavoritesHidden } from "../../redux/favorites/favoritesActions";
import { FiHeart } from "react-icons/fi";
import "./favorites.scss";

const Favorites = ({ toggleFavoritesHidden, itemCount }) => (
  <div className="favorites" onClick={toggleFavoritesHidden}>
    <FiHeart className="favorites__icon" />
    <span className="favorites__item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleFavoritesHidden: () => dispatch(toggleFavoritesHidden()),
});

const mapStateToProps = ({ favorites: { favoritesItems } }) => ({
  itemCount: favoritesItems.reduce(
    (accumulatedQuantity, favoritesItem) =>
      accumulatedQuantity + favoritesItem.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
