import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import FavoritesItem from "../favorites-item/favorites-item";
import "./favorites-dropdown.scss";

const FavoritesDropDown = ({ favoritesItems }) => {
  console.log(favoritesItems);
  return (
    <div className="favorites-dropdown">
      <div className="favorites-dropdown__items">
        {favoritesItems.map(favoritesItem => (
          <FavoritesItem key={favoritesItem.id} item={favoritesItem} />
        ))}
      </div>
      <CustomButton>VIEW FAVORITES</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ favorites: { favoritesItems } }) => ({
  favoritesItems,
});

export default connect(mapStateToProps)(FavoritesDropDown);
