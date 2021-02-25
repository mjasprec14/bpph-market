import React from "react";

import "./favorites-item.scss";

const FavoritesItem = ({
  item: { imageUrl, price, name, quantity, genes },
}) => (
  <div className="favorites-item">
    <img src={imageUrl} alt="item" className="favorites-item__image" />
    <div className="favorites-item__details">
      <span className="favorites-item__details--name">{name}</span>

      <span className="favorites-item__details--price">
        {genes && quantity} x ₱{price}
      </span>
    </div>
  </div>
);

export default FavoritesItem;
