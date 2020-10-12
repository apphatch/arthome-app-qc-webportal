import initialState from './initialState';
import {
  GET_LIST_USERS_SUCCESS,
  GET_LIST_CHECKIN_CHECKOUT_SUCCESS,
  GET_SHOPS_SUCCESS,
  GET_REPORT_OVERVIEW_SUCCESS,
  GET_REPORT_DETAIL_SUCCESS,
  GET_REPORT_DETAIL_BEGIN,
  GET_REPORT_OVERVIEW_BEGIN,
  GET_LIST_USERS_BEGIN,
  GET_SHOPS_BEGIN,
  GET_REPORT_DETAIL_FAILURE,
  GET_REPORT_OVERVIEW_FAILURE,
  GET_LIST_USERS_FAILURE,
  GET_SHOPS_FAILURE,
} from './constants';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_LIST_CHECKIN_CHECKOUT_SUCCESS:
      return {
        ...state,
        listCheckInCheckOut: action.payload,
        loading: false,
      };
    case GET_SHOPS_SUCCESS:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };
    case GET_REPORT_OVERVIEW_SUCCESS:
      return {
        ...state,
        reportOverview: action.payload,
        loading: false,
      };
    case GET_REPORT_DETAIL_SUCCESS:
      return {
        ...state,
        reportDetail: action.payload,
        loading: false,
      };
    case GET_REPORT_DETAIL_BEGIN:
    case GET_REPORT_OVERVIEW_BEGIN:
    case GET_LIST_USERS_BEGIN:
    case GET_SHOPS_BEGIN:
    case GET_REPORT_DETAIL_FAILURE:
    case GET_REPORT_OVERVIEW_FAILURE:
    case GET_LIST_USERS_FAILURE:
    case GET_SHOPS_FAILURE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
