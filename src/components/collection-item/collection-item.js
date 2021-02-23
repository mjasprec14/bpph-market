import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import { addFavorite } from "../../redux/favorites/favoritesActions";
import "./collection-item.scss";
import _ from "lodash";
import numeral from "numeral";

const CollectionItem = ({ item, addFavorite }) => {
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
      ></div>
      <div className="collection-item__footer">
        <span className="collection-item__name">{_.capitalize(name)}</span>
        <span className="collection-item__price">{`₱${numeral(price).format(
          "0,0"
        )}`}</span>
      </div>

      <CustomButton onClick={() => addFavorite(item)}>
        Add to favorites
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addFavorite: item => dispatch(addFavorite(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
