import React from "react";

import "./cart-item.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity, genes } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" className="cart-item__image" />
    <div className="cart-item__details">
      <span className="cart-item__details--name">{name}</span>

      <span className="cart-item__details--price">
        {genes && quantity} x ₱{price}
      </span>
    </div>
  </div>
);

export default CartItem;
