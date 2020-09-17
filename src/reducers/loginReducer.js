import { FETCH_LOGIN_SUCCESS } from '../actions/loginAction';

const initialState = '';

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_LOGIN_SUCCESS:
      return action.payload.token;
    default:
      return state;
  }
}

export default loginReducer;