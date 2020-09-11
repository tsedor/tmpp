import { FETCH_LOGIN_SUCCESS } from '../actions/loginAction';

const initialState = '';

const loginReducer = (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case FETCH_LOGIN_SUCCESS:
      let x = JSON.parse(action.payload);
      return 'x.token';
    default:
      return state;
  }
}

export default loginReducer;