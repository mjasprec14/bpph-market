import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import "./cart-icon-dropdown.scss";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-icon-dropdown">
    <div className="cart-icon-dropdown__items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>CHECK OUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
