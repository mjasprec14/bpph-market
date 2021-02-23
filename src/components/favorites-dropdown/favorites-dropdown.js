import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./favorites-dropdown.scss";

const FavoritesDropDown = () => (
  <div className="favorites-dropdown">
    <div className="favorites-dropdown__items"></div>
    <CustomButton>VIEW FAVORITES</CustomButton>
  </div>
);

export default FavoritesDropDown;
