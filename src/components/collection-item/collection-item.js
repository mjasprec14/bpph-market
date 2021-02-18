import React from "react";
import "./collection-item.scss";
import _ from "lodash";
import numeral from "numeral";

const CollectionItem = ({
  id,
  name,
  genes,
  weight,
  gender,
  diet,
  birth,
  price,
  sellerName,
  location,
  imageUrl,
}) => (
  <div className="collection-item">
    <div
      className="collection-item__image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="collection-item__footer">
      <span className="collection-item__name">{_.capitalize(name)}</span>
      <span className="collection-item__price">{`₱${numeral(price).format(
        "0,0"
      )}`}</span>
    </div>
  </div>
);

export default CollectionItem;
