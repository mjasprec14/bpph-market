import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { FiShoppingCart } from "react-icons/fi";
import "./cart-icon.scss";

const Cart = ({ toggleCartHidden }) => (
  <div className="cart" onClick={toggleCartHidden}>
    <FiShoppingCart className="cart__icon" />
    <span className="cart__item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(Cart);
