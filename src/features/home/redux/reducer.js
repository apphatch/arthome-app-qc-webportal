import initialState from './initialState';
import {
  GET_LIST_USERS_SUCCESS,
  GET_LIST_CHECKIN_CHECKOUT_SUCCESS,
  GET_SHOPS_SUCCESS,
  GET_REPORT_OVERVIEW_SUCCESS,
  GET_REPORT_DETAIL_SUCCESS,
} from './constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_LIST_CHECKIN_CHECKOUT_SUCCESS:
      return {
        ...state,
        listCheckInCheckOut: action.payload,
      };
    case GET_SHOPS_SUCCESS:
      return {
        ...state,
        shops: action.payload,
      };
    case GET_REPORT_OVERVIEW_SUCCESS:
      return {
        ...state,
        reportOverview: action.payload,
      };
    case GET_REPORT_DETAIL_SUCCESS:
      return {
        ...state,
        reportDetail: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
