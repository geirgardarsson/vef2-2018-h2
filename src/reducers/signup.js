import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions/signup';

const initialState = {
  isFetching: false,
  message: null,
  user: null,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        message: action.message,        
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        user: action.user,
        message: action.message,
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        errors: action.errors,
      }
  default:
    return state;
  }
};