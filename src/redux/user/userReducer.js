import { UserActionTypes } from "./userTypes";

const userReducerDefaultState = {
  currentUser: null,
};

const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
