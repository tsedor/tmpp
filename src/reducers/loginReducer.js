import { FETCH_LOGIN_SUCCESS, FETCH_LOGOUT_SUCCESS } from '../actions/loginAction';

const initialState = '';

const loginReducer = (state = initialState, action) => {
  console.log(state);
  switch(action.type) {
    case FETCH_LOGIN_SUCCESS:
      return action.payload.token;
    case FETCH_LOGOUT_SUCCESS:
      return '';
    default:
      return state;
  }
}

export default loginReducer;