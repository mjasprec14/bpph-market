import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import { addFavorite } from "../../redux/favorites/favoritesActions";
import { addItem } from "../../redux/cart/cartActions";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import "./collection-item.scss";
import _ from "lodash";
import numeral from "numeral";

const CollectionItem = ({ item, addFavorite, addItem }) => {
  const {
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
  } = item;

  return (
    <div className="collection-item">
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <span
          className="collection-item__favorite-icon-container"
          onClick={() => addFavorite(item)}
        >
          <FiHeart className="collection-item__favorite-icon" />
        </span>
      </div>

      <div className="collection-item__footer">
        <h6 className="collection-item__name">{_.capitalize(name)}</h6>

        <div className="collection-item__footer-content">
          <span className="collection-item__item">{`Gender: ${gender}`}</span>
          <span className="collection-item__item">{`DOH: ${birth}`}</span>
        </div>

        <div className="collection-item__footer-content">
          <span className="collection-item__item">{`Diet: ${diet}`}</span>
          <span className="collection-item__item">{`Weight: ${weight}g`}</span>
        </div>

        <div>Breeder: {sellerName}</div>
        <div>Price: ₱{numeral(price).format("0,0.00")}</div>
        <div>Location: {location}</div>
      </div>

      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart{" "}
        <span className="cart-icon__container">
          <FiShoppingCart className="collection-item__cart-icon" />
        </span>
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addFavorite: item => dispatch(addFavorite(item)),
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
