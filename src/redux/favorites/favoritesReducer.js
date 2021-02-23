import FavoritesActionTypes from "./favoritesActionTypes";

const INITIAL_STATE = {
  hidden: true,
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FavoritesActionTypes.TOGGLE_FAVORITES_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default favoritesReducer;
