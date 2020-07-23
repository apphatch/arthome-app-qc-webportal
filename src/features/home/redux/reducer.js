import initialState from './initialState';
import { GET_LIST_USERS_SUCCESS, GET_LIST_CHECKIN_CHECKOUT_SUCCESS } from "./constants";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case GET_LIST_CHECKIN_CHECKOUT_SUCCESS:
      return {
        ...state,
        listCheckInCheckOut: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
