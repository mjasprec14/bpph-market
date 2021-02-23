import FavoritesActionTypes from "./favoritesActionTypes";
import { addItemToFavorite } from "./favoritesUtils";

const INITIAL_STATE = {
  hidden: true,
  favoritesItem: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoritesActionTypes.TOGGLE_FAVORITES_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case FavoritesActionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favoritesItem: addItemToFavorite(state.favoritesItem, action.payload),
      };

    default:
      return state;
  }
};

export default favoritesReducer;
