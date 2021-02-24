import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-icon-dropdown.scss";

const CartDropDown = () => (
  <div className="cart-icon-dropdown">
    <div className="cart-icon-dropdown__items"></div>
    <CustomButton>CHECK OUT</CustomButton>
  </div>
);

export default CartDropDown;
