import { FETCH_PHONES_SUCCESS } from '../actions/phoneAction';

const initialState = [];

const phonesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PHONES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default phonesReducer;