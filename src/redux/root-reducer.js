import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import favoritesReducer from "./favorites/favoritesReducer";
import cartReducer from "./cart/cartReducer";

export default combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
});
