import { FETCH_MESSAGES_SUCCESS } from '../actions';

const initialState = [];

const messagesReducer = (state = initialState, action) => {
  switch(action) {
    case FETCH_MESSAGES_SUCCESS:
      console.log(action)
      return action.payload;
    default:
      return state;
  }
}

export default messagesReducer;