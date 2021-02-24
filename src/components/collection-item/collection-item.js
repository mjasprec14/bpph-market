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
        <span className="collection-item__name">{_.capitalize(name)}</span>
        <span className="collection-item__price">{`₱${numeral(price).format(
          "0,0"
        )}`}</span>
      </div>

      {/* <CustomButton >
        Add to favorites
      </CustomButton> */}
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
