import FavoritesActionTypes from "./favoritesActionTypes";

export const toggleFavoritesHidden = () => ({
  type: FavoritesActionTypes.TOGGLE_FAVORITES_HIDDEN,
});

export const addFavorite = item => ({
  type: FavoritesActionTypes.ADD_TO_FAVORITES,
  payload: item,
});
