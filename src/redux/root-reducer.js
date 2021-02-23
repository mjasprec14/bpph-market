import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import favoritesReducer from "./favorites/favoritesReducer";

export default combineReducers({
  user: userReducer,
  favorites: favoritesReducer,
});
