import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { FiShoppingCart } from "react-icons/fi";
import "./cart-icon.scss";

const Cart = ({ toggleCartHidden, itemCount }) => (
  <div className="cart" onClick={toggleCartHidden}>
    <FiShoppingCart className="cart__icon" />
    <span className="cart__item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
