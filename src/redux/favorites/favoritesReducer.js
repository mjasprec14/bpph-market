import FavoritesActionTypes from "./favoritesActionTypes";
import { addItemToFavorite } from "./favoritesUtils";

const INITIAL_STATE = {
  favoritesHidden: true,
  favoritesItem: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoritesActionTypes.TOGGLE_FAVORITES_HIDDEN:
      return {
        ...state,
        favoritesHidden: !state.favoritesHidden,
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
